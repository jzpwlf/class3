var http = require("http");
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('hello dSDA\n');
}).listen(8888);
console.log('server running at http://localhost:8888/');
