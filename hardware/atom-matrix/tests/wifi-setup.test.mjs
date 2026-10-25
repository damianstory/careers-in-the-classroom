import assert from 'node:assert/strict';
import { test } from 'node:test';
import { chromium } from '@playwright/test';
import { FIRMWARE, networkError, parseMessage, networkNames } from '../wifi-setup/protocol.mjs';

test('network validation, parser and safe network names', () => {
  assert.equal(networkError('Home network', 'test-password-only'), '');
  assert.equal(networkError('家 Home', 'test-password-only'), '');
  assert.notEqual(networkError('家'.repeat(11), 'test-password-only'), '');
  assert.notEqual(networkError('Home', 'short'), '');
  assert.equal(networkError('Home', 'a'.repeat(64)), '');
  assert.notEqual(networkError('Home', 'z'.repeat(64)), '');
  assert.equal(parseMessage('imu=ok accel=0,0,1 motion=0.1'), null);
  assert.equal(parseMessage('{invalid'), null);
  assert.equal(parseMessage('{"type":"unknown"}'), null);
  assert.deepEqual(networkNames([{ ssid: 'Home' }, { ssid: 'Home' }, { ssid: '<b>network</b>' }]), ['Home', '<b>network</b>']);
});

test('USB setup form: scan, validation, save success, failure and no network transmission of credentials', async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  try {
    const page = await browser.newPage();
    const requests = [], errors = [];
    page.on('request', request => requests.push(request));
    page.on('pageerror', error => errors.push(error.message));
    await page.addInitScript(({ firmware }) => {
      const encoder = new TextEncoder(), decoder = new TextDecoder();
      let controller, saved = false, state = 'needs_setup';
      const emit = message => controller.enqueue(encoder.encode(JSON.stringify(message) + '\n'));
      const report = () => emit({ type: 'wifi', firmware, state, saved, ...(state === 'connected' ? { ip: '192.0.2.10' } : {}), ...(state === 'failed' ? { error: 'Could not join. Check the password and use a 2.4 GHz network.' } : {}) });
      const commands = [];
      Object.defineProperty(navigator, 'serial', { configurable: true, value: { requestPort: async () => ({
        readable: new ReadableStream({ start(source) { controller = source; } }),
        writable: new WritableStream({ write(chunk) {
          const command = JSON.parse(decoder.decode(chunk)); commands.push(command);
          if (command.command === 'wifi_status') report();
          else if (command.command === 'wifi_scan') emit({ type: 'networks', networks: [{ ssid: 'Test Home' }, { ssid: '<b>network</b>' }] });
          else if (command.command === 'wifi_set') {
            state = 'connecting'; report();
            setTimeout(() => { state = command.ssid === 'Fail network' ? 'failed' : 'connected'; saved = state === 'connected'; report(); }, 50);
          }
        } }),
        open: async () => {}, close: async () => {},
      }) } });
      Object.assign(window, { setupTestCommands: commands });
    }, { firmware: FIRMWARE });
    await page.goto('http://127.0.0.1:8874');
    await page.getByRole('button', { name: 'Connect Atom', exact: true }).click();
    await page.getByText('Atom connected · Wi-Fi setup firmware ready').waitFor();
    await page.getByRole('button', { name: 'Find 2.4 GHz networks' }).click();
    await page.getByLabel('Available networks').selectOption('Test Home');
    assert.equal(await page.getByLabel('Wi-Fi network name').inputValue(), 'Test Home');
    assert.equal(await page.locator('b').count(), 0);
    await page.getByLabel('Wi-Fi password', { exact: true }).fill('short');
    await page.getByRole('button', { name: 'Connect and save on Atom' }).click();
    await page.getByText('Use the Wi-Fi password (8–63 bytes), or its 64-character hexadecimal key.', { exact: true }).waitFor();
    await page.getByLabel('Wi-Fi password', { exact: true }).fill('test-password-only');
    await page.getByRole('button', { name: 'Connect and save on Atom' }).click();
    await page.getByText('Connected to home Wi-Fi. Setup complete.', { exact: true }).waitFor();
    assert.equal(await page.getByLabel('Wi-Fi password', { exact: true }).inputValue(), '');
    assert.equal(await page.evaluate(() => localStorage.length + sessionStorage.length), 0);
    const settings = await page.evaluate(() => window.setupTestCommands.filter(command => command.command === 'wifi_set'));
    assert.deepEqual(settings, [{ command: 'wifi_set', ssid: 'Test Home', password: 'test-password-only' }]);
    await page.getByLabel('Wi-Fi network name').fill('Fail network');
    await page.getByLabel('Wi-Fi password', { exact: true }).fill('test-password-only');
    await page.getByRole('button', { name: 'Connect and save on Atom' }).click();
    await page.getByText('Could not join. Check the password and use a 2.4 GHz network.', { exact: true }).waitFor();
    assert.equal(await page.getByRole('button', { name: 'Connect and save on Atom' }).isEnabled(), true);
    await page.getByRole('button', { name: 'Disconnect USB', exact: true }).click();
    await page.getByRole('button', { name: 'Connect Atom', exact: true }).waitFor();
    assert.equal(await page.getByRole('button', { name: 'Connect Atom', exact: true }).isEnabled(), true);
    assert.equal(requests.filter(request => request.method() !== 'GET').length, 0);
    assert.equal(requests.some(request => request.url().includes('test-password-only') || (request.postData() || '').includes('test-password-only')), false);
    assert.deepEqual(errors, []);
  } finally { await browser.close(); }
});
