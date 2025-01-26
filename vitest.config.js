import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    define: {
      global: {},
    },
    environment: 'jsdom',
    globals: true,
    include: ['**/*.test.{js,jsx}'],
    exclude: ['node_modules', '**/constants/**'],
  },
})
