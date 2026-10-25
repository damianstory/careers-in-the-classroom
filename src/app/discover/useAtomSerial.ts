"use client";

import { useEffect, useEffectEvent, useRef, useState, useSyncExternalStore } from "react";
import { parseShakeSample, type ShakeSample } from "@/lib/discover-shake";
import { useAtomWifi } from "./useAtomWifi";

type AtomPort = {
  readable: ReadableStream<Uint8Array> | null;
  open(options: { baudRate: number }): Promise<void>;
  close(): Promise<void>;
};
type SerialAccess = { requestPort(): Promise<AtomPort> };
type Connection = { port: AtomPort; reader?: ReadableStreamDefaultReader<Uint8Array> };
const serialAPI = () => (navigator as Navigator & { serial?: SerialAccess }).serial;
const subscribeCapabilities = () => () => {};
const supportsSerial = () => Boolean(serialAPI());
const serverSupportsSerial = () => false;

export function useAtomSerial() {
  const wifi = useAtomWifi();
  const supported = useSyncExternalStore(subscribeCapabilities, supportsSerial, serverSupportsSerial);
  const [status, setStatus] = useState("Shaker not connected");
  const [connected, setConnected] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const latest = useRef<ShakeSample | null>(null);
  const connection = useRef<Connection | null>(null);
  const generation = useRef(0);
  const busy = useRef(false);

  const cleanup = useEffectEvent(() => {
      generation.current++;
      latest.current = null;
      const current = connection.current;
      connection.current = null;
      // The read loop's finally block releases the reader and closes the port.
      void current?.reader?.cancel().catch(() => {});
  });
  useEffect(() => () => cleanup(), []);

  async function disconnect() {
    latest.current = null;
    const current = connection.current;
    connection.current = null;
    setConnected(false);
    setStatus("Shaker disconnected. Progress is held.");
    await current?.reader?.cancel().catch(() => {});
  }

  async function connect() {
    const serial = serialAPI();
    if (!serial || busy.current) return;
    busy.current = true;
    const token = ++generation.current;
    setConnecting(true);
    setStatus("Choose the shaker’s USB serial port");
    let current: Connection | undefined;
    let ending = "Shaker disconnected. Progress is held.";
    try {
      const port = await serial.requestPort();
      if (token !== generation.current) return;
      current = { port };
      await port.open({ baudRate: 115200 });
      if (token !== generation.current) return;
      connection.current = current;
      setConnected(true);
      setConnecting(false);
      setStatus("Shaker connected");
      if (!port.readable) throw new Error("No readable stream");
      const reader = port.readable.getReader();
      current.reader = reader;
      const decoder = new TextDecoder();
      let buffer = "";
      while (token === generation.current && connection.current === current) {
        const { value, done } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        let newline: number;
        while ((newline = buffer.indexOf("\n")) >= 0) {
          const sample = parseShakeSample(buffer.slice(0, newline), performance.now());
          if (sample) latest.current = sample;
          buffer = buffer.slice(newline + 1);
        }
        if (buffer.length > 4096) buffer = "";
      }
    } catch (error) {
      ending = error instanceof DOMException && error.name === "NotFoundError"
        ? "No device selected. Connect when you’re ready."
        : "Couldn’t read the shaker. Disconnect it from other tabs and Arduino Serial Monitor, then reconnect.";
    } finally {
      current?.reader?.releaseLock();
      try { await current?.port.close(); } catch { /* Unplugged or never opened. */ }
      if (token === generation.current) {
        connection.current = null;
        latest.current = null;
        setConnected(false);
        setConnecting(false);
        setStatus(ending);
      }
      busy.current = false;
    }
  }

  return wifi.enabled ? wifi : { supported, status, connected, connecting, latest, connect, disconnect };
}
