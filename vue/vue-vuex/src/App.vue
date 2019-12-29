<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Couter></Couter>
  </div>
</template>

<script>
import Couter from "./components/Couter"

export default {
  name: 'app',
  components: {
    Couter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
