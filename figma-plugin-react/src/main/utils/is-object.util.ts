export function isObject(value: any): value is object {
  return value.constructor.name === 'Object';
}
