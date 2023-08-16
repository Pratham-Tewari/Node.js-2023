const path = require("path");
const express = require("express");
const app = express();
const requests = require("requests");
const hbs = require("hbs");
//const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");


app.set("view engine", "hbs");
app.set("views", templatePath);

hbs.registerPartials(partialsPath);

app.get("", (req, res) => {
    res.render("index.hbs", {
        title: "By Pratham Tewari",
    });
})

app.get("/about", (req, res) => {
    res.render("about.hbs", {
        title: "By Pratham Tewari",
    });
})
//app.use(express.static(staticPath));

app.get("/about/*", (req, res) => {
    requests("https://api.openweathermap.org/data/2.5/weather?lat=28.6667&lon=77.2167&appid=8ceab65909969e3af6879cec8cb17cac")
        .on("data", (chunk) => {
            const objdata = JSON.parse(chunk);
            const arrData = [objdata];
            console.log(`City name is ${arrData[0].name} and temp is ${arrData[0].main.temp}`);
            res.write(arrData[0].name);

        })
        .on("end", function (err) {
            if (err) return console.log("Connection failed due to error");
            res.end();
        });
})

app.get("*", (req, res) => {
    res.render("404", {
        comment: "Page Not Found! Error code 404.."
    })
})
app.listen(7000, () => {
    console.log("Listening to port no:7000");
})