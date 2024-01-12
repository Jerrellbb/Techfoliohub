import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      //own api
      '/api': {
        target: 'http://localhost:8000',
        
      },
    },
  }
})
