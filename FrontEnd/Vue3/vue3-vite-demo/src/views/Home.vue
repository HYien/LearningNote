<template>
  <div>
    <button @click="linkTo">Home Btn</button>
    <!-- <router-link :to="{ path: '/about', query: { id: 1 }}">Home Link Query</router-link> -->
    <router-link :to="{ name: 'about', params: { id: 1 }}">Home Link Params</router-link>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const linkTo = () => {
  router.push({ path: '/about', query: { id: 1 } })
}
</script>

<style lang="scss" scoped>

</style>