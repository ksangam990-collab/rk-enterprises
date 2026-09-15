import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: {
    // Client build → dist/client/
    // SSR build   → dist/server/
    outDir: isSsrBuild ? 'dist/server' : 'dist/client',
  },
}))
