<template>
  
</template>

<script>
import { ref, reactive, h } from 'vue'
export default {
  setup() {
    const count = ref(1)
    const state = reactive({foo: 'bar'})
    return () => h('h1',[count.value, state.foo])
  }
}
</script>
