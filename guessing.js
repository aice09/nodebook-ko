const readline =
require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

/*
this is not working bug: always repeat
*/
const numberToGuess = Math.floor(Math.random()*10)+1;
const foundCorrectNumber = false;

while (foundCorrectNumber!=true) {
    readline.question('Guess a number from 1 to 10:', guess =>
    {
        guess = Number(guess);

        if (guess===numberToGuess) {
            console.log(`Random Number: ${numberToGuess}`)
            console.log('Congrats, you got it!');
            guessStatus = true;
            readline.close();
        } else {
            console.log(`Random Number: ${numberToGuess}`)
            console.log('Sorry, guess again!');
            guessStatus = false;
        }
    });     
}

