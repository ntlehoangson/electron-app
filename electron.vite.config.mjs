import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin, bytecodePlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [
      externalizeDepsPlugin(),
      bytecodePlugin({
        // bảo vệ thêm chuỗi nhạy cảm (nếu có)
        protectedStrings: ['SECRET_KEY', 'API_TOKEN']
      })
    ]
  },
  preload: {
    plugins: [
      externalizeDepsPlugin(),
      bytecodePlugin()
    ]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [react()]
  }
})
