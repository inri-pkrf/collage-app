import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import FontsPlugin from 'unplugin-fonts/vite';

export default defineConfig({
  plugins: [
    vue(), // Vue plugin
    FontsPlugin({
      // Configuration options for unplugin-fonts
      extensions: ['woff', 'woff2'], // File extensions to include
      limit: 4096, // Limit in bytes for inlining fonts (optional)
      fontFace: true, // Generate @font-face rules (optional)
      preload: true, // Add preload links to fonts (optional)
    }),
  ],
});
