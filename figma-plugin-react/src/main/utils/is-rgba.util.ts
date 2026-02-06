export function isRgba(value: any): value is RGBA {
  return value && typeof value === 'object' && 'r' in value && 'g' in value && 'b' in value && 'a' in value
}
