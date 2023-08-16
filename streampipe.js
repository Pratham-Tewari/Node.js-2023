const fs = require("fs");
const http = require('http');
const server = http.createServer((req,res) =>{
const rstream = fs.createReadStream("data.txt");
rstream.pipe(res);
});

server.listen(8000, () =>
{
    console.log("Server is listening at port:8000");
})