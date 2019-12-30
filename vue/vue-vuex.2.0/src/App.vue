<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Header  ></Header>
    <ItemsList></ItemsList>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header"
import ItemsList from "./components/ItemsList"
import Footer from "./components/Footer"

export default {
  name: 'app',
  data(){
    return {
      
    }
  },
  methods:{
    addNew:function(todo){
      this.todos.push(todo);
    }
  },
  components: {
    Header,
    ItemsList,
    Footer,
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
