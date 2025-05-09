import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/IndoorNavPro.com/', // Match your GitHub repo name exactly
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  }
})
