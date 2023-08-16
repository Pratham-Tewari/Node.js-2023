const fs = require("fs");
const http = require('http');
const server = http.createServer((req,res) =>{
const rstream = fs.createReadStream("data.txt");
rstream.on("data",(chunckdata) =>{
    res.write(chunckdata);
})
rstream.on("end",() =>{
    res.end();
})
rstream.on("error",(err) =>
{
    res.end(err);
})
});

server.listen(8000, () =>
{
    console.log("Server is listening at port:8000");
})