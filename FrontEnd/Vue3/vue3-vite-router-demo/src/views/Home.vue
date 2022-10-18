<template>
  <div>
    Home
    <router-link :to="{ path: '/about', query: { id: 1 }}">跳转至About</router-link>
    <!-- <button @click="linkTo">跳转至About</button> -->
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
export default {
  name: 'Home',
  setup() {
    const router = useRouter()
    const route = useRoute()
    const { id } = route.params
    console.log('params传参，id =', id)
    const linkTo = () => {
      router.push({
        path: '/about',
        query: {
          id: 1
        }
      })
    }
    return {
      linkTo
    }
  }
}
</script>