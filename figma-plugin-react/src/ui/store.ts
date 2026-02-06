import type { CollectionEntry } from '@main/api/get-collections'
import { store } from '@simplestack/store';
import { mainApiClient } from '@ui/ui.api';

export const uiStore = store({
  collections: {} as Record<string, CollectionEntry>,
  loading: false
});

mainApiClient.getCollections().then((collections) => {
  uiStore.select('collections').set(collections);
});

export function setLoading(loading: boolean) {
  uiStore.select('loading').set(loading);
}
