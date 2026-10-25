import assert from 'node:assert/strict';
import { test } from 'node:test';
import { chromium } from '@playwright/test';

test('Discover uses Wi-Fi readings, holds for light/stale data, selects an actual card, and preserves USB mode', { timeout: 90000 }, async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.addInitScript(() => { Object.defineProperty(navigator, 'serial', { configurable: true, value: { requestPort: () => { throw new Error('USB must not be used in Wi-Fi mode'); } } }); });
    let motion = .3, stale = false;
    const start = Date.now();
    await page.route('http://127.0.0.1:8875/sample', async route => {
      const age = (Date.now() - start) % 500;
      await route.fulfill({ status: 200, headers: {
        'Access-Control-Allow-Origin': 'http://127.0.0.1:3312',
        'Access-Control-Allow-Headers': 'Authorization',
      }, contentType: 'application/json', body: JSON.stringify({ sample: {
        boot: 'test-boot', seq: Math.floor((Date.now() - start) / 500), age_ms: stale ? 5000 : age,
        line: `imu=ok accel=0,0,1 motion=${motion.toFixed(3)}`,
      } }) });
    });
    await page.route('http://127.0.0.1:8875/browser-config', route => route.fulfill({ status: 200, headers: { 'Access-Control-Allow-Origin': 'http://127.0.0.1:3312' }, contentType: 'application/json', body: JSON.stringify({ endpoint: 'http://127.0.0.1:8875/', key: 'a'.repeat(64) }) }));
    await page.goto('http://127.0.0.1:3312/discover?play=shake&connection=wifi');
    await page.getByRole('button', { name: 'Connect shaker', exact: true }).click();
    await page.getByText('Shaker connected over Wi-Fi', { exact: true }).waitFor();
    assert.equal(new URL(page.url()).hash, '');
    await page.getByRole('button', { name: 'Start shake round Space' }).click();
    const meter = page.getByRole('progressbar', { name: 'Shake progress' });
    await page.waitForTimeout(1600);
    assert.equal(await meter.getAttribute('aria-valuenow'), '0');
    motion = 1.5;
    await page.waitForTimeout(2200);
    const earned = Number(await meter.getAttribute('aria-valuenow'));
    assert.ok(earned > 0);
    stale = true;
    await page.waitForTimeout(400);
    const paused = await meter.getAttribute('aria-valuenow');
    await page.waitForTimeout(1100);
    assert.equal(await meter.getAttribute('aria-valuenow'), paused);
    stale = false; motion = 3;
    await page.waitForTimeout(8500);
    await page.getByRole('heading', { name: 'What could this person do?', exact: true }).waitFor();
    assert.equal(new URL(page.url()).searchParams.get('step'), '0');
    assert.match(new URL(page.url()).searchParams.get('role'), /^\d{2}$/);
    await page.getByRole('button', { name: 'Reveal the job', exact: true }).click();
    assert.equal(new URL(page.url()).searchParams.get('step'), '1');
    assert.equal(await page.locator('#discover-title').count(), 1);
    await page.goto('http://127.0.0.1:3312/discover?play=shake&connection=usb');
    await page.getByRole('button', { name: 'Connect shaker', exact: true }).waitFor();
    assert.equal(await page.evaluate(() => sessionStorage.getItem('citc-atom-relay')), null);
    assert.deepEqual(errors, []);
  } finally { await browser.close(); }
});
