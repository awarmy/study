//全局垫片
// import "babel-polyfill";

// import "./hello.ts";

import css from "../css/style.css";

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
    if (src.substr(0, 3) == "../") src = src.substr(3, src.length - 3);
    var img = new Image();
    img.onload = function (e) {
        console.log("img loaded");
        item.src = src;
    }
    img.src = src;
});