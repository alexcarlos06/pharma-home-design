import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { componentTagger } from 'lovable-tagger'

export default defineConfig(({ command }) => {
  return {
    base: command === 'serve' ? '/' : '/pharma-home-design/',
    server: {
      host: '0.0.0.0',
      port: 8080,
    },
    plugins: [
      react(),
      command === 'serve' && componentTagger()
    ].filter(Boolean),
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})
