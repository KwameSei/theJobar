import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import viteTsconfigPaths from 'vite-tsconfig-paths';
// import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
    '/api': 'http://localhost:3001',
      // changeOrigin: true,
      // rewrite: (path) => path.replace(/^\/api/, '')
    },
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
})
