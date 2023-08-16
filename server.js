const fs = require("fs");
const http = require('http');
const server = http.createServer((req, res) => {
    //res.end("Welcom Pratham");
    if (req.url == "/") {
        res.end('Welcome to Home Page');
    }
    else if (req.url == "/about") {
        res.end('Welcome to About Us Page');

    }
    else if (req.url == "/contact") {
        res.end('Welcome to Contact Us Page');

    }
    else if(req.url == "/jsondata")
    {
        fs.readFile("json1.json","utf-8",(err,data) =>
        {
            res.writeHead(200,{"content-type":"application/json"});
            res.end(data);
            const orgData = JSON.parse(data);
            res.end(orgData.name);
        })
    }
    else {
        res.writeHead(404,{"content-type": "text/html"});
        res.end("Error 404. Page not found");
    }
});
server.listen(8000, () => {
    console.log("Server is listening as port 8000");
})