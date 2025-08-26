import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://petervanbohemen.de',
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
  vite: {
    optimizeDeps: {
      exclude: ['@astrojs/image']
    }
  }
});