import { isObject } from './isobject.util';

export function isSolidPaint(paint: Paint): paint is SolidPaint {
  return paint && isObject(paint) && paint.type === 'SOLID';
}
