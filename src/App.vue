<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: 'App'
}
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
#app {
  display: flex;
  min-height: 100vh;
}
</style>
