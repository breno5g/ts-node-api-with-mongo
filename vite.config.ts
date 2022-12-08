/// <reference types="vitest" />
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@controllers': path.resolve(__dirname, 'src/adapters/controllers'),
      '@middlewares': path.resolve(__dirname, 'src/adapters/middlewares'),
      '@repositories': path.resolve(__dirname, 'src/adapters/repositories'),
      '@external': path.resolve(__dirname, 'src/external'),
      '@entities': path.resolve(__dirname, 'src/entities'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@shared': path.resolve(__dirname, 'src/shared')
    }
  },
  test: {
    exclude: [
      'node_modules'
    ],
    passWithNoTests: true,
    allowOnly: true
  }
});
