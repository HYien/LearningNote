<template>
  <div>我是儿子，{{ name }}</div>
  <div>职业：{{ info.work }}</div>
  <div>年龄：{{ info.age }}</div>
  <button @click="changeName">修改名字</button>
</template>

<script setup>
import { inject } from 'vue'
// 第二个参数为默认值，可选
const name = inject('name', '嘻嘻')
const info = inject('info')
const changeName = inject('changeName')
</script>