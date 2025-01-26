import { defineConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default defineConfig({
  ...viteConfig,
  test: {
    define: {
      global: {},
    },
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.test.{js,jsx}'],
    exclude: ['node_modules', '**/constants/**', '*.config.js', '**/tests/**'],
    setupFiles: ['src/tests/setupTest.js'],
  },
})
