let digitalClock = document.getElementById('clock');


setInterval(() => {
    
let HoursMinSec = new Date();
 let set = HoursMinSec.getHours() + " : "  + HoursMinSec.getMinutes() + " : " + HoursMinSec.getSeconds();
 digitalClock.innerText = set;

}, 1000);

