<template>
    <div>
        <input type="text" v-model="name" placeholder="输入姓名">
        <input type="text" class="age"  v-model="age" placeholder="输入年龄">
        <input type="radio" value="男" v-model="todo.gender">男 
        <input type="radio" value="女"  v-model="todo.gender">女
        <button v-on:click="saveData" v-bind:disabled="disable">保存</button>

    </div>
</template>

<script>
export default {
    'name':'Header',
    data(){
        return {
            todo:{
                name:'',
                age:'',
                gender:'男',
                finished:false,
            },
            disabled:true,
        }
    },
    props:{
        addNew:Function
    },
    computed:{
        name:{
            get:function(){
                return this.todo.name;    
            },
            set:function(value){
                this.todo.name = value;
                this.todo.name = this.todo.name.trim(); 
                // this.checkButton();
            }
        },
        age:{
            get:function(){
                return this.todo.age;
            },
            set:function(value){
                this.todo.age = value;
                this.todo.age = this.todo.age.replace(/[^\d]/g,'')
                // this.checkButton();
            }
        },
        disable:{
            get:function(){
                if(this.todo.name.length > 0 && this.todo.age > 0){
                    return false;
                }
                else{
                    return true;
                }
            }
        } 
    },
    methods:{
        saveData:function(){
            let todo = this.todo;    
            this.$store.dispatch('addTodo', todo);

            //this.addNew(this.todo);
            this.todo = {name:'',
                age:'',
                gender:'男',
                finished:false};
            this.checkButton();
        },
        handle:function(e){
            this.todo.age = e.target.value.replace(/[^0-9]/,'');
        },
        checkButton:function(){
            // if(this.todo.name.length > 0 && this.todo.age > 0){
            //     this.disabled = false;
            // }
            // else{
            //     this.disabled = true;
            // }
            // this.w('this.disabled=',this.disabled);
        },
        w:function(){
            window.console.log.call(null,...arguments);
        }
    }
}
</script>

<style scoped>
.age{width:60px;}
</style>