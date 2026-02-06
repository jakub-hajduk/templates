export function isNumber(value: any): value is number {
  return (
    (typeof value === 'number' && !Number.isNaN(value)) ||
    value instanceof Number
  );
}
