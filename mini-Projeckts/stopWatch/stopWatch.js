

let display = document.getElementById('display');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');


let intervalId = null;
let startTime = 0;
let elapsed = 0;
let running = false;

function formatTime(ms) {
    let totalSeconds = Math.floor(ms / 1000);
    let hours   = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;
    let centis  = Math.floor((ms % 1000) / 10);
    let hh = String(hours).padStart(2, '0');
    let mm = String(minutes).padStart(2, '0');
    let ss = String(seconds).padStart(2, '0');
    let cc = String(centis).padStart(2, '0');

    return hh + ':' + mm + ':' + ss + '<span class="ms">.' + cc + '</span>';
}

function updateDisplay() {
    let now = Date.now();
    let totalElapsed = elapsed + (now - startTime);
    display.innerHTML = formatTime(totalElapsed);
}


startBtn.addEventListener('click', function() {
    if (running) {
        window.clearInterval(intervalId);
        elapsed += Date.now() - startTime;
        running = false;

        startBtn.textContent = '▶ Старт';
        startBtn.className = 'btn btn-start';
        display.classList.remove('running');
    } else {

        startTime = Date.now();
        running = true;

        intervalId = window.setInterval(updateDisplay, 30);

        startBtn.textContent = '⏸ Пауза';
        startBtn.className = 'btn btn-pause';
        display.classList.add('running');
    }
});

resetBtn.addEventListener('click', function() {
    window.clearInterval(intervalId);
    intervalId = null;
    startTime = 0;
    elapsed = 0;
    running = false;

    display.innerHTML = '00:00:00<span class="ms">.00</span>';
    display.classList.remove('running');
    startBtn.textContent = '▶ Старт';
    startBtn.className = 'btn btn-start';
});

console.log("made by Artem");
