const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGameButton = document.querySelector('a.btn__reset');
const startGameScreen = document.getElementById('overlay');
let missed = 0;
const letterButton = document.getElementsByTagName('BUTTON');

const phrases = [
    'Pele is a fraud',
    'Shelter in place',
    'Please fix Fortnite',
    'I am running out of things to do',
    'I am running out of things to eat',
    'Someone take my calculus test',
    'I prefer jeopardy',
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
    const ul = phrase.firstElementChild;
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
    var letters = document.getElementsByClassName('letter');
    let matchedLetter = null;
    for (let i=0; i<letters.length; i++) {
        if (button.textContent === letters[i].textContent.toLowerCase()) {
            letters[i].classList.add('show');
            matchedLetter = letters[i].textContent.toLowerCase();
        }
    }
    return matchedLetter;
}

qwerty.addEventListener('click', (e) => {
    const button = e.target;
    if (button.tagName === 'BUTTON') {
        const letterClicked = button.textContent;
        console.log(letterClicked);
        button.className = 'chosen';
        if (button.className === 'chosen') {
            button.disabled = true;
        }  
        let letterFound = checkLetter(button);
    }
})