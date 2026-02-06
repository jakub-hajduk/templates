import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { sync as rimraf } from 'rimraf';
import { build, mergeConfig } from 'vite';
import mainConfig from './vite.plugin';
import uiConfig from './vite.ui';

const __dirname = fileURLToPath(new URL('..', import.meta.url));

const watchMode = process.argv.slice(2)[0] === 'watch';

(async () => {
  const distDir = resolve(__dirname, 'dist');
  rimraf(distDir);

  const mainConfigOverrides = {
    build: {
      outDir: distDir,
      formats: ['es'],
      ...(watchMode ? {watch: { include: ['src/main/**/*', 'src/shared/**/*'] }} : null)
    },
  };

  const uiConfigOverrides = {
    build: {
      outDir: distDir,
      formats: ['es'],
      ...(watchMode ? {watch: { include: ['src/ui/**/*', 'src/shared/**/*'] }} : null)
    },
  };

  const finalMainConfig = mergeConfig(mainConfig, mainConfigOverrides);
  const finalUiConfig = mergeConfig(uiConfig, uiConfigOverrides);

  const pluginBuild = build(finalMainConfig);
  const uiBuild = build(finalUiConfig);

  await Promise.all([pluginBuild, uiBuild]);
})();
