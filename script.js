const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
];

let palabraAleatoria;
let time = 10;
let score = 0;
let h1 = document.querySelector("h1");
let input = document.querySelector("input");
let timeSpan = document.getElementById("timeSpan");
let puntaje = document.getElementById("score");
let finDelJuego = document.getElementById("end-game-container");
let reset = document.querySelector(".reset");
let main = document.querySelector(".main");
let timeInterval = setInterval(actualizarTiempo, 1000);

function randomWords() {
    palabraAleatoria = words[Math.floor(Math.random() * words.length)]
    return palabraAleatoria;
}

function addToDOM() {
    randomWords();
    h1.textContent = palabraAleatoria;
}

addToDOM();

function comparaPalabras(e) {
    if (input.value == palabraAleatoria) {
        time = time + 3;
        input.value = "";
        addToDOM();
        updateScore();
    }
}

function actualizarTiempo() {
    timeSpan.textContent = time;
    if (time === 0) {
        clearInterval(timeInterval);
        main.classList.add("mainDesaparece");
        gameOver();
    }

    time--;
}

function updateScore() {
    score++;
    puntaje.textContent = score;
}

function gameOver() {
    finDelJuego.innerHTML = "Fin del juego, te quedaste sin tiempo, <br>tu puntaje fue de " + score;
    reset.classList.remove("reset");
}

input.addEventListener('keydown', function () {
    comparaPalabras();
});
