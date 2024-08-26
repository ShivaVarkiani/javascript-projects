let ms = 0;
let interval = null;
const time = document.getElementById("timer"); 

function padStart(value, length = 2) {
    return String(value).padStart(length, "0");
}

function setTime() {
    const totalMilliseconds = ms * 75;
    const totalSeconds = Math.floor(totalMilliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = totalMilliseconds % 1000;
    
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}:${padStart(Math.floor(milliseconds / 10), 2)}`;
}

function timer() {
    ms++;
    setTime();
}

function startbutton() {
    if (interval) stopbutton();
    interval = setInterval(timer, 75);
}

function resetbutton() {
    stopbutton();
    ms = 0;
    setTime();
}

function stopbutton() {
    clearInterval(interval);
    interval = null; 
}
