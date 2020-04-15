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
    addPhraseToDisplay(getRandomPhraseAsArray(phrases));
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
    const ul = document.getElementById('phrase').firstElementChild;
    for (let i=0; i<array.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = array[i];
        if (li.innerHTML != ' ') {
            li.className = 'letter';
        } else {
            li.className = 'space';
        }
        ul.appendChild(li);
    }
}

checkLetter = (button) => {
    //gets all elements with the class .letter then loops through them to see if there is a letter that matches 
    //the button pressed by user, if theres a match add class .show to li and return that letter, if no match return null
    const letters = document.getElementsByClassName('letter');
    const match = false;
    let matchedLetter;
    for (let i=0; i<letters.length; i++) {
        if (button.innerHTML === letters[i].innerHTML) {
            letters[i].className = 'show';
            matchedLetter = letters[i].innerHTML;
            match = true;
        }
    }
    if (match) {
        return matchedLetter;
    } else {
        return null;
    }

}