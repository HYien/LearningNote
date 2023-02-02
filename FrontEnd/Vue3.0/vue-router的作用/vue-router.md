### 什么路由
获取某种资源的路标
### 前后端路由的发展演变
+ JQuery时代
客户端访问路由地址 => 后端路由系统 => 模板匹配 => 重新加载JS、CSS => 页面跳转
+ MVVM前端架构时代
客户端访问路由地址 => 前端入口 => 加载CSS、JS => JS根据路由地址渲染对应组件 => 渲染路由组件 => 页面跳转
### vue-router的实现原理
+ API: location.hash; Event: hashchange
+ API: history.pushState, history.replaceState; Event: popstate
