import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// import AutoImport from 'unplugin-auto-import/vite' 按需引入
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'

// https://vite.dev/config/
export default ({ mode }) => defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/element/index.scss" as *;`,
      }
    }
  },
  plugins: [
    vue(),
    // AutoImport({
    //   resolvers: [ElementPlusResolver()],
    //   //安装两行后你会发现在组件中不用再导入ref，reactive等
    //   imports: ['vue', 'vue-router'],
    //   dts: "src/auto-import.d.ts",
    // }),
    Components({
      resolvers: [ElementPlusResolver({
        importStyle: 'sass'
      })],
    }),
    ElementPlus({
      useSource: true
    })
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', 'jsx', '.vue', '.json'],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://backend-api-02.newbee.ltd/manage-api/v1', 
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
  },
  base: './' 
})
