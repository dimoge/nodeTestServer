//基础模块引用
var express = require("express");
var path = require("path");
var app = express();

//自定义路由模块引用
var check = require("./routers/check.js");//路由配置

//配置静态页面的访问　/dime/guo/File_Name
app.use("/dime/guo/public",express.static(path.join(__dirname, '/')));
app.use("/request", check);


app.listen(3000);
console.log("start......./n listen-port:3000 ");