## Vue中使用的三种响应式解决方案
+ defineProperty(Vue2.0响应式机制)
```javascript
  let getDouble = n => n*2
  let obj = {}
  let count = 1
  let double = getDouble(count)
  Object.defineProperty(obj, 'count', {
    get() {
      return count
    },
    set(val) {
      count = val
      double = getDouble(val)
    }
  })
  console.log(double) // 2
  obj.count = 2
  console.log(count,double) // 2 4

  delete obj.count
  console.log(double) // 4
```
defineProperty API作为Vue2实现响应式的原理，其中语法是存在一些缺陷。如果删除了obj.count,set函数就不会执行,而double还是之前的数值
+ Proxy(Vue3.0响应式机制)
```javascript
  let getDouble = n => n*2
  let obj = {}
  let count = 1
  let double = getDouble(count)
  let proxy = new Proxy(obj,{
    get: function(target,prop) {
      return target[prop]
    },
    set: function(target,prop,value) {
      target[prop] = value
      if (prop === 'count') {
        double = getDouble(value)
      }
    },
    deleteProperty(target,prop) {
      delete target[prop]
      if (prop === 'count') {
        double = NaN
      }
    }
  })
  console.log(obj.count,double) // undefined 2
  proxy.count = 2
  console.log(obj.count,double) // 2 4
  delete proxy.count 
  console.log(obj.count,double) // undefined NaN
```
可以应用于Vue3复杂的数据结构
+ value setter(Vue3.0响应式实现逻辑)
```javascript
  let getDouble = n => n * 2
  let _value = 1
  double = getDouble(_value)

  let count = {
    get value() {
      return _value
    }
    set value(val) {
      _value = val
      double = getDouble(_value)
    }
  }
  console.log(count.value,double) // 1 2
  count.value = 2
  console.log(count.value,double) // 2 4
```
应用于Vue3简单数据结构

## 响应式实现原理的区别
  ![](\images\响应式实现原理.webp)

## 响应式应用
 ![](\images\响应式数据.webp)

## Vueuse工具包

## 总结
+ 1. 为什么需要响应式
随着应用复杂程度的增加，需要统一关注和管理的状态越多，因此被动管理的、分散管理的状态
不易实现也容易出错。为了解决这个问题，Vue提出了响应式的解决方案。
+ 2. 怎么实现响应式
三种方式拦截对数据进行拦截操作,defineProperty、Proxy、value setter
+ 3. useXXX Function为什么灵活
Vue的组织单位由"Component"变成"data",分割成更细的原子。因此使用时更加灵活，更便于维护。
