export function isHexString(value: any): value is string {
  return typeof value === 'string' && /^#?[0-9a-fA-F]+$/.test(value);
}
