export const FIRMWARE = 'citc-wifi-setup-v1';
export function networkError(ssid, password) {
  const length = new TextEncoder().encode(ssid).length;
  if (length < 1 || length > 32) return 'Enter a network name between 1 and 32 bytes.';
  const passwordLength = new TextEncoder().encode(password).length;
  if ((passwordLength >= 8 && passwordLength <= 63) || /^[0-9a-fA-F]{64}$/.test(password)) return '';
  return 'Use the Wi-Fi password (8–63 bytes), or its 64-character hexadecimal key.';
}
export function parseMessage(line) {
  if (!line.startsWith('{')) return null;
  try {
    const data = JSON.parse(line);
    return ['wifi', 'networks', 'error'].includes(data.type) ? data : null;
  } catch { return null; }
}
export function networkNames(items) {
  return [...new Set(items.filter(item => typeof item.ssid === 'string' && item.ssid).map(item => item.ssid))];
}
