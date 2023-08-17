### 1.声明和初始化数组
使用默认值初始化特定大小的数组。
```javascript
  const array = Array(5).fill('')
  //输出 ["", "", "", "", ""]
  
  const matrix = Array(5).fill(0).map(() => Array(5).fill(0))
  //输出[[0, 0, 0, 0, 0],[0, 0, 0, 0, 0],[0, 0, 0, 0, 0],[0, 0, 0, 0, 0],[0, 0, 0, 0, 0]]
```

### 2.找出总和、最小值和最大值
使用reduce方法进行数学运算。
```javascript
  // 数组求和
  const array = [5,4,7,8,9,2]

  array.reduce((a, b) => a + b)
  // 输出 35

  // 求数组中的最大值
  array.reduce((a, b) => a > b ? a :b)

  // 求数组中的最小值
  array.reduce((a, b) => a < b ? a : b)
```

### 3.对字符串、数字或对象数组进行排序
1.字符串数组排序
```javascript
  const stringArr = ["Joe", "Kapil", "Steve", "Musk"]
  stringArr.sort()
  // 输出 ["Joe", "Kapil", "Musk", "Steve"]
  stringArr.reverse()
  // 输出 ["Steve", "Musk", "Kapil", "Joe"]
```
2.数字数组排序
```javascript
  const numArray = [40, 100, 1, 5, 25, 10]
  const sortArray1 = numArray.sort((a,b) => a-b)
  console.log(sortArray1)
  const sortArray2 = numArray.sort((a,b) => b-a)
  console.log(sortArray2)
```
3.对象数组排序
```javascript
  const objectArr = [
    { first_name: 'Lazslo', last_name: 'Jamf'     },
    { first_name: 'Pig',    last_name: 'Bodine'   },
    { first_name: 'Pirate', last_name: 'Prentice' }
  ]
  const sortedObectArr = objectArr.sort((a,b) => a.last_name.localeCompare(b.last_name))
  console.log(sortedObectArr)
  //
```
4.根据真假值排序
```javascript
  const users = [
    { "name": "john", "subscribed": false },
    { "name": "jane", "subscribed": true },
    { "name": "jean", "subscribed": false },
    { "name": "george", "subscribed": true },
    { "name": "jelly", "subscribed": true },
    { "name": "john", "subscribed": false }
  ]
  const subscribedUsersFirst = users.sort((a, b) => Number(b.subscribed) - Number(a.subscribed))
```

### 4.从数组中过滤出虚假值
```javascript
  const array1 = [3, 0, 6, 7, '', false]
  const filterArr = array1.filter(Boolean)
  console.log(filterArr) // [3, 6, 7]
```

### 5.对各种条件使用逻辑运算符
```javascript
  //设置默认值
  function doSomething(arg1) {
    arg1 = arg1 || 10
    return arg1
  }
  //
  let foo = 10
  foo === 10 && doSomething()

  foo === 5 || doSomething()
```

### 6.删除重复值
```javascript
  const array3 = [5,4,7,8,9,2,7,5]
  const uniqueArr = array3.filter((item,idx,arr) => arr.indexOf(item) === idx)
  console.log(uniqueArr)
  const nonUnique = [...new Set(array)]
  console.log(nonUnique)
```

### 7.创建计数器对象或映射
```javascript
  const string = 'kapilalipak'
  const table = {}
  for(let char of string) {
    table[char] = table[char] + 1 || 1
  }
  console.log(table)

  const countMap = new Map() 
  for (let i = 0; i < string.length; i++) {
    if (countMap.has(string[i])) {
      countMap.set(string[i], countMap.get(string[i]) + 1)
    } else {
      countMap.set(string[i], 1)
    }
  }
```

### 8.三元运算符
```javascript
  function Fever(temp) {
    return temp > 97 ? 'Visit Doctor!'
      : temp < 97 ? 'Go out and Play!'
      : temp === 97 ? 'Take Some Rest!'
  }
  //输出
  Fever(97) // 'Take Some Rest!
  Fever(100) // 'Visit Doctor!
```

### 9.通过内置数据结构Set自身特性进行去重
```javascript
  function arr = [1, 2, 2, 3, 4]
  const uniqueArr = Array.from(new Set(arr))
  const uniqueArr2 = [...new Set(arr)]
```

### 10.通过遍历并判断是否存在进行去重
```javascript
  const arr = [1, 2, 2, 3, 4]
  const uniqueArr = []
  arr.forEach(item => {
    if (uniqueArr.indexOf(item) === -1) {
      uniqueArr.push(item)
    }
  })
```

### 11.通过fromEntries转换数组为对象
```javascript
  const entryArr = [
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3']
  ]
  const originalObj = Object.fromEntries(entryArr)
  console.log(originalObj)
  // {key1: 'value1', key2: 'value2', key3: 'value3'}
```

### 12.基于默认值的对象赋值
```javascript
  function fn(setupData) {
    const defaultSetup = {
      email: "justin3go@qq.com",
      userId: "justin3go",
      skill: "code",
      work: "student"
    }
    return { ...defaultSetup, ...setupData }
  }

  const testSetData = { skill: 'sing' }
  console.log(fn(testSetData))
  // { email: "justin3go@qq.com", userId: "justin3go", skill: "sing", work: "student" }
```

### 13.多重条件去重判断优化
```javascript
  if (condition === '1' || condition === '2' || condition === '3') {

  }

  // 优化
  const someConditions = ['1', '2', '3']
  if (someConditions.includes(condition)) {

  }
```

### 14.交换两个变量的值
```javascript
  let a = 1;
  let b = 2;
  [a, b] = [b, a]
```

### 15.位运算
```javascript
// 偶数 & 1 = 0
// 奇数 & 1 = 1
console.log(2 & 1) // 0
console.log(3 & 1) // 1
```

### 16.使用~,>>,<<,>>>,|来取整
```javascript
  console.log(~~ 6.83)    // 6
  console.log(6.83 >> 0)  // 6
  console.log(6.83 << 0)  // 6
  console.log(6.83 | 0)   // 6
  // >>>不可对负数取整
  console.log(6.83 >>> 0)   // 6
```

### 17.使用^来完成值交换
```javascript
  var a = 5
  var b = 8
  a ^= b
  b ^= a
  a ^= b
  console.log(a)   // 8
  console.log(b)   // 5
```

### 18.通过&,>>,|来完成rgb值和16进制颜色值之间的转换
```javascript
  /**
 * 16进制颜色值转RGB
 * @param  {String} hex 16进制颜色字符串
 * @return {String}     RGB颜色字符串
 */
  function hexToRGB(hex) {
    var hexx = hex.replace('#', '0x')
    var r = hexx >> 16
    var g = hexx >> 8 & 0xff
    var b = hexx & 0xff
    return `rgb(${r}, ${g}, ${b})`
}

/**
 * RGB颜色转16进制颜色
 * @param  {String} rgb RGB进制颜色字符串
 * @return {String}     16进制颜色字符串
 */
function RGBToHex(rgb) {
    var rgbArr = rgb.split(/[^\d]+/)
    var color = rgbArr[1]<<16 | rgbArr[2]<<8 | rgbArr[3]
    return '#'+ color.toString(16)
}
// -------------------------------------------------
hexToRGB('#ffffff')               // 'rgb(255,255,255)'
RGBToHex('rgb(255,255,255)')      // '#ffffff'

```