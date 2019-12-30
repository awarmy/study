<template>
    <li>
        <div class="name"><input type="checkbox" v-model="todo.finished"> {{todo.name}}</div>
        <div class="name">{{todo.age}}</div>
        <div class="name">{{todo.gender}}</div>
        <div><button v-on:click="deleteItem" >Delete</button></div>
    </li>
</template>

<script>
export default {
    'name':'Items',
    props:{
        todo:Object,
        index:Number,
    },
    data(){
        return {
        }
    },
    methods:{
        deleteItem:function(){
            if(window.confirm("确定删除？")){
                this.$store.dispatch("deleteTodo", this.index);
            }
        }
    }
}
</script>

<style scoped>
li{width:100%;list-style: none;padding:4px 0;text-align: left;height:18px;}
li div{width:100px;float:left}
li::after{content:'';font-size:0px;clear:both;}
</style>