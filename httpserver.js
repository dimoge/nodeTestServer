var port = 3000;
var http = require("http");
var count = 0;

var server = http.createServer(function (request, response) {
    count++;
    console.log("request:"+count);//请求计数


    var url = require('url').parse(request.url);

});
server.listen(port);