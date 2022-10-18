// Map对象保存键值对，且按照顺序插入，任何对象或基本类型都可以作为键或值
const map1 = new Map()
map1.set('a', 1)
map1.set('b', 2)
map1.set('c', 3)

console.log(map1.get('a'))
map1.set('a', 97)
console.log(map1.get('a'))

console.log(map1.size)

map1.delete('b')
console.log(map1.size)

// Map正确存储数据的方式
const contacts = new Map()
contacts.set('Jessie', { phone: '213-555-1234', address: '123 N 1st Ave' })
contacts.has('Jessie') // true
contacts.get('Hilary') // undefined
contacts.set('Hilary', { phone: '617-555-4321', address: '321 S 2nd St' })
contacts.get('Jessie') // { phone: '213-555-1234', address: '123 N 1st Ave' }
contacts.delete('Raymond') // false
contacts.delete('Jessie') // true
console.log(contacts.size) // 1

// 实例方法
// 1.Map.prototype.clear 移除所有键值对
// 2.Map.prototype.delete(key) 
// 3.Map.prototype.get(key)
// 4.Map.prototype.has(key)
// 5.Map.prototype.set(key,value)
// 迭代方法
// Map.prototype.keys()
// Map.prototype.values()
// Map.prototype.entries() // 所有键值对数组[key,value]
// Map.prototype.forEach()

const myMap = new Map()

const keyString = 'a string'
const keyObj = {}
const keyFunc = function() {}

// 添加键
myMap.set(keyString,'string键的value')
myMap.set(keyObj,'object键的value')
myMap.set(keyFunc,'func键的value')

console.log(myMap.size) // 3

// 读取值
console.log(myMap.get(keyString)) // string键的value
console.log(myMap.get(keyObj)) // object键的value
console.log(myMap.get(keyFunc)) // func键的value

console.log(myMap.get('a string'))


const iteratorMap = new Map()
iteratorMap.set(0,'zero')
iteratorMap.set(1,'one')

for (const [key, value] of iteratorMap) {
  console.log(key + '=' + value)
}

for (const key of iteratorMap.keys()) {
  console.log(key)
}

for (const value of iteratorMap.values()) {
  console.log(value)
}

for (const [key,value] of iteratorMap.entries()) {
  console.log(key + '=' + value)
}

iteratorMap.forEach((value,key) => {
  console.log(key + '=' + value)
})

// Map与数组的关系
const kvArray = [['key1','value1'], ['key2','value2']]
const arrayMap = new Map(kvArray)

console.log(arrayMap.get('key1'))
console.log(arrayMap.get('key2'))

// map转换成对象
console.log(Array.from(arrayMap)) // 输出与kvArray的副本

console.log([...arrayMap]) // 输出与kvArray的副本

console.log(Array.from(arrayMap.keys())) // ['key1', 'key2']

const original = new Map([
  [1, 'one']
])

const clone = new Map(original)
console.log(clone.get(1)) // one
console.log(original === clone) // false

// Map 对象间可以进行合并，但是会保持键的唯一性
const first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three']
])

const second = new Map([
  [1, 'uno'],
  [2, 'dos']
])

const merged = new Map([...first,...second])
console.log(merged.get(1)) // uno
console.log(merged.get(2)) // dos
console.log(merged.get(3)) // three