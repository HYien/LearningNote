## 1. 原数组的增删改查
+ pop()方法
pop() 方法从数组中删除最后一个元素，并返回该元素的值。此方法会更改原数组。（当数组为空时返回 undefined）
```javascript
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']
const popElement = plants.pop()
console.log(popElement) // 'tomato'
console.log(plants) // ['broccoli', 'cauliflower', 'cabbage', 'kale']
```

+ shift()方法