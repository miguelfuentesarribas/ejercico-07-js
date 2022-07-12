let contadorh1 = document.querySelector('#cont')
let set_to = document.getElementById("set_to").defaultValue = 0;
let step = document.getElementById("step").defaultValue = 10;
let startInterval;
let contador = set_to;
let isStart = false;
let isCountUp = true;


document.getElementById("start").onclick = start;
document.getElementById("pause").onclick = pause;
document.getElementById("reset").onclick = reset;
document.getElementById("up").onclick    = countUp;
document.getElementById("down").onclick  = countdown;


function updateCount() {
    step = +document.getElementById('step').value;
    contador = isCountUp === true ? contador + step : contador - step
    contadorh1.innerHTML = contador;
}


function start() {
    if (isStart === false) {
        isStart = true;
        startInterval = setInterval(updateCount, 1000);
    }
}

function pause() {
    isStart = false;
    clearInterval(startInterval);
}

function reset() {
    contador = +document.getElementById('set_to').value;
    contadorh1.innerHTML = contador;
}

function countUp() {
    isCountUp = true;
}

function countdown() {
    isCountUp = false;
}