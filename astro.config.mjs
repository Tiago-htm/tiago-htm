// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';



export default defineConfig({
  site: 'https://tiago-htm.github.io',
  base: '/tiago-htm',
  integrations: [icon()],
});


