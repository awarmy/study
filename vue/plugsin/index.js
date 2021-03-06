var walertPlugin = {
    install: function (Vue) {
        //挂载样式
        var style = document.createElement("style");
        style.type = 'text/css';
        style.innerHTML = '\
.walertMast{position: fixed;left: 0;top: 0;width: 100%;height: 100%;opacity: .5;background: #000;z-index:2000;}\
    .walert{position: fixed;top: 0;bottom: 0;left: 0;right: 0;text-align: center;z-index: 2001;}\
    .walert::after {content: "";display: inline-block;height: 100%;width: 0;vertical-align: middle;}\
    .walert .walert__btns{padding: 5px 15px 0;text-align: right;}\
    .walert .walert__btns .walert_button{ display: inline-block;\
    line-height: 1;white-space: nowrap;background: #FFF;color: #606266;-webkit-appearance: none;text-align: center;box-sizing: border-box;outline: 0;\
    margin: 0;font-weight: 500;padding: 9px 15px;border:0px;border-radius: 3PX;color: #FFF;background-color: #409EFF;border-color: #409EFF;font-size: 12px;}\
    .walert .walert__btns .walert_button span{cursor: pointer;}\
    .walert .walert-box{display: inline-block;vertical-align: middle;width: 420px;padding-bottom: 10px;\
    background-color: #FFF;border-radius: 4px;border: 1px solid #EBEEF5;font-size: 18px;-webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);\
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);text-align: left;overflow: hidden;-webkit-backface-visibility: hidden;backface-visibility: hidden;}\
    .walert .walert-box .walert__header{position: relative;padding: 15px 15px 10px;}    \
    .walert .walert-box .walert__title{padding-left: 0;margin-bottom: 0;font-size: 18px;line-height: 1;color: #303133;}\
    .walert .walert-box .walert__headerbtn{position: absolute;top: 15px;right: 15px;padding: 0;border: none;outline: 0;background: 0 0;font-size: 16px;cursor: pointer;}\
    .walert .walert-box .walert__headerbtn .walert-close{color: #909399;    font-family: element-icons!important;\
    font-style: normal;font-weight: 400;font-variant: normal;text-transform: none;line-height: 1;\
    vertical-align: baseline;display: inline-block;-webkit-font-smoothing: antialiased;}\
    .walert .walert-box .walert__headerbtn .walert-close:before{content: "\\e6db";} \
    .walert__content{padding: 10px 15px;color: #606266;font-size: 14px;}    \
    .walert .walert-box{width:70%}\
	@media only screen and (min-width: 480px) {\
		.walert .walert-box {width: 384px;}\
    }\
    @font-face{font-family:element-icons;src:url(js/element-ui@2.13.0/fonts/element-icons.woff) format("woff"),url(js/element-ui@2.13.0/fonts/element-icons.ttf) format("truetype");\
        ';
        document.getElementsByTagName('head').item(0).appendChild(style);
        Vue.component("w-alert-plugin", {
            template: '\
<div v-if="show">\
    <div class="walertMast"></div>\
    <div tabindex="-1" class="walert" >\
        <div class="walert-box">\
            <div class="walert__header">\
                <div></div>\
                <button type="button" class="walert__headerbtn"><i class="walert-close" v-on:click="close"></i></button>\
            </div>\
            <div class="walert__content">\
                <p>{{message}}</p>\
            </div>\
            <div class="walert__btns">\
                <button type="button" class="walert_button" v-on:click="close">\
                    <span>确定</span>\
                </button>\
            </div>\
        </div>\
    </div> \
</div>',
            data() {
                return {
                    message: "签到成功！",
                    option: {},
                    show: false,
                }
            },
            methods: {
                close: function () {
                    this.show = false;
                    if (this.option.hasOwnProperty("callback")) {
                        this.option.callback();
                    }
                },
                open: function (message, option) {
                    // console.log(message);
                    if (message != undefined) {
                        this.message = message;
                    }
                    if (typeof option == "object") {
                        this.option = option;
                    }
                    this.show = true;
                }
            }
        })
        var alertConstructor = Vue.extend(Vue.component("w-alert-plugin"));

        var instance = new alertConstructor();
        instance.$mount(document.createElement('div'))
        console.log(instance.$el);
        document.body.appendChild(instance.$el)
        Vue.prototype.$walertOption = "w-alert-plugin";
        Vue.prototype.$walert = function (message, option) {
            instance.open(message, option);
        }
    }
}
Vue.use(walertPlugin.install);   