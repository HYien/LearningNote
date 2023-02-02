<template>
  <button @click="add">
    add
  </button>
  <div>{{ count }}</div>
  <div>
    {{ count }} * 2 = {{ double }}
  </div>
   <button @click="asyncAdd">
    asyncAdd
  </button>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from '../store/mini-vuex'
let store = useStore()
let count = computed(() => store.state.count)
let double = computed(() => store.getters.double)

function add() {
  store.commit('add')
}
function asyncAdd() {
  store.dispatch('asyncAdd')
}
</script>