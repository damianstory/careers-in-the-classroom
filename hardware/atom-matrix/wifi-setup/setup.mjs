import { FIRMWARE, networkError, parseMessage, networkNames } from './protocol.mjs';
const $ = selector => document.querySelector(selector);
let port, reader, writer, session = 0, phase = 'idle', operation = '', lastResponse = 0;
let poll, scanTimeout, lastState = '', queue = Promise.resolve();
function status(text, success = false, error = false) {
  $('#status').textContent = text;
  $('#status').dataset.success = success;
  $('#status').dataset.error = error;
}
function enable() {
  $('#fields').disabled = phase !== 'ready' || Boolean(operation);
  $('#connect').disabled = phase !== 'idle';
  $('#disconnect').disabled = !port || phase === 'idle';
  $('#retry').disabled = phase !== 'ready' || Boolean(operation);
}
async function send(command) {
  queue = queue.catch(() => {}).then(async () => {
    if (!writer) throw new Error('USB is not connected');
    await writer.write(new TextEncoder().encode(JSON.stringify(command) + '\n'));
  });
  return queue;
}
function handle(data) {
  if (data.type === 'wifi') {
    if (data.firmware !== FIRMWARE) return;
    phase = 'ready';
    lastResponse = Date.now();
    const changed = lastState !== data.state;
    lastState = data.state;
    $('#usb').textContent = 'Atom connected · Wi-Fi setup firmware ready';
    $('#retry').classList.toggle('hidden', !data.saved);
    if (data.state === 'connecting') {
      operation = 'connect';
      status('Joining Wi-Fi… This can take up to 25 seconds.');
    } else if (data.state === 'connected') {
      operation = '';
      status(data.saved && !data.error ? 'Connected to home Wi-Fi. Setup complete.' : 'Connected to Wi-Fi, but the settings were not saved.', data.saved && !data.error, Boolean(data.error));
      $('#saved').textContent = data.saved && !data.error ? `Saved on Atom · Device address: ${data.ip || 'assigned'}` : (data.error || 'Try setup again to save the network.');
    } else if (data.state === 'failed' || data.state === 'disconnected') {
      operation = '';
      status(data.error || 'Connection lost. Try again.', false, true);
      $('#saved').textContent = data.saved ? 'The previously saved network is still available on the Atom.' : '';
    } else if (changed || operation !== 'scan') {
      status('Ready. Find your network or enter its name below.');
    }
    enable();
  } else if (data.type === 'networks') {
    clearTimeout(scanTimeout);
    if (operation === 'scan') operation = '';
    const names = networkNames(Array.isArray(data.networks) ? data.networks : []);
    $('#networks').replaceChildren(new Option('Choose a network…', ''), ...names.map(name => new Option(name, name)));
    $('#networks').classList.toggle('hidden', !names.length);
    $('#networks-label').classList.toggle('hidden', !names.length);
    if (lastState !== 'connected') status(names.length ? 'Choose a network, then enter its password.' : 'No networks found. Enter the name manually or try again.');
    enable();
  } else if (data.type === 'error') {
    operation = '';
    clearTimeout(scanTimeout);
    // Never display arbitrary serial text: only our known, credential-free errors.
    status('The device could not complete that request. Wait a moment and try again.', false, true);
    enable();
  }
}
async function connect() {
  if (phase !== 'idle') return;
  phase = 'connecting'; enable();
  const token = ++session;
  try {
    port = await navigator.serial.requestPort();
    await port.open({ baudRate: 115200 });
    reader = port.readable.getReader();
    writer = port.writable.getWriter();
    enable();
    $('#usb').textContent = 'USB connected · Waiting for setup firmware…';
    status('Checking the Atom…');
    await send({ command: 'wifi_status' });
    poll = setInterval(() => {
      void send({ command: 'wifi_status' }).catch(() => {});
      if (Date.now() - lastResponse > 9000) {
        $('#fields').disabled = true;
        status('Waiting for the Atom to respond. Keep USB connected; reconnect if this continues.', false, true);
      }
    }, 3000);
    const decoder = new TextDecoder(); let buffer = '';
    while (token === session) {
      const { value, done } = await reader.read(); if (done) break;
      buffer += decoder.decode(value, { stream: true });
      let newline;
      while ((newline = buffer.indexOf('\n')) >= 0) {
        const data = parseMessage(buffer.slice(0, newline).trim());
        buffer = buffer.slice(newline + 1);
        if (data) handle(data);
      }
      if (buffer.length > 8192) buffer = '';
    }
  } catch (error) {
    status(error.name === 'NotFoundError' ? 'No device selected. Click Connect Atom when ready.' : 'USB connection failed. Disconnect other Atom tabs and Arduino Serial Monitor, then try again.', false, true);
  } finally {
    clearInterval(poll); clearTimeout(scanTimeout);
    reader?.releaseLock(); writer?.releaseLock();
    try { await port?.close(); } catch {}
    reader = undefined; writer = undefined; port = undefined;
    phase = 'idle'; operation = ''; lastState = '';
    $('#password').value = '';
    $('#usb').textContent = 'USB disconnected. Wi-Fi settings already saved on the Atom remain there.';
    enable();
  }
}
$('#connect').onclick = connect;
$('#disconnect').onclick = async () => {
  clearInterval(poll); clearTimeout(scanTimeout); session++;
  await queue.catch(() => {});
  await reader?.cancel();
};
$('#scan').onclick = async () => {
  operation = 'scan'; enable(); status('Looking for nearby 2.4 GHz networks…');
  try {
    await send({ command: 'wifi_scan' });
    scanTimeout = setTimeout(() => { operation = ''; status('Scan took too long. Enter the network name manually.', false, true); enable(); }, 15000);
  } catch { operation = ''; status('USB connection lost. Reconnect to continue.', false, true); enable(); }
};
$('#networks').onchange = event => { if (event.target.value) $('#ssid').value = event.target.value; };
$('#retry').onclick = async () => {
  operation = 'connect'; enable(); status('Reconnecting to the network saved on the Atom…');
  try { await send({ command: 'wifi_retry' }); } catch { operation = ''; enable(); }
};
$('#setup').onsubmit = async event => {
  event.preventDefault();
  const ssid = $('#ssid').value, password = $('#password').value;
  const error = networkError(ssid, password);
  if (error) { status(error, false, true); return; }
  operation = 'connect'; enable(); $('#saved').textContent = '';
  status('Sending network details directly to the Atom…');
  try { await send({ command: 'wifi_set', ssid, password }); }
  catch { operation = ''; status('Could not send settings. Reconnect USB and try again.', false, true); enable(); }
  finally { $('#password').value = ''; }
};
if (!('serial' in navigator)) { $('#connect').disabled = true; status('Open this local page in desktop Chrome or Edge to configure the Atom.'); }
