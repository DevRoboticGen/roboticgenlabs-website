import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      deleteOriginFile: false, // Keep original files
      threshold: 10240, // Only compress files larger than 10KB
    }),
  ],
  build: {
    minify: 'esbuild', // or 'terser' for more aggressive minification
  },
})
