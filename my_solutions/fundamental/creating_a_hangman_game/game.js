const words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake"
];

/**
 * Pick random item from a given array
 **/
function randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/**
 * Create an array filled with "_"
 */
function createAnswerArray(length) {
    let answerArray = [];
    for (let i = 0; i < length; i++) {
        answerArray[i] = "_";
    }
    return answerArray;
}

/**
 * Play hangman game
 */
function play() {
    const word = randomChoice(words);
    let answerArray = createAnswerArray(word.length);
    let remainingLetters = answerArray.length;

    while (remainingLetters > 0) {
        alert(answerArray.join(" "));
        let guess = prompt("Guess a letter, or click Cancel to stop playing.").toLowerCase();
        if (guess === null) {
            break;
        } else if (guess.length !== 1) {
            alert("Please enter a single letter.");
        } else {
            for (let j = 0; j < word.length; j++) {
                if (word[j] === guess && answerArray[j] !== guess) {
                    answerArray[j] = guess;
                    remainingLetters--;
                }
            }
        }
    }

    alert(answerArray.join(" "));
    alert("Good job! The answer was " + word);
}

play();
