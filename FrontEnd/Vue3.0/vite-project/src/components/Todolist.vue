<template>
  <div>
    <span class="dustbin">
      🗑
    </span>

    <transition name="modal">
      <div class="info-wrapper" v-if="showModal">
        <div class="info">
          您啥也没有输入！
        </div>
      </div>
    </transition>
    
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <button v-if="active < all" @click="clear">清理</button>
    <ul v-if="todos.length">
      <transition-group name="flip-list" tag="ul">
        <li class="move" v-for="(todo,index) in todos" :key="todo.id">
          <input type="checkbox" v-model="todo.done" />
          <span :class="{ done: todo.done }">{{ todo.title }}</span>
          <span class="remove-btn" @click="removeTodo($event,index)">❌</span>
        </li>
      </transition-group>
    </ul>
    <div v-else>暂无数据</div>
    <div>
      全选<input type="checkbox" v-model="allDone" />
      <span>{{ active }}/{{ all }}</span>
    </div>
    <div class="animate-wrap">
      <transition  @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
        <div class="animate" v-show="animate.show">
          📋
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { useTodos } from './useTodos'
let { animate,showModal, title, todos, addTodo, clear, removeTodo, beforeEnter, enter, afterEnter, active, all, allDone } = useTodos()
</script>

<style>
h1 {
  color: red;
}
.done {
  text-decoration: line-through;
}
.info-wrapper {
  position: fixed;
  top: 20px;
  width: 200px;
}
.info {
  padding: 20px;
  color: white;
  background: #d88986;
}

.modal-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}
.modal-enter-active {
  transition: all 0.3s ease;
}
.modal-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
.modal-leave-active {
  transition: all 0.3s ease;
}
.flip-list-move { 
  transition: transform 0.8s ease;
}
.flip-list-enter-active,
.flip-list-leave-active { 
  transition: all 1s ease;
}
.flip-list-enter-from,
.flip-list-leave-to { 
  opacity: 0; 
  transform: translateX(30px);
}
.remove-btn {
  padding: 3px;
  cursor: pointer;
}
.dustbin {
  font-size: 20px;
  position: fixed;
  right: 10px;
  top: 10px;
}
.animate-wrap .animate {
  position: fixed;
  right: 10px;
  top: 10px;
  z-index: 100;
  transition: all 0.5s linear;
}
</style>
