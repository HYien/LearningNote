### 初始项目
#### CDN模式
引入静态资源CDN模式
```html
  <script src="https://unpkg.com/vue@next"></script>
```
> unpkg.com/vue@next 可以拿到最新的 Vue 版本。

新建<code>vue3Demo.html</code>：
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    [v-cloak]{
      display: none;
    }
  </style>
</head>
<body>
  <div id="app" v-cloak>
    <p>姓名：{{ name }}</p>
    <p>职业：{{ state.work }}</p>
  </div>
  <script src="https://unpkg.com/vue@next"></script>
  <script>
    const { createApp, ref, reactive } = Vue;
    const App = {
      setup() {
        const name = ref('十三');
        const state = reactive({
          work: '软件工程师'
        })
        return {
          name,
          state
        }
      }
    }
    createApp(App).mount('#app')
  </script>
</body>
</html>
```

#### Vite模式
<code>Vite</code>开发构建工具，支持原生ES模块导入方法，因此允许快速提供代码，使得开发效率大大提高。
##### 具有三个特点
+ 快速冷启动
+ 即时的热模块更新
+ 真正的按需编译

> 兼容性注意，Vite 需要 Node.js 版本 >= 12.0.0。
打开cmd命令行工具输入
```
  npm init vite-app vue3-vite
```
根据提示启动项目
```
  cd vue3-vite
  npm install (or `yarn`)
  npm run dev (or `yarn dev`)
```
![](images/vue3%E5%90%AF%E5%8A%A8.png)