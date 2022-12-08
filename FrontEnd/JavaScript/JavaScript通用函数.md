### 1.once函数
```javascript
  function once(fn, replacer = null) {
    return function (...args) {
      if (fn) {
        const ret = fn.apply(this, args);
        fn = null;
        return ret;
      }

      if (replacer) {
        return replacer.apply(this, args)
      };
    }
  }
```

### 2.throttle节流函数
节流是让事件处理函数隔指定时间再触发，指定时间内只执行一次，可以多次执行
```javascript
    // 节流函数
    function throttle(fn, ms = 100) {
      let throttleTimer = null
      return function(...args) {
        if (!throttleTimer) {
          const ret = fn.apply(this, args)
          throttleTimer = setTimeout(() => {
            throttleTimer = null
          }, ms)
          return ret
        }
      }
    }
```

### 3.debounce防抖函数
防抖是让操作函数只响应最后一次操作，只执行一次
```javascript
    // 节流函数
    function debounce(fn, ms = 100) {
      let debounceTimer = null
      return function(...args) {
        if (debounceTimer) clearTimeout(debounceTimer)
        debounceTimer = setTimeout(() => {
          fn.apply(this, args)
        }, ms)
      }
    }
```

### 4.intercet拦截器函数
```javascript
  function intercept(fn, {beforeCall = null, afterCall = null}) {
    return function (...args) {
      if (!beforeCall || beforeCall.call(this, args) !== false) {
        const ret = fn.apply(this, args)
        if (afterCall) return afterCall.call(this, ret)
        return ret
      }
    }
  }
```

### 5.deprecate接口更新提示函数
```javascript
  function deprecate(fn, oldApi, newApi) {
    const message = `The ${oldApi} is deprecated.
      Please use the ${newApi} instead.`
      return function (...args) {
        console.warn(message)
        return fn.apply(this, args)
      }
  }
```

### 6.batch批量处理的纯函数
```javascript
  function batch(fn) {
    return function(subject, ...args) {
      if (Array.isArray(subject)) {
        return subject.map(s => {
          return fn.call(this, s, ...args)
        })
      }
      return fn.call(this, subject, ...args)
    }
  }
```

### 7.高阶函数的范式
```javascript
  function HOF0(fn) {
    return function(...args) {
      return fn.apply(this, args)
    }
  }
```

### 8.连续执行的函数
```javascript
  function continous(reducer) {
    return function(...args) {
      return args.reduce((a,b) => reducer(a, b))
    }
  }
```

### 9.fold折叠函数
```javascript 
  function fold(fn) {
    return function (...args) {
      const lastArg = args[args.length - 1];
      if (lastArg.length) {
        return fn.call(this, ...args.slice(0, -1), ...lastArg)
      }
      return fn.call(this, ...args)
    }
  }
```

### 10.reverse反转函数
```javascript
  function reverse(fn) {
    return function(...args) {
      return fn.apply(this, args.reverse())
    }
  }
```

### 11.spread函数
```javascript
  function spread(fn) {
    return function (first, ...rest) {
      return fn.call(this, first, rest)
    }
  }
```