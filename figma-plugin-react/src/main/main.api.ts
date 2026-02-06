import { getCollections } from '@main/api/get-collections'
import { defineApi } from 'figwire/plugin';

const pluginApi = defineApi({
  getCollections,
  notify: (message: string, options?: NotificationOptions) =>
    figma.notify(message, options),
});

export type MainAPI = typeof pluginApi;

