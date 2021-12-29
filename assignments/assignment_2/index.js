const http = require("http");
const fs = require("fs");

fs.writeFile("index.html",`<h1>Hello World</h1>`,(err)=>{
    console.log(err);
})

http.createServer(function(req,res){
    res.writeHead(200, {"Content-type" :"text/html"});
    res.end(fs.readFileSync("index.html","utf-8"));
}).listen(3000);