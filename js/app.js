const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGameButton = document.querySelector('a.btn__reset');
const startGameScreen = document.getElementById('overlay');
let missed = 0;

const phrases = [
    'Pele is a fraud',
    'Shelter in place',
    'Please fix Fortnite',
    'I am running out of things to do',
    'I am running out of things to eat',
    'Someone take my calculus test',
    'I prefer Jeopardy',
    'Messi is the goat'
]

startGameButton.addEventListener('click', () => {
    startGameScreen.style.display = 'none';
})

getRandomPhraseAsArray = (array) => {
    //randomly choose phrase form array
    const phraseIndex = Math.floor(Math.random() * array.length);
    //take that  phrase and split it into a new array of characters from that array
    const charArray = [];
    for (let i=0; i<array[phraseIndex].length; i++) {
        const char = array[phraseIndex].charAt(i);
        charArray[i] = char;
    }
    return charArray;
}

addPhraseToDisplay = (array) => {
    //loop through array of characters, for each character create an li and put that character in the li, 
    //if character is a letter add class .letter to li, then append the li to the #phrase ul
    const li = document.createElement('li');
    const ul = document.getElementById('phrase').firstChild;
    for (let i=0; i<array.length; i++) {
        li.innerHTML = array[i].value;
        if (array[i].value != '') {
            li.className = 'letter';
        }
        ul.appendChild(li);
    }
}