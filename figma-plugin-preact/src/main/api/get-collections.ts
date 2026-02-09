export interface CollectionEntry {
  name: string;
  id: string;
  modes: Record<string, ModeEntry>;
}

export interface ModeEntry {
  name: string;
  id: string;
  default: boolean
}

export async function getCollections(): Promise<Record<string, CollectionEntry>> {
  const collections = await figma.variables.getLocalVariableCollectionsAsync();
  const output: Record<string, CollectionEntry> = {}

  for (const collection of collections) {
    const modes: Record<string, ModeEntry> = {}

    for (const { name, modeId } of collection.modes) {
      const modeEntry = {
        name,
        id: modeId,
        default: modeId === collection.defaultModeId
      }

      modes[modeId] = modeEntry
    }

    const collectionEntry: CollectionEntry = {
      id: collection.id,
      name: collection.name,
      modes
    }

    output[collection.id] = collectionEntry
  }

  return output
}

