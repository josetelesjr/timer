

function addHoursFromSeconds(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

const timer = document.querySelector('.time');
const initial = document.querySelector('.initial');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
let seconds = 0;
let time;

function initialTimer() {
        time = setInterval(function() {
        seconds++;
        timer.innerHTML = addHoursFromSeconds(seconds);
    }, 1000)
}

initial.addEventListener('click', function(e) {
    clearInterval(time);
    initialTimer();
    timer.classList.remove('paused');
})

pause.addEventListener('click', function(e){
    clearInterval(time);
    timer.classList.add('paused');
})

reset.addEventListener('click', function(e){
    clearInterval(time);
    timer.innerHTML = '00:00:00'
    seconds = 0;
    timer.classList.remove('paused');
})