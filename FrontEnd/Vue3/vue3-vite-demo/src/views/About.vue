<template>
  <div>
    <router-link to="/">About</router-link>
    <!-- <span>routeQuery {{ id }}</span> -->
    <span>paramsId {{ paramsId }}</span>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()
// const { id } = route.query
const paramsId = route.params.id
</script>

<style lang="scss" scoped>

</style>