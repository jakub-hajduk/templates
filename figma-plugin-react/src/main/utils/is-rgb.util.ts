import { isObject } from './isobject.util';

export function isRGBColor(value: VariableValue): value is RGBA {
  if (!isObject(value)) return false;

  if ('r' in value && 'g' in value && 'b' in value) {
    return true;
  }

  return false;
}
