type MaybeIterable<T> = T | Iterable<T>;

type WithMaybeChildren<T> = T & { children?: MaybeIterable<T> };

function isIterable<T>(v: unknown): v is Iterable<T> {
  return v != null && typeof (v as any)[Symbol.iterator] === 'function';
}

function toIterable<T>(v: MaybeIterable<T>): Iterable<T> {
  return isIterable<T>(v) ? v : [v];
}

function hasChildren<T>(node: T): node is WithMaybeChildren<T> {
  return (
    node != null &&
    'children' in (node as any) &&
    (node as any).children !== undefined &&
    (node as any).children !== null
  );
}

export function* walk<T>(source: MaybeIterable<T>): Generator<T> {
  for (const item of toIterable(source)) {
    yield item as T;
    if (hasChildren<T>(item) && item.children != null) {
      yield* walk<T>(item.children as MaybeIterable<T>);
    }
  }
}
