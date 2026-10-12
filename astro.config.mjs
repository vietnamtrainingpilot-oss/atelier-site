import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vietnamtrainingpilot-oss.github.io',
  base: '/atelier-site',
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'auto',
  },
});
