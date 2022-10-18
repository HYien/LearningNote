<template>
  <router-view></router-view>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'App',
  setup() {
    const router = useRouter()
    router.afterEach(() => {
      console.log('path::', router.currentRoute.value.path)
    })
  }
}
</script>
