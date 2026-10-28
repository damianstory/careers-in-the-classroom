"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { relayReading, validRelayConfig, type AtomRelayConfig } from "@/lib/atom-wifi";
import type { ShakeSample } from "@/lib/discover-shake";

const storageKey = "citc-atom-relay";
const subscribeMode = () => () => {};
function requestedWifi() {
  const mode = new URLSearchParams(location.search).get("connection");
  if (mode === "usb") return false;
  try { return mode === "wifi" || Boolean(sessionStorage.getItem(storageKey)); } catch { return mode === "wifi"; }
}
async function fetchConfig(): Promise<AtomRelayConfig> {
  const response = await fetch("http://127.0.0.1:8875/browser-config", { cache: "no-store", signal: AbortSignal.timeout(1500) });
  const candidate: unknown = await response.json();
  if (!response.ok || !validRelayConfig(candidate)) throw new Error("Relay unavailable");
  sessionStorage.setItem(storageKey, JSON.stringify(candidate));
  return candidate;
}
export function useAtomWifi() {
  const requested = useSyncExternalStore(subscribeMode, requestedWifi, () => false);
  const [loading, setLoading] = useState(true);
  const [config, setConfig] = useState<AtomRelayConfig | null>(null);
  const [connected, setConnected] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [status, setStatus] = useState("Wi-Fi shaker ready to connect");
  const latest = useRef<ShakeSample | null>(null);
  const running = useRef<AbortController | null>(null);

  useEffect(() => {
    let disposed = false;
    // The local relay bootstraps a scoped read key only to this exact UI origin.
    // No access token or Wi-Fi credential appears in a URL.
    void Promise.resolve().then(async () => {
      if (disposed) return;
      try {
        if (new URLSearchParams(location.search).get("connection") === "usb") {
          sessionStorage.removeItem(storageKey);
          return;
        }
        const stored: unknown = JSON.parse(sessionStorage.getItem(storageKey) ?? "null");
        const candidate = validRelayConfig(stored) ? stored : requestedWifi() ? await fetchConfig() : null;
        if (!disposed) setConfig(candidate);
      } catch {
        if (!disposed) setStatus("Start the Mac relay, then connect the shaker again.");
      } finally { if (!disposed) setLoading(false); }
    });
    return () => { disposed = true; running.current?.abort(); running.current = null; latest.current = null; };
  }, []);

  function disconnect() {
    running.current?.abort();
    running.current = null;
    latest.current = null;
    setConnected(false);
    setConnecting(false);
    setStatus("Wi-Fi shaker disconnected. Progress is held.");
  }

  async function connect() {
    if (running.current) return;
    let settings = config;
    if (!settings) {
      setConnecting(true);
      try { settings = await fetchConfig(); setConfig(settings); }
      catch { setConnecting(false); setStatus("Mac relay unavailable. Start it and try again."); return; }
    }
    const controller = new AbortController();
    running.current = controller;
    setConnecting(true);
    setStatus("Connecting to the Mac relay…");
    let lastBoot = "", lastSequence = -1;
    while (!controller.signal.aborted) {
      try {
        const sentAt = performance.now();
        const response = await fetch(settings.endpoint + "sample", {
          headers: { Authorization: `Bearer ${settings.key}` }, cache: "no-store",
          signal: AbortSignal.any([controller.signal, AbortSignal.timeout(1200)]),
        });
        if (!response.ok) throw new Error("Relay unavailable");
        const data: unknown = await response.json();
        if (controller.signal.aborted) break;
        const now = performance.now();
        const reading = relayReading(data, now, now - sentAt);
        setConnecting(false);
        if (reading) {
          if (reading.boot !== lastBoot || reading.seq > lastSequence) {
            latest.current = reading.sample;
            lastBoot = reading.boot;
            lastSequence = reading.seq;
          }
          setConnected(true);
          setStatus("Shaker connected over Wi-Fi");
        } else {
          latest.current = null;
          setConnected(false);
          setStatus("Waiting for the Wi-Fi shaker. Progress is held.");
        }
      } catch {
        if (controller.signal.aborted) break;
        latest.current = null;
        setConnected(false);
        setConnecting(false);
        setStatus("Mac relay unavailable. Reconnecting; progress is held.");
      }
      await new Promise<void>((resolve) => {
        const done = () => { clearTimeout(timer); controller.signal.removeEventListener("abort", done); resolve(); };
        const timer = setTimeout(done, 100);
        controller.signal.addEventListener("abort", done, { once: true });
        if (controller.signal.aborted) done();
      });
    }
  }
  return { enabled: requested || Boolean(config), supported: true, status, connected, connecting: loading || connecting, latest, connect, disconnect };
}
