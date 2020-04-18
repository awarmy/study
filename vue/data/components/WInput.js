Vue.component("WInput", {
    template: "\
            <div v-bind:class='{WInput:true,required:empty}'>\
            <span class='WInput_input'><input type='text' v-on:input='onInput' v-on:change='onChange' v-on:blur='onBlur' v-model='message'></span>\
            <span class='WInput_prefix'><i></i></span>\
            </div>",
    model: {
        prop: "value",
        // event: 'input'
    },
    props: [
        "value"
    ],
    data: function () {
        return {
            message: this.value,
            empty: false,
        }
    },
    created: function () {
        console.log(this.$attrs);
        console.log("props=", this.props);
    },
    methods: {
        //侦听input
        onInput: function (event) {
            this.$emit("input", event.target.value);
        },
        //侦听change
        onChange: function (event) {
            this.$emit("change", event.target.value);
        },
        onBlur: function () {
            if (this.message.length == "") {
                this.empty = true;
            }
            else {
                this.empty = false;
            }
            // this.$emit("blur");
            this.wDispatch('input-no-border', 'blur', '');
        },


    }
})