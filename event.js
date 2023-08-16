var events = require('events');
const { fstat } = require('fs');
var eventEmitter = new events.EventEmitter();
//eventEmitter.on("sayHi",() =>{
//    console.log("Hi Pratham");
//})
//eventEmitter.emit("sayHi");
eventEmitter.on("check",(sc,msg)=>{
    console.log(`It is running with a status code: ${sc} and with a mesage: ${msg}`);
})

eventEmitter.emit("check",200,"ok");

