const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGameButton = document.querySelector('a.btn__reset');
const startGameScreen = document.getElementById('overlay');
let missed = 0;

startGameButton.addEventListener('click', (e) => {
    startGameScreen.style.display = 'none';
})