import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import { resolve } from 'path'
import ElementPlus from 'unplugin-element-plus/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // 设置打包路径
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@com': resolve(__dirname, 'src/components')
    }
  },
  css: {
    // css预处理
    preprocessorOptions: {
      scss: {
        /*
          引入var.scss全局预定义变量，
          单文件引入 '@use "@/styles/global/index.scss" as *;'
          多文件引入
          '@import "@/assets/scss/globalVariable1.scss";@import "@/assets/scss/globalVariable2.scss";'
  			  */
        additionalData: '@use "@/styles/global/index.scss" as *;'
      }
    }
  },
  plugins: [
    vue(),
    eslintPlugin({
      include: ['src/**/*.vue', 'src/**/*.js'], // 检查的文件
      cache: false
    }),
    ElementPlus({
      importStyle: 'sass',
      useSource: true
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  server: {
    open: true
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        // 生产环境时移除console
        // drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log']
      }
    }
  }
})
