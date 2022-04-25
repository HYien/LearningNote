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