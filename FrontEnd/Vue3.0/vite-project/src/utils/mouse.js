import { ref, onMounted, onUnmounted } from 'vue'

export function useMouse() {
  const x = ref(0)
  const y = ref(0)
  function updated(e) {
    x.value = e.pageX
    y.value = e.pageX
  }
  
  onMounted(() => {
    window.addEventListener('mousemove',updated)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', updated)
  })
  return { x, y }
}