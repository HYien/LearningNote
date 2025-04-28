<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
router.beforeEach((to, from, next) => {
  console.log('beforeEach', to, from);
  next();
});
router.afterEach((to, from) => {
  console.log('afterEach', to, from);
});
</script>
<template>
  <RouterView />
</template>

<style scoped>

</style>
