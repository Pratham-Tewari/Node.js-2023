const fs = require('fs');

const bioData = {
    name:"Pratham",
    age:22,
    gender:"Male"
}
const jsonData = JSON.stringify(bioData);
console.log(jsonData);

fs.writeFile("json1.json",jsonData, (err) =>{
console.log(err);
})

fs.readFile("json1.json","utf-8",(err,data) =>{
    const orgData = JSON.parse(data);
    console.log(data);
    console.log(orgData);
})