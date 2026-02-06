export function hexaToRgba(color: string): RGBA | undefined {
  const colorMatch = color.match(/\w\w/g);
  if (!colorMatch) return;
  const [r = 0, g = 0, b = 0, a = 0] = colorMatch.map(
    (x: string) => Number.parseInt(x, 16) / 255,
  );

  return { r, g, b, a };
}
