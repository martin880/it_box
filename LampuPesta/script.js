let btnRandom = document.getElementById('btnRandom');

let btnRed = document.getElementById('btnRed');
let btnGreen = document.getElementById('btnGreen');
let btnBlue = document.getElementById('btnBlue');

function btnRandomHandler(){
    let colors = ["red", "green", "blue"]
    let number = Math.floor(Math.random() * colors.length)
    let Body = document.querySelector('body');
    Body.style.backgroundColor = colors[number];
    console.log(colors[number])
}

function btnRedHandler(){
    let Body = document.querySelector('body');
    Body.style.backgroundColor = 'red';
}
function btnGreenHandler(){
    let Body = document.querySelector('body');
    Body.style.backgroundColor = 'green';
}
function btnBlueHandler(){
    let Body = document.querySelector('body');
    Body.style.backgroundColor = 'blue';
}

btnRandom.addEventListener('click', btnRandomHandler);
btnRed.addEventListener('click', btnRedHandler);
btnGreen.addEventListener('click', btnGreenHandler);
btnBlue.addEventListener('click', btnBlueHandler);