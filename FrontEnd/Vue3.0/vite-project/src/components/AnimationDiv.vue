<template>
  <div class="box1"></div>
</template>
<script setup>
</script>
<style scoped>
.box1 {
  width: 30px;
  height: 30px;
  position: relative;
  background: #d88986;
  animation: move 2s linear infinite;
}
@keyframes move {
  0% { left: 0px; }
  50% { left: 200px; }
  100% { left: 0; }
}
</style>