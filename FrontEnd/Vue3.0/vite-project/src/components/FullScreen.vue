<template>
  <button @click="toggle">全屏</button>
</template>
<script setup>
import { useFullscreen } from '@vueuse/core'
const { isFullscreen, enter, exit, toggle } = useFullscreen()
</script>