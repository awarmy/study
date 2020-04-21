<template>
    <div>
        <h4>表单</h4>
        <slot v-bind:validate="validate">
            <input type="text" placeholder="姓名" v-on:blur="validate" v-model="value">
        </slot>
        <p>{{message}}</p>
    </div>
</template>

<script>
export default {
    name:'ComponentLevel1',
    props:['value','rules'],
    data(){
        return {
            message:""
        }
    },
    methods:{
        validate:function(){
            var that = this;
            return this.rules.reduce(function(pre,item){
                var bRet = item.test(that.value);
                that.message = bRet?"":item.msg;
            },true);
        }
    }
}
</script>

<style scoped>
input::placeholder{text-align: center;}
</style>