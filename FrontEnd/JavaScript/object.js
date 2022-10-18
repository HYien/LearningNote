const o = { [Symbol.toStringTag]: "MyObject"}
console.log(o + "")

function c1() {
  this.p1 = 1;
  this.p2 = function() {
    console.log(this.p1)
  }
}

const o1 = new c1
o1.p2()

function c2() {

}
c2.prototype.p1 = 1
c2.prototype.p2 = function() {
  console.log(this.p1)
}

const o2 = new c2
o2.p2()

// Object.create的polyfill 不支持第二个参数 不支持null做原型
Object.create = function(prototype) {
  const cls = function() {}
  cls.prototype = prototype
  return new cls
}

// 定义一个矩形类
class Rectangle {
  constructor(height, width) {
    this.height = height
    this.width = width
  }

  get area() {
    return this.calcArea()
  }

  calcArea() {
    return this.height * this.width
  }
}

// 类提供的继承能力
class Animal {
  constructor(name) {
    this.name = name
  }

  speak() {
    console.log(this.name + ' make a noise.')
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name)
  }

  speak() {
    console.log(this.name + ' barks.')
  }
}

let d = new Dog('Mitzie')
d.speak()

// class和extends实质上是作为语法糖，统一了JS程序员对基于类的面向对象的模拟
// "基于类"和"基于原型"两种编程范式实现面向对象编程，而JavaScript采用了"基于原型"实现方式

// 对象分类
// 宿主对象(host Objects)：由JavaScript宿主环境提供的对象
// 例如在浏览器环境中，全局对象是window，window上的属性一部分来自JavaScript语言，一部分来自浏览器环境



// 内置对象(built-in Objects)：由JavaScript语言提供的对象
// 内置对象分为：固有对象、原生对象、普通对象

console.log(new Date) // 1
console.log(Date())

console.log(new Image)
// console.log(Image()) 抛出异常

function f() {
  return 1
}
const v = f()
const obj = new f()
// construct的执行过程
// 1. 以Object.prototype为原型创建一个新对象
// 2. 以新对象为this，执行函数的call
// 3. 如果call的返回值是对象，则返回这个对象，否则返回第一步创建的对象
console.log(v)
console.log(obj)

function cls() {
  this.a = 100
  return {
    getValue: () => this.a
  }
}
// 外部永远无法访问a
const obj1 = new cls
console.log(obj1.getValue())

// 获取对象的固有对象
// var set = new Set();
// var objects = [
//     eval,
//     isFinite,
//     isNaN,
//     parseFloat,
//     parseInt,
//     decodeURI,
//     decodeURIComponent,
//     encodeURI,
//     encodeURIComponent,
//     Array,
//     Date,
//     RegExp,
//     Promise,
//     Proxy,
//     Map,
//     WeakMap,
//     Set,
//     WeakSet,
//     Function,
//     Boolean,
//     String,
//     Number,
//     Symbol,
//     Object,
//     Error,
//     EvalError,
//     RangeError,
//     ReferenceError,
//     SyntaxError,
//     TypeError,
//     URIError,
//     ArrayBuffer,
//     SharedArrayBuffer,
//     DataView,
//     Float32Array,
//     Float64Array,
//     Int8Array,
//     Int16Array,
//     Int32Array,
//     Uint8Array,
//     Uint16Array,
//     Uint32Array,
//     Uint8ClampedArray,
//     Atomics,
//     JSON,
//     Math,
//     Reflect];
// objects.forEach(o => set.add(o));

// for(var i = 0; i < objects.length; i++) {
//     var o9 = objects[i]
//     for(var p of Object.getOwnPropertyNames(o9)) {
//         const d = Object.getOwnPropertyDescriptor(o9, p)
//         if( (d.value !== null && typeof d.value === "object") || (typeof d.value === "function"))
//             if(!set.has(d.value))
//                 set.add(d.value), objects.push(d.value);
//         if( d.get )
//             if(!set.has(d.get))
//                 set.add(d.get), objects.push(d.get);
//         if( d.set )
//             if(!set.has(d.set))
//                 set.add(d.set), objects.push(d.set);
//     }
// }
// console.log(set)

const set = new Set()
const objects = [
  Array,
  Date
]

objects.forEach(o => set.add(o))

for(let i = 0; i < objects.length; i++) {
  const objItem = objects[i]
  for(const property of Object.getOwnPropertyNames(objItem)) {
    const descriptor = Object.getOwnPropertyDescriptor(objItem, property)
    if((descriptor.value !== null && typeof descriptor.value === "object") || (typeof descriptor.value === "function")) 
      if(!set.has(descriptor.value)) 
        set.add(descriptor.value), objects.push(descriptor.value); 
    if(descriptor.get) 
      if(!set.has(descriptord.get)) 
        set.add(descriptor.get), objects.push(descriptor.get); 
    if(descriptor.set) 
      if(!set.has(descriptor.set)) 
        set.add(descriptor.set), objects.push(descriptor.set);
  }
}

console.log(set)

// 改变背景颜色
function changeColor(duration,color) {
  document.getElementById("traffic-light").style.background = color;
  await sleep(duration);
}

// 循环执行
function sleep(duration) {
  return new Promise(function(resolve) {
    setTimeout(resolve,duration)
  })
}

async function main() {
  while(true) {
    await changeColor(3000,'green')
    await changeColor(1000,'yellow')
    await changeColor(2000,'red')
  }
}