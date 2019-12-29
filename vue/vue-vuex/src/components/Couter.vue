<template>
    <div><p>点击次数:{{count}}</p>
        <button v-on:click="onincrement">++1</button><br /><br />
        <button v-on:click="ondecrement">--1</button>
    </div>
</template>

<script>
// import { mapMutations } from "vuex"
export default {
    'name':'Couter',
    data(){
        return {
        }
    },
    computed:{
        count:function(){
            return this.$store.state.count;
        }
    },
    methods: {
        //TODO: 方法一 展开方法
        // ...mapMutations (['increment', 'decrement']),
        onincrement:function(){
            // this.increment();

            //TODO: 方法二 同步方法
            // this.$store.commit('increment')
            
            //TODO: 方法三 异步方法
            this.$store.dispatch('increment');
        },
        ondecrement:function(){
            // this.decrement();
            // this.$store.commit('decrement');
            this.$store.dispatch('decrement');
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>