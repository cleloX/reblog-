import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const resolve = (dir: string) => path.resolve(__dirname, dir)



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // 配置路径语法糖
      '@': resolve('src'),
      'views': resolve('@/views')
    }
  },
  // 配置全局变量
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalDate: ''
  //     }
  //   }
  // }
})
