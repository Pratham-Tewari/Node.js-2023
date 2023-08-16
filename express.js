const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Helllo");
})

app.get("/home", (req, res) => {
    res.send("Helllo Home");
})

app.get("/html", (req, res) => {
    res.write("<h1>Hello HTML data</h1>");
    res.send(); //its ends lodaing data
})

app.get("/jsondata", (req, res) => {
    res.send([
        {
            id: 1,
            name: "Pratham",
        },
        {
            id:2,
            name:"Tewari",
        }
    ])
})

app.listen(8000, () => {
    console.log('Listening port at:8000 ');
})