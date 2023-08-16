let timerInterval;
let hours = 0;
let minutes = 0;
let seconds = 0;

const hoursElem = document.getElementById('hours');
const minutesElem = document.getElementById('minutes');
const secondsElem = document.getElementById('seconds');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

function updateTimer() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    secondsElem.textContent = seconds < 10 ? '0' + seconds : seconds;
    minutesElem.textContent = minutes < 10 ? '0' + minutes : minutes;
    hoursElem.textContent = hours < 10 ? '0' + hours : hours;
}

startButton.addEventListener('click', function() {
    if (!timerInterval) {
        timerInterval = setInterval(updateTimer, 1000);
    }
});

stopButton.addEventListener('click', function() {
    clearInterval(timerInterval);
    timerInterval = null;
});

resetButton.addEventListener('click', function() {
    clearInterval(timerInterval);
    timerInterval = null;
    hours = 0;
    minutes = 0;
    seconds = 0;
    hoursElem.textContent = '00';
    minutesElem.textContent = '00';
    secondsElem.textContent = '00';
});
