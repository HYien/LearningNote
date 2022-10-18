<template>
  <div>
    About
    <!-- <router-link :to="{ name: 'home', params: { id: 1 }}">跳转至Home</router-link> -->
    <button @click="linkTo">跳转至Home</button>
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'About',
  setup() {
    const route = useRoute()
    const { id } = route.query
    console.log('query传参，id =', id)
    const router = useRouter()
    const linkTo = () => {
      router.push({
        name: 'home',
        params: {
          id: '1'
        }
      })
    }
    return {
      linkTo
    }
  }
}
</script>