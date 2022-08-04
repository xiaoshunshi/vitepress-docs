import DefaultTheme from 'vitepress/theme'
// 修改全局样式
// import './custom.css'


// 导入主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css'

// 导入插件的主题
import { registerComponents } from './register-components.js'

import MyLayout from './MyLayout.vue'
export default {
  ...DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app }) {
    registerComponents(app)
  }
}
