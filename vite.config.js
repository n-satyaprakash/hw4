import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/hw4/', 
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
});
