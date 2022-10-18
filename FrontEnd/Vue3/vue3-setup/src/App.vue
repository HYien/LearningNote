<template>
  <div>{{ count }} {{ state.foo }}</div>
  <Test :count="count" @add="add" ref="RefTest"></Test>
  <Name />
  <Father />
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeMount, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onErrorCaptured, provide } from 'vue'
import Test from './components/Test.vue'
import Name from './components/Name.vue'
import Father from './components/Father.vue'

const count = ref(0)
const state = reactive({
  foo: 'bar'
})

setTimeout(() => {
  count.value = 100
  state.foo = 'foo'
},2000)
const add = () => {
  count.value += 1
}
const RefTest = ref()
console.log('RefTest', RefTest)

onBeforeMount(() => {
  console.log('onBeforeMount')
})

// 父组件渲染完才能拿到子组件中的方法
onMounted(() => {
  console.log(RefTest)
  RefTest.value.childFn()
  console.log('onMounted')
})

onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
})

onUpdated(() => {
  console.log('onUpdated')
})

onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
})

onUnmounted(() => {
  console.log('onUnmounted')
})

onErrorCaptured(() => {
  console.log('onErrorCaptured')
})
const name = ref('黄晓年')
provide('name',name)
provide('info',{
  work: '前端开发',
  age: '18'
})

const changeName = () => {
  name.value = '黄年年'
}

provide('changeName', changeName)
</script>
