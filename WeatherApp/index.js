const http = require('http');
const fs = require("fs");
const requests = require("requests");
const homeFile = fs.readFileSync("home.html", "utf-8");

const replaceVal = (tempVal, orgVal) => {
    let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
    temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);
    temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);
    temperature = temperature.replace("{%location%}", orgVal.name);
    temperature = temperature.replace("{%country%}", orgVal.sys.country);
    temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main);
    return temperature;
}

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        requests("https://api.openweathermap.org/data/2.5/weather?lat=28.6667&lon=77.2167&appid=8ceab65909969e3af6879cec8cb17cac")
            .on("data", (chunk) => {
                const objdata = JSON.parse(chunk);
                const arrData = [objdata];
                const realTimeData = arrData
                    .map((val) => replaceVal(homeFile, val))
                    .join("");
                res.write(realTimeData);
            })
            .on("end", function (err) {
                if (err) return console.log("Connection failed due to error");
                res.end();
            });
    }
});

server.listen(8000, () => {
    console.log("Server Running at port no:8000");
})