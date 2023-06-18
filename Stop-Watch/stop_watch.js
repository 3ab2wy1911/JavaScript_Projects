var timer;
var hr = 0;
var min = 0;
var sec = 0;

function startTimer() {
    timer = setInterval(updateTimer, 1000);
}

function format(time) {
    if (time < 10) return "0" + time ;
    else return time;
}


function updateTimer() {
    sec++;
    if (sec === 60) {
        sec = 0;
        min++;
        if (min === 60) {
            min = 0;
            hours++;
        }
    }
   document.getElementById("timer").textContent = format(hr) + ":" + format(min) + ":" + format(sec);
}

function stopTimer()
{
    clearInterval(timer);
}

function resetTimer()
{
    document.getElementById("timer").innerHTML = '00:00:00';
    hr = 0;
    min = 0;
    sec = 0;
}