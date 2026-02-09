import { useEffect, useMemo } from 'preact/hooks';
import { signal, type Signal } from '@preact/signals';
import type { StateObject, StatePrimitive, Store } from '@simplestack/store'

export function useStoreValue<T extends StateObject | StatePrimitive>(store: Store<T>): Signal<T> {
  // create the signal once per component instance
  const value = useMemo<Signal<T>>(() => signal(store.get()), [store]);

  useEffect(() => {
    const unsubscribe = store.subscribe((nextValue) => {
      value.value = nextValue;
    });

    // sync after mount (important for hydration / late init)
    value.value = store.get();

    return unsubscribe;
  }, [store, value]);

  return value;
}
