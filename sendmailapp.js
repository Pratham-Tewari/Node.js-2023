const express = require("express");
const app = express();
let PORT = 5000;
const sendMail = require("./sendmail.js");

app.get("/", (req, res) => {
    res.send("I'm a server");
})

app.get("/mail", sendMail);

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`App is running at port no: ${PORT}`);
        });
    }
    catch (err) {
        console.log(err);
    }
};

start();