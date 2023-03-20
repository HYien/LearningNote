import { ref, computed, reactive, nextTick } from 'vue'
import { useStorage } from '../utils/useStorage'
export function useTodos() {
  let title = ref('')
  let todos = useStorage('todos', [])
  let showModal = ref(false)
  let animate = reactive({
    show: false,
    el: null
  })
  function addTodo() {
    if (!title.value) {
      showModal.value = true
      setTimeout(() => {
        showModal.value = false
      },1500)
      return
    }
    todos.value.push({
      id: new Date().toString(),
      title: title.value,
      done: false
    })
    title.value = ''
  }
  function clear() {
    todos.value = todos.value.filter(v => !v.done)
  }
  function removeTodo(e,i) {
    animate.el = e.target
    animate.show = true
    nextTick(() => {
      todos.value.splice(i,1)
    })
  }
  function beforeEnter(el) {
    let dom = animate.el
    let rect = dom.getBoundingClientRect()
    let x = window.innerWidth - rect.left - 60
    let y = rect.top - 10
    el.style.transform = `translate(-${x}px, ${y}px)`
  }
  function enter(el, done) {
    // 手动触发重绘
    document.body.offsetHeight
    el.style.transform = `translate(0,0)`
    el.addEventListener('transitionend', done)
  }
  function afterEnter(el) {
    animate.show = false
    el.style.display = 'none'
  }
  let active = computed(() => {
    return todos.value.filter((v) => !v.done).length
  })

  let all = computed(() => {
    return todos.value.length
  })

  let allDone = computed({
    get: function() {
      return active.value === 0
    },
    set: function(value) {
      todos.value.forEach((todo) => {
        todo.done = value
      })
    }
  })
  return { animate,showModal,title, todos, addTodo, clear, removeTodo, beforeEnter, enter, afterEnter, active, all, allDone }
}
