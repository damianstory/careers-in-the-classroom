#!/usr/bin/env python3
"""Single-Atom home demo relay. Runtime keys stay outside the repository."""
import argparse
import hmac
import ipaddress
import json
import os
from pathlib import Path
import secrets
import threading
import time
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlparse

CONFIG = Path.home() / 'Library/Application Support/CitCAtomRelay/config.json'


def load_config(lan_ip, port, ui_origin):
    folder = CONFIG.parent
    folder.mkdir(parents=True, exist_ok=True, mode=0o700)
    os.chmod(folder, 0o700)
    if CONFIG.exists():
        config = json.loads(CONFIG.read_text())
    else:
        config = {'device_key': secrets.token_hex(32), 'browser_key': secrets.token_hex(32)}
    config.update(lan_ip=lan_ip, port=port, ui_origin=ui_origin)
    descriptor = os.open(CONFIG, os.O_WRONLY | os.O_CREAT | os.O_TRUNC, 0o600)
    with os.fdopen(descriptor, 'w') as target:
        json.dump(config, target)
    os.chmod(CONFIG, 0o600)
    return config


class MotionState:
    def __init__(self):
        self.lock = threading.Lock()
        self.sample = None
        self.boot = None
        self.retired = set()
        self.sequence = -1

    def accept(self, data):
        if not isinstance(data, dict):
            return False
        boot, seq, age, line = (data.get(key) for key in ('boot', 'seq', 'age_ms', 'line'))
        if not isinstance(boot, str) or not 1 <= len(boot) <= 32:
            return False
        if type(seq) is not int or not 0 <= seq <= 0xffffffff:
            return False
        if type(age) is not int or not 0 <= age <= 850:
            return False
        if not isinstance(line, str) or len(line) > 200 or '\n' in line or not line.startswith('imu='):
            return False
        with self.lock:
            if boot in self.retired or (boot == self.boot and seq <= self.sequence):
                return False
            if boot != self.boot:
                if self.boot:
                    self.retired.add(self.boot)
                self.boot = boot
                self.sequence = -1
            self.sequence = seq
            self.sample = { 'boot': boot, 'seq': seq, 'line': line, 'age_ms': age, 'arrived': time.monotonic() }
        return True

    def snapshot(self):
        with self.lock:
            if not self.sample:
                return {'sample': None, 'live': False}
            sample = {key: value for key, value in self.sample.items() if key != 'arrived'}
            sample['age_ms'] += max(0, int((time.monotonic() - self.sample['arrived']) * 1000))
            return {'sample': sample, 'live': sample['age_ms'] <= 850}


def make_handler(config, state):
    origin = config['ui_origin']
    port = config['port']
    hosts = {f'127.0.0.1:{port}', f'localhost:{port}', f'{config["lan_ip"]}:{port}'}

    class Handler(BaseHTTPRequestHandler):
        def log_message(self, *_):
            pass  # Never log authentication data, headers, paths or payloads.

        def permitted(self):
            return self.headers.get('Host') in hosts and self.headers.get('Origin', origin) == origin

        def local(self):
            return ipaddress.ip_address(self.client_address[0]).is_loopback

        def authenticated(self, kind):
            actual = self.headers.get('Authorization', '')
            return hmac.compare_digest(actual, 'Bearer ' + config[kind])

        def reply(self, code, data):
            payload = json.dumps(data).encode()
            self.send_response(code)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Content-Length', str(len(payload)))
            self.send_header('Cache-Control', 'no-store')
            self.send_header('Access-Control-Allow-Origin', origin)
            self.send_header('Vary', 'Origin')
            self.end_headers()
            self.wfile.write(payload)

        def do_OPTIONS(self):
            if not self.permitted() or not self.local():
                self.reply(403, {'error': 'Forbidden'})
                return
            self.send_response(204)
            self.send_header('Access-Control-Allow-Origin', origin)
            self.send_header('Access-Control-Allow-Headers', 'Authorization')
            self.send_header('Access-Control-Allow-Methods', 'GET')
            self.send_header('Access-Control-Max-Age', '600')
            self.end_headers()

        def do_GET(self):
            if not self.permitted() or not self.local():
                self.reply(403, {'error': 'Forbidden'})
                return
            if self.path == '/sample':
                if not self.authenticated('browser_key'):
                    self.reply(401, {'error': 'Unauthorized'})
                    return
                self.reply(200, state.snapshot())
            elif self.path == '/browser-config':
                if self.headers.get('Origin') != origin:
                    self.reply(403, {'error': 'Forbidden'})
                    return
                self.reply(200, {'endpoint': f'http://127.0.0.1:{port}/', 'key': config['browser_key']})
            elif self.path == '/discover':
                self.send_response(303)
                self.send_header('Location', origin + '/discover?play=shake&connection=wifi')
                self.send_header('Cache-Control', 'no-store')
                self.send_header('Referrer-Policy', 'no-referrer')
                self.end_headers()
            elif self.path in ('/', '/status'):
                result = state.snapshot()
                self.reply(200, {'relay': 'ready', 'device_live': result['live'],
                                 'sample_age_ms': result['sample']['age_ms'] if result['sample'] else None,
                                 'open_discover': f'http://127.0.0.1:{port}/discover'})
            else:
                self.reply(404, {'error': 'Not found'})

        def do_POST(self):
            if not self.permitted() or self.path != '/ingest':
                self.reply(403, {'error': 'Forbidden'})
                return
            if not self.authenticated('device_key'):
                self.reply(401, {'error': 'Unauthorized'})
                return
            try:
                length = int(self.headers.get('Content-Length', '0'))
                if not 0 < length <= 2048:
                    raise ValueError('Invalid size')
                self.connection.settimeout(2)
                data = json.loads(self.rfile.read(length))
                if not state.accept(data):
                    self.reply(422, {'error': 'Invalid, stale or repeated sample'})
                    return
            except (ValueError, OSError):
                self.reply(400, {'error': 'Invalid request'})
                return
            self.reply(200, {'ok': True})

    return Handler


