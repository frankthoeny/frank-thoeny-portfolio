import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Required for HMR to work inside Docker or remote hosts
    // host: '0.0.0.0',
    // Use polling in environments where native file watching is unreliable (e.g., WSL2, network file systems)
    watch: {
      usePolling: true,
    },
    // Specific HMR options
    hmr: {
      host: '127.0.0.1',
      // Other HMR specific options can go here
    },
  },
})
