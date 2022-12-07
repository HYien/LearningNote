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