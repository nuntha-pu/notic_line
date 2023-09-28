const minutes = 300;   //60 : 1 minute
const ms = 1000;   // for convert to millisec.

function msgNotic() {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(time);
    // console.log("Hello World");
}
msgNotic();
// runs every 10 sec and runs on init.
setInterval(msgNotic, minutes*ms);