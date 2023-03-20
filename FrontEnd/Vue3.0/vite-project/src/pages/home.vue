<template>
  <h1>这是主页</h1>
  <Counter />
  <TodoList /> 
  <FullSreen />
  <!--  -->
  <h1>你的评分是{{score}}</h1>
  <Rate v-model="score">课程评分</Rate>
  <Rate v-model="score" theme="red" />
  <Rate v-model="score" theme="green"/>
  <FadeDiv />
  <AnimationDiv />
  <ToggleFade />
</template>
<script setup>
import { ref } from 'vue'
import Counter from '../components/Counter.vue'
import TodoList from '../components/Todolist.vue'
import FullSreen from '../components/FullScreen.vue'
import Rate from '../components/Rate.vue'
import FadeDiv from '../components/FadeDiv.vue'
import AnimationDiv from '../components/AnimationDiv.vue'
import ToggleFade from '../components/ToggleFade.vue'
let score = ref(3.5)
</script>