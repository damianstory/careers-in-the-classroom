// Isolated local demo output: leaves the main preview's .next build intact.
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import next from 'next';
import projectConfig from '../../next.config.ts';
process.env.NEXT_TRACE_SPAN_THRESHOLD_MS = '86400000';
const dir = fileURLToPath(new URL('../../', import.meta.url));
const port = Number(process.env.CITC_WIFI_UI_PORT || 3312);
const app = next({ dev: true, dir, hostname: '127.0.0.1', port, webpack: true, conf: {
  ...projectConfig,
  distDir: '.next/wifi-demo',
  typescript: { tsconfigPath: 'hardware/atom-matrix/tsconfig.demo.json' },
} });
await app.prepare();
createServer(app.getRequestHandler()).listen(port, '127.0.0.1', () => {
  console.log(`Discover Wi-Fi demo: http://127.0.0.1:${port}/discover?play=shake`);
});