def configure_usb(device, config):
    import select
    import termios
    fd = os.open(device, os.O_RDWR | os.O_NOCTTY | os.O_NONBLOCK)
    attributes = termios.tcgetattr(fd)
    attributes[:4] = [0, 0, termios.CS8 | termios.CREAD | termios.CLOCAL, 0]
    attributes[4] = attributes[5] = termios.B115200
    attributes[6][termios.VMIN] = attributes[6][termios.VTIME] = 0
    termios.tcsetattr(fd, termios.TCSANOW, attributes)
    command = {'command': 'relay_set', 'url': f'http://{config["lan_ip"]}:{config["port"]}/ingest', 'token': config['device_key']}
    until, last_sent, buffer = time.monotonic() + 35, 0, b''
    try:
        while time.monotonic() < until:
            if time.monotonic() - last_sent >= 3:
                os.write(fd, (json.dumps(command) + '\n').encode())
                last_sent = time.monotonic()
            if not select.select([fd], [], [], .2)[0]:
                continue
            buffer += os.read(fd, 8192)
            while b'\n' in buffer:
                line, buffer = buffer.split(b'\n', 1)
                try:
                    result = json.loads(line)
                except (ValueError, UnicodeDecodeError):
                    continue
                if result.get('type') == 'relay' and result.get('configured'):
                    print('Mac relay settings saved on Atom. Existing Wi-Fi credentials preserved.')
                    return
                if result.get('type') == 'error':
                    raise RuntimeError('Device rejected relay setup; check its firmware.')
            if len(buffer) > 8192:
                buffer = b''
        raise TimeoutError('No relay setup acknowledgement from Atom')
    finally:
        os.close(fd)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--lan-ip', required=True)
    parser.add_argument('--port', type=int, default=8875)
    parser.add_argument('--ui-origin', default='http://127.0.0.1:3312')
    parser.add_argument('--configure-usb')
    args = parser.parse_args()
    address = ipaddress.ip_address(args.lan_ip)
    ui = urlparse(args.ui_origin)
    if not address.is_private or address.is_loopback or ui.scheme != 'http' or ui.hostname not in ('localhost', '127.0.0.1') or ui.path not in ('', '/'):
        parser.error('Use the Mac LAN address and a localhost UI origin')
    config = load_config(args.lan_ip, args.port, args.ui_origin.rstrip('/'))
    if args.configure_usb:
        configure_usb(args.configure_usb, config)
    else:
        state = MotionState()
        server = ThreadingHTTPServer(('0.0.0.0', args.port), make_handler(config, state))
        server.daemon_threads = True
        print(f'Relay ready. Browser status: http://127.0.0.1:{args.port}/status', flush=True)
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            pass
        finally:
            server.server_close()
