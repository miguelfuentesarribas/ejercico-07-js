var contadorh1 = document.querySelector('#cont')
var set_to = document.getElementById("set_to").defaultValue = 0;
var step = document.getElementById("step").defaultValue = 10;
var startInterval;
var contador = set_to;
var isStart = false;
var isCountUp = true;


document.getElementById("start").onclick = function() {start()};
document.getElementById("pause").onclick = function() {stopF()};
document.getElementById("reset").onclick = function() {reset()};
document.getElementById("up").onclick    = function() {countUp()};
document.getElementById("down").onclick  = function() {countdown()};


function updateCount() {
    step = +document.getElementById('step').value;
    if (isCountUp === true) { 
        contador = contador + step;
        console.log(contador);
        //render
        contadorh1.innerHTML = contador;
    } else {
        contador = contador - step;
        console.log(contador);
        //render
        contadorh1.innerHTML = contador;
    }
}


function start() {
    if (isStart === false) {
        isStart = true;
        startInterval = setInterval(updateCount, 1000);
    }
}
function stopF() {
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


function getInputValue(){
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("myInput").value;
    
    // Displaying the value
    alert(inputVal);
}


