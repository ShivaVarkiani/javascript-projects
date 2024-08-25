let secondsElapsed = 0;
let interval = null;
const time = document.getElementById("timer"); 

function padStart(value) {
    return String(value).padStart(2, "0");
}

function setTime() {
    const minutes = Math.floor(secondsElapsed / 60);
    const seconds = secondsElapsed % 60;
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
}

function timer() {
    secondsElapsed++;
    setTime();
}

function startbutton() {
    if (interval) stopbutton();
    interval = setInterval(timer, 1000);
}

function resetbutton() {
    stopbutton();
    secondsElapsed = 0;
    setTime();
}

function stopbutton() {
    clearInterval(interval);
    interval = null; 
}
