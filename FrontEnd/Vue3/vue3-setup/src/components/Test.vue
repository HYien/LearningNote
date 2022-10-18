<template>
  <div>{{ props.count }}</div>
  <button @click="add">+1</button>
  <p>{{ state.title }}</p>
  <ul ref="ulRef">
    <li v-for="item in array" :key="item">{{ item }}</li>
  </ul>
</template>

<script setup>
import { watchEffect, reactive, onMounted, ref } from 'vue'
// vue3默认添加了3个方法：defineProps、defineEmits、defineExpose
const props = defineProps({ count: Number })
const emit = defineEmits(['add'])
watchEffect(() => {
  console.log('props.count = ', props.count)
})
const add = () => {
  emit('add')
}
const childFn = () => {
  console.log('子组件的方法')
}
defineExpose({childFn})

const state = reactive({
  title: 'json'
})
const array = reactive(['arr1','arr2','arr3'])
const ulRef = ref()
onMounted(() => {
  console.log(ulRef)
})
</script>