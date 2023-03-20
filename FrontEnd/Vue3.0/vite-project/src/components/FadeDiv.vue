<template>
  <div class="box" :style="{width: width + 'px'}"></div>
  <button @click="change">addLong</button>
</template>

<script setup>
import {ref} from 'vue'
let width = ref(100)
function change() {
  width.value += 100
}
</script>
<style scoped>
.box {
  background: red;
  height: 100px;
  /* 实现过渡效果 */
  transition: width 1s linear;
}
</style>
