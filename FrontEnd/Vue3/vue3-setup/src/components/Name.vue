<template>
  <div>
    <p>{{ fullName }}</p>
    <h1>{{ state.search }}</h1>
    <button @click="handleSearch">修改</button>
  </div>
</template>

<script setup>
import { reactive, computed, watchEffect, watch } from 'vue'
const state = reactive({
  firstName: '黄',
  secondName: '小年',
  search: Date.now()
})

const fullName = computed(() => {
  return state.firstName + state.secondName
})

setTimeout(() => {
  state.secondName = '年年'
},1000)
let timer = null
const stop = watchEffect((onInvalidate) => {
  console.log(`监听查询字段${state.search}`)
  timer = setTimeout(() => {
    console.log('模拟接口异步请求，3秒之后返回详情信息')
  },3000)
  onInvalidate(() => {
    console.log('清除')
    clearInterval(timer)
  })
})
const handleSearch = () => {
  state.search = Date.now()
}

watch(() => {
  return state.search
},(nextData, preData) => {
  console.log('preData', preData)
  console.log('nextData', nextData)
})
// setTimeout(() => {
//   console.log('执行 stop 停止监听')
//   stop() // 2 秒后停止监听行为
// },2000)
</script>

