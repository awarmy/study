<template>
    <ul>
        <Items v-for="(item,index) in todos" v-bind:key="index"
        v-bind:todo="item"
        v-bind:index="index"
        ></Items>
    </ul>
</template>

<script>
import Items from "./Items"
import {mapState} from "vuex"


export default {
    'name':'ItemsList',
    data(){
        return {
        }
    },
    computed:{
        ...mapState(['todos'])
    },
    components:{
        Items
    },
    // watch:{
    //     todos:{
    //         deep:true,
    //         handler:{}
    //     }
    // }
}
</script>

<style scoped>

</style>