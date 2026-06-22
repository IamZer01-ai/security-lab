function updateClock(){

const now = new Date();

const time =
now.toLocaleTimeString();

const clock =
document.getElementById("clock");

if(clock){
clock.innerHTML =
"🟢 System Time: " + time;
}

}

setInterval(updateClock,1000);

updateClock();
