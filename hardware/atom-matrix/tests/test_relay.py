import importlib.util
from pathlib import Path
import threading
import unittest
import urllib.error
import urllib.request
import json
from http.server import ThreadingHTTPServer

spec = importlib.util.spec_from_file_location('relay', Path(__file__).parents[1] / 'relay.py')
relay = importlib.util.module_from_spec(spec)
spec.loader.exec_module(relay)


class RelayTests(unittest.TestCase):
    def test_fresh_sequence_and_boot_deduplication(self):
        state = relay.MotionState()
        sample = {'boot': 'a', 'seq': 1, 'age_ms': 10, 'line': 'imu=ok accel=0,0,1 motion=1.000'}
        self.assertTrue(state.accept(sample))
        self.assertFalse(state.accept(sample))
        self.assertFalse(state.accept({**sample, 'seq': 0}))
        self.assertFalse(state.accept({**sample, 'age_ms': 900, 'seq': 2}))
        self.assertTrue(state.accept({**sample, 'boot': 'b', 'seq': 0}))
        self.assertFalse(state.accept({**sample, 'seq': 100}))
        self.assertTrue(state.snapshot()['live'])
        with state.lock:
            state.sample['arrived'] -= 2
        self.assertFalse(state.snapshot()['live'])

    def test_http_authentication_origin_and_motion_only_credentials(self):
        config = {'ui_origin': 'http://127.0.0.1:3312', 'port': 0, 'lan_ip': '192.0.2.1', 'device_key': 'write-test', 'browser_key': 'read-test'}
        # Allocate a test port first, then construct the Host allowlist with it.
        server = ThreadingHTTPServer(('127.0.0.1', 0), relay.make_handler(config, relay.MotionState()))
        config['port'] = server.server_port
        server.RequestHandlerClass = relay.make_handler(config, relay.MotionState())
        thread = threading.Thread(target=server.serve_forever, daemon=True)
        thread.start()
        base = f'http://127.0.0.1:{server.server_port}'
        def request(path, method='GET', key=None, origin=None, body=None):
            headers = {'Content-Type': 'application/json'}
            if key: headers['Authorization'] = 'Bearer ' + key
            if origin: headers['Origin'] = origin
            req = urllib.request.Request(base + path, method=method, headers=headers, data=json.dumps(body).encode() if body else None)
            try:
                with urllib.request.urlopen(req, timeout=2) as result:
                    return result.status, json.load(result)
            except urllib.error.HTTPError as error:
                with error:
                    return error.code, json.load(error)
        try:
            self.assertEqual(request('/browser-config')[0], 403)
            self.assertEqual(request('/browser-config', origin=config['ui_origin'])[0], 200)
            self.assertEqual(request('/browser-config', origin='https://unrelated.example')[0], 403)
            self.assertEqual(request('/sample')[0], 401)
            self.assertEqual(request('/sample', key='write-test')[0], 401)
            self.assertEqual(request('/sample', key='read-test', origin='https://unrelated.example')[0], 403)
            sample = {'boot': 'a', 'seq': 0, 'age_ms': 0, 'line': 'imu=ok accel=0,0,1 motion=1.000'}
            self.assertEqual(request('/ingest', method='POST', key='read-test', body=sample)[0], 401)
            self.assertEqual(request('/ingest', method='POST', key='write-test', body=sample)[0], 200)
            self.assertEqual(request('/ingest', method='POST', key='write-test', body=sample)[0], 422)
            status, result = request('/sample', key='read-test')
            self.assertEqual(status, 200)
            self.assertTrue(result['live'])
            self.assertEqual(result['sample']['seq'], 0)
            self.assertNotIn('key', json.dumps(result))
        finally:
            server.shutdown()
            server.server_close()
            thread.join()


if __name__ == '__main__':
    unittest.main()
