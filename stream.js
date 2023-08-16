const fs = require("fs");
const http = require("http");
const server = http.createServer();
server.on("request",(req,res) =>{
    fs.readFile("data.txt",function(err,data)
    {
        if(err) return console.log(err);
        console.log(data.toString());
    })
});

server.listen(8000, () =>
{
    console.log("Server is listening at port:8000");
})