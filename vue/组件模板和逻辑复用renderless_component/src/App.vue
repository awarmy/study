<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h4>复用组件中的模板和JS逻辑代码</h4>
    <component-level1 v-slot:default="method" v-bind:value ="message" v-bind:rules="rules">
      <textarea v-on:blur="method.validate"  v-model="message"></textarea>
    </component-level1>

    <component-level1 v-slot:default="method" v-bind:value ="name" v-bind:rules="nameRules">
      <input v-on:blur="method.validate"  v-model="name" />
    </component-level1>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ComponentLevel1 from "./components/ComponentLevel1";
export default {
  name: 'App',
  data(){
    return {
      message:"nothing",
      rules:[{
        test:function(value){
          return /^\d+$/.test(value)
        },
        msg:"只能输入数字",
      }],
      name:"",
      nameRules:[{
        test:function(value){
          return value
        },
        msg:"不能为空",
      }]
    }
  },
  components: {
    // HelloWorld
    ComponentLevel1
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
