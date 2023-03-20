<template>
  <div>
    <router-link to="/">首页</router-link>|
    <router-link to="/about">关于</router-link>|
    <router-link to="/vuex-test">Vuex</router-link>|
  </div>
  <router-view>
  </router-view>
</template>

<style>
html, body {
  font-family: serif;
  margin: 0;
  padding: 0;
}
#app {
 margin-top: 30px;
 margin-left: 20px;
}
a {
  text-decoration-line: none;
}
</style>
