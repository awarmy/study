//全局垫片
// import "babel-polyfill";

// import "./hello.ts";

import css from "../css/style.css";
//import less from "../css/css.less";

const axios = require("axios").default;


//样式模块化后的加载
document.getElementById("div").setAttribute("class", css.div)
console.log("hello");

const a = "abc";

//JS中加载图片
// import img1 from "../img/p1-1.png";
// var img = new Image();
// img.src = img1;
// document.getElementById("img").appendChild(img);

var imgs = document.querySelectorAll("[data-src]");

imgs.forEach(function (item, index) {
    var src = item.getAttribute("data-src");
    // alert("src=" + src);
    console.log("src=" + src);
    if (src.substr(0, 3) == "../") src = src.substr(3, src.length - 3);
    var img = new Image();
    img.onload = function (e) {
        console.log("img loaded");
        item.src = src;
    }
    img.src = src;
});

axios.get("http://localhost/h5/chery20191104/ajax.php?cmd=parr")
    .then(function (res) {
        console.log(res);
    })
    .catch(function (error) {
        console.log("error", error);
    })
    .finally(function () {
        console.log("finally");
    })
console.log("axios.get");

if (module.hot) {
    module.hot.accept();
}