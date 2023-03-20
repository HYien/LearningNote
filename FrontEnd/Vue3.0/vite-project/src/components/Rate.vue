
<template>
  <div class="rate-wrap" :style="fontstyle">
    <slot></slot>
    <div class='rate' @mouseout="mouseOut">
      <span @mouseover="mouseOver(num)"  v-for='num in 5' :key="num">☆</span>
      <span class='hollow' :style="fontwidth">
        <span @click="onRate(num)" @mouseover="mouseOver(num)" v-for='num in 5' :key="num">★</span>
      </span>
    </div> 
  </div>
</template>
<script setup>
import { defineProps, defineEmits, computed, ref } from 'vue'
let props = defineProps({
  modelValue: Number,
  theme: {type: String, default: 'orange'}
})
let width = ref(props.modelValue)
function mouseOver(i) {
  width.value = i
}
function mouseOut() { 
  width.value = props.modelValue
}
let emits = defineEmits(['update:modelValue'])
function onRate(num) {
  emits('update:modelValue',num)
}
const fontwidth = computed(() => `width:${width.value}em;`)
const themeObj = {
  'black': '#000',
  'white': '#fff',
  'red': '#f5222d',
  'orange': '#fa541c',
  'yellow': '#fadb14',
  'green': '#73d13d',
  'blue': '@40a9ff'
}
const fontstyle = computed(() => {
  return `color:${themeObj[props.theme]}`
})
</script>

<style scoped>
.rate { 
  position: relative; 
  display: inline-flex;
}
.rate > span.hollow { 
  position: absolute; 
  display: inline-flex; 
  top:0; 
  left:0; 
  width:0; 
  overflow:hidden;
}
.rate span {
  display: inline-flex; 
}
</style>