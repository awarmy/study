var wToolsFun = function () {

}

wToolsFun.install = function (Vue) {
    Vue.mixin({
        methods: {
            //使用mixin方法实现事件的穿透
            wDispatch: function (componentName, eventName, paras) {
                var parent = this.$parent || this.$root;
                var name = parent.$options.componentName;
                while (parent && (!name || name !== componentName)) {
                    parent = parent.$parent;
                    if (parent) {
                        name = parent.componentName;
                    }
                }
                if (parent) {
                    parent.$emit.apply(parent, [eventName].concat(paras));
                }
            }
        }
    })
}
Vue.use(wToolsFun);