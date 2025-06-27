import { defineConfig } from 'vite';
import { resolve } from 'path';

const root = resolve(__dirname, '');
const outDir = resolve(__dirname, '../dist');

export default defineConfig({
  root,
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        blog: resolve(root, 'blog.html'),
        contact: resolve(root, 'contact.html'),
        faq: resolve(root, 'faq.html'),
        portfolio: resolve(root, 'portfolio.html'),
        services: resolve(root, 'services.html'),
        testimonials: resolve(root, 'testimonials.html'),
        what_we_do: resolve(root, 'what-we-do.html'),
      },
    },
  },
}); 