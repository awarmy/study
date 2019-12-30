<template>
    <div>
        <label>
            <input type="checkbox" v-model="selectAllOrNo">
        </label>
        <span>已完成{{finishedCount}}/{{todosCount}}</span>
        <button v-on:click="deleteFinishedTodo">完成</button>
    </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex"

export default {
    'name':'Footer',
    data(){
        return {
        }
    },
    computed:{
        ...mapGetters(['todosCount','finishedCount','isCheck']),
        selectAllOrNo:{
            get:function(){
                return this.isCheck;
            },
            set:function(value){
                this.$store.dispatch('selectAllTodo',value);
                //this.selectAllTodo(value);
            }
        }
    },
    methods:{
        ...mapActions(['selectAllTodo','deleteFinishedTodo']),
       
    }
}
</script>

<style scoped>

</style>