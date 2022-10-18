let o 
o = Object.create(null)
console.log(o) // {} 无Object.prototype

let o1 = {}

let o2 = Object.create(Object.prototype)
console.log(o1,o2)