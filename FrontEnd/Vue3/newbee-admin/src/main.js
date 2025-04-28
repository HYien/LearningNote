import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import {
//   ElButton,
//   ElContainer,
//   ElAside,
//   ElMenu,
//   ElSubMenu,
//   ElMenuItemGroup,
//   ElMenuItem,
//   ElForm,
//   ElFormItem,
//   ElInput,
//   ElCheckbox,
//   ElPopover,
//   ElTag,
//   ElCard,
//   ElTable,
//   ElTableColumn,
//   ElPopconfirm,
//   ElUpload,
//   ElDialog,
//   ElPagination,
//   ElCascader,
//   ElRadioGroup,
//   ElRadio,
//   ElSelect,
//   ElOption
// } from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

const orderStatus = {
  0: '待支付',
  1: '已支付',
  2: '配货完成',
  3: '出库成功',
  4: '交易成功',
  '-1': '手动关闭',
  '-2': '超时关闭',
  '-3': '商家关闭'
}  

app.config.globalProperties.$filters = {
  orderMap(status) {
    return orderStatus[status] || '未知状态'
  },
  prefix(url) {
    if (url && url.startsWith('http')) {
      // 当 url 以 http 开头时候，我们返回原路径
      return url
    } else {
      // 否则，我们给路径添加 host，如下
      url = `http://backend-api-02.newbee.ltd${url}`
      return url
    }
  }
}
app.config.globalProperties.goTop = function () {
  const main = document.querySelector('.main')
  main.scrollTop = 0
}
app.use(router)
// app.use(ElementPlus)
// app.use(ElButton)
//   .use(ElContainer)
//   .use(ElAside)
//   .use(ElMenu)
//   .use(ElSubMenu)
//   .use(ElMenuItemGroup)
//   .use(ElMenuItem)
//   .use(ElForm)
//   .use(ElFormItem)
//   .use(ElCheckbox)
//   .use(ElInput)
//   .use(ElPopover)
//   .use(ElTag)
//   .use(ElCard)
//   .use(ElTable)
//   .use(ElTableColumn)
//   .use(ElPopconfirm)
//   .use(ElUpload)
//   .use(ElDialog)
//   .use(ElPagination)
//   .use(ElCascader)
//   .use(ElRadioGroup)
//   .use(ElRadio)
//   .use(ElSelect)
//   .use(ElOption)

app.mount('#app')
