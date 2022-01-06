import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Monorepo',
  mode: 'site',
  outputPath: 'docs-dist',
  navs: [
    {
      title: 'FormRender',
      path: '/form-render',
    },
  ],
  mfsu: {},
  esbuild: {},
  // more config: https://d.umijs.org/config
});
