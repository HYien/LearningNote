## 深入浅出Vue.js阅读笔记
### 什么是Vue.js
Vue.js，通常简称Vue，是一款友好的、多用途且高性能的JavaScript框架，能够帮助我们创建可维护性和可测试性更强的代码。
### Vue是渐进式框架及分层架构
+ 视图层渲染
+ 组件机制
+ 路由机制
+ 状态管理
+ 构建工具

### Vue.js的响应式原理
#### 什么是响应式
当数据变化时，会通知视图进行相应的更新。
#### 什么是变化侦测
变化侦测，监测运行时应用内部的变化，确定发生了什么变化。Vue.js采取了“推”类型的变化侦测方式可以随意调整粒度。
#### 如何追踪变化
JavaScript中如何侦测一个对象的变化？
使用Object.defineProperty和ES6的Proxy，在getter中收集依赖，在setter中触发依赖
```javascript
  function defineReactive (data, key, val) {
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get: function () {
        return val
      },
      set: function (newVal) {
        if (val === newVal) {
          // todo
        }
        val = newVal
      }
    })
  }
```
#### 依赖收集到哪里
在getter中收集依赖，可以将收集依赖封装成一个Dep类，并通知Watcher

#### 什么是Watcher
Watcher是一个中介角色，当数据发生变化时通知它，然后它再通知其他地方。

#### 递归侦测所有key
封装一个Observet类，监听一个数据内的所有属性。

#### 小结
变化侦测就是侦测数据的变化。当数据发生变化时，要能侦测到并发出通知。Object可以通过Object.definePropety将属性转换成getter/setter的形式来追踪变化。
 ![](\images\变化监测.png)

### Array的变化监测
#### 如何追踪数组的变化
可以使用一个拦截器覆盖Array.prototype。
![](\images\数组的变化监测.png)

#### 如何实现数组的拦截器
拦截数组的原型对象prototype,对原型方法进行重写。
#### 使用拦截器覆盖Array原型
只将响应式的数组通过Observer包装进行拦截覆盖。
![](\images\数组变化监测拦截器.png)
#### 数组如何收集依赖
数组将依赖保存在Observer实例上

