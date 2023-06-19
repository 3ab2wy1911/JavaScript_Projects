var timer;
var hr = 0;
var min = 0;
var sec = 0;
var msec = 0;

function startTimer() {
    timer = setInterval(updateTimer, 10);
}

function format(time) {
    if (time < 10) return "0" + time ;
    else return time;
}

function updateTimer() {
    msec++;
    if (msec === 100) {
        msec = 0;
        sec++;
        if (sec === 60) {
            sec = 0;
            min++;
            if (min === 60) {
                min = 0;
                hr++;
            }
        }
    }
    document.getElementById("timer").textContent = format(hr) + ":" + format(min) + ":" + format(sec) + ":" + format(msec);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    document.getElementById("timer").innerHTML = '00:00:00:00';
    hr = 0;
    min = 0;
    sec = 0;
    msec = 0;
}
