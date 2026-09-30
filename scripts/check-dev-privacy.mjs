// Starts the development server exactly as `npm run dev` does, makes a search with a
// unique typed topic, stops the server, and fails if that topic was written anywhere under .next.
import { spawn } from "node:child_process";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const PORT = 3320;
const token = `devprivacyprobe${Date.now()}`;
const files = (dir) =>
  readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? files(p) : [p];
  });

const server = spawn("npm", ["run", "dev", "--", "-p", String(PORT)], { stdio: ["ignore", "pipe", "pipe"], detached: true });
let output = "";
server.stdout.on("data", (d) => (output += d));
server.stderr.on("data", (d) => (output += d));

async function waitForServer() {
  for (let i = 0; i < 120; i++) {
    try {
      const r = await fetch(`http://localhost:${PORT}/`);
      if (r.ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error("dev server did not start");
}

try {
  await waitForServer();
  const res = await fetch(`http://localhost:${PORT}/?course=physics-30&topic=${token}`);
  if (!(await res.text()).includes(token)) throw new Error("library page did not render the topic");
  await new Promise((r) => setTimeout(r, 1500));
} finally {
  process.kill(-server.pid, "SIGTERM");
  await new Promise((r) => setTimeout(r, 2000));
}

const hits = files(".next").filter((f) => {
  try {
    return readFileSync(f).includes(token);
  } catch {
    return false;
  }
});
if (output.includes(token)) hits.push("(dev server console output)");
if (hits.length) {
  console.error("Typed topic found in:", hits);
  process.exit(1);
}
console.log("OK: typed topic was not logged or written to disk by the dev server.");
