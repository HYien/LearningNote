let validatorHandler = {
  set: function(obj, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('The age is not an integer')
      }

      if (value > 120) {
        throw new RangeError('The age seems invalid')
      }
    }

    obj[prop] = value
    return true
  }
}

let person = new Proxy({}, validatorHandler)
person.age = 100
console.log(person.age)

// person.age = 'young'  // 抛异常
// person.age = 300 // 抛异常

function extend(sup, base) {
  var descriptor = Object.getOwnPropertyDescriptor(
    base.prototype, "constructor"
  )
}

// apply方法用于拦截函数的调用
var p = new Proxy(function() {}, {
  apply: function(target, thisArg, argumentsList) {
    console.log(target, 'target')
    console.log(thisArg, 'thisArg')
    console.log(argumentsList, 'argumentsList')
    console.log('called: ' + argumentsList.join(','))
    return argumentsList[0] + argumentsList[1] + argumentsList[2]
  }
})

console.log(p(1,2,3))

// handler.construct 用于拦截new 操作符
function monster1(disposition) {
  this.disposition = disposition
}
const handler1 = {
  construct(target, args, newTarget) {
    console.log(`Creating a ${target.name}`)
    console.log(target, args, newTarget)
    return new target(...args)
  }
}
const proxy1 = new Proxy(monster1, handler1)
console.log(new proxy1('fierce').disposition)

// handler.defineProperty拦截对象的Object.defineProperty
var p = new Proxy({}, {
  defineProperty: function(target, prop, descriptor) {
    console.log('called ' + prop)
    console.log(descriptor)
    return true
  }
})

var desc = {
  configurable: true,
  enumerable: true,
  value: 10
}
Object.defineProperty(p, 'a', desc)

var p1 = new Proxy({},{
  defineProperty(target,args,descriptor) {
    console.log(descriptor)
    return Reflect.defineProperty(target,prop,descriptor)
  }
})

Object.defineProperty(p, 'name', {
  value: 'proxy',
  type: 'custom'
})

// handler.deleteProperty 拦截delete 操作
var p2 = new Proxy({}, {
  deleteProperty: function(target, prop) {
    console.log('called: ' + prop)
    return true
  }
})

delete p.a

// handler.get方法用于拦截对象的读取属性操作
const p3 = new Proxy({
  b: 30
}, {
  get: function(target, prop, receiver) {
    console.log('called: ' + prop)
    return target[prop]
  }
})

console.log(p3.b)

// handler.getOwnProperyDescriptor拦截getOwnProperyDescriptor方法

const p4 = new Proxy({ a: 20 }, {
  getOwnPropertyDescriptor: function(target, prop) {
    console.log('called: ' + prop)
    return {
      configurable: true,
      enumerable: true,
      value: 10
    }
  }
})

console.log(Object.getOwnPropertyDescriptor(p4, 'a').value)

// Object.getPrototypeOf拦截Object.getPrototypeOf()/Relect.getPrototypeOf/__proto__/
// Object.prototype.isPrototypeOf()
// instanceof
const obj = {}
const proto = {}
const handler = {
  getPrototypeOf(target) {
    console.log(target === obj) // true
    console.log(this === handler) // true
    return proto
  }
}
const p5 = new Proxy(obj, handler)
console.log(Object.getPrototypeOf(p5) === proto)

// 促发拦截5种方法
const obj1 = {}
const p6 = new Proxy(obj1, {
  getPrototypeOf(target) {
    return Array.prototype
  }
})

console.log(
  Object.getPrototypeOf(p6) === Array.prototype,
  Reflect.getPrototypeOf(p6) === Array.prototype,
  p6.__proto__ === Array.prototype,
  Array.prototype.isPrototypeOf(p6),
  p6 instanceof Array
)

const handler2 = {
  has(target, key) {
    if (key[0] === '_') {
      return false
    }
    return key in target
  }
}

const monster2 = {
  _secret: 'easily scared',
  eyeCount: 4
}

const proxy3 = new Proxy(monster2, handler2)
console.log('eyeCount' in proxy3) // true
console.log('_secret' in proxy3) // false
console.log('_secret' in monster2) // false

// handler.isExtensible用于拦截对象的Object.isExtensible()
// handler.preventExtensions() 方法用于设置对Object.preventExtensions()的拦截
const monster4 = {
  canEvolve: true
}

const handler4 = {
  isExtensible(target) {
    return Reflect.isExtensible(target)
  },
  preventExtensions(target) {
    target.canEvolve = false
    return Reflect.preventExtensions(target)
  }
}
const proxy4 = new Proxy(monster4,handler4)
console.log(Object.isExtensible(proxy4)) // true
console.log(monster4.canEvolve) // true
Object.preventExtensions(proxy4) 
console.log(Object.isExtensible(proxy4)) // false
console.log(monster4.canEvolve); // false

// handler.ownKeys()用于拦截Reflect.ownKeys()

const monster5 = {
  _age: 111,
  [Symbol('secret')]: 'I am scared!',
  eyeCount: 4
}

const handler5 = {
  ownKeys(target) {
    return Reflect.ownKeys(target)
  }
}

const proxy5 = new Proxy(monster5, handler5)

for (const key of Object.keys(proxy5)) {
  console.log(key)
}

// handler.set方法是设置属性值操作的捕获器
const monster6 = {
  eyeCount: 4
}

const handler6 = {
  set(obj, prop, value) {
    if ((prop === 'eyeCount') && ((value % 2) !== 0)) {
      console.log('Monsters must have an even number of eyes')
    } else {
      console.log(arguments)
      return Reflect.set(...arguments)
    }
  }
}

const proxy6 = new Proxy(monster6, handler6)
proxy6.eyeCount = 1
console.log(proxy6.eyeCount)

proxy6.eyeCount = 2
console.log(proxy6.eyeCount)

// handler.setPrototypeOf() 方法主要用来拦截 Object.setPrototypeOf()
const handlerReturnsFalse = {
  setPrototypeOf(target, newProto) {
    return false
  }
}

const newProto = {}
const target = {}
const proxy7 = new Proxy(target, handlerReturnsFalse)
// Object.setPrototypeOf(proxy7,newProto) // throw a TypeError
console.log(Reflect.setPrototypeOf(proxy7,newProto)) // returns false