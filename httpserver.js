var port = 3000;
var http = require("http");
var fs = require("fs");
var count = 0;

var help = require("./help.js");

var server = http.createServer(function (request, response) {
    count++;
    console.log("request:"+count);//请求计数

    var url = require('url').parse(request.url);

    switch (url.pathname){
        case "/check.do":
            console.log("login.do is coming");
            break;
        default://加载本地文件
            var filename = url.pathname.substring(1);    // 去掉前导'/'
            var type = help.getType1111(filename.substring(filename.lastIndexOf('.')+1));
            // 异步读取文件,并将内容作为单独的数据模块传给回调函数
            // 对于确实很大的文件,使用流API fs.createReadStream()更好
            fs.readFile(filename, function(err, content){
                if(err) {
                    response.writeHead(404, { 'Content-Type':'text/plain; charset="UTF-8"' });
                    response.write("404, 没有这个页面！");
                    response.end();
                } else {
                    response.writeHead(200, { 'Content-Type' : type });
                    response.write(content);
                    response.end();
                }
            });
            break;
    }

});
server.listen(port);