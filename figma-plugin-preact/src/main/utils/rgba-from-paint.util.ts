import { isSolidPaint } from './is-solid-paint.util';

export function rgbaFromPaint(paint: Paint) {
  if (!isSolidPaint(paint)) return;

  const rgba: RGBA = {
    r: paint.color.r,
    g: paint.color.g,
    b: paint.color.b,
    a: paint.opacity || 1,
  };

  return rgba;
}
