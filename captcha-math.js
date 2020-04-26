const readline =
require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

//Captcha Generator
function promptCaptcha() {
    return new Promise(function name(resolve, reject) {
       var ask = function name() {
            const valuea = Math.floor(Math.random()*1000)+1;
            const valueb = Math.floor(Math.random()*1000)+1;
            sumis = valuea + valueb;

            readline.question(`Calculate the sum of ${valuea} + ${valueb} ?`, answer =>
            {
                guessedsum = parseInt(answer);
                
                if (guessedsum!=sumis) {    
                    console.log('Okay! Try again!')                
                    ask();
                } else {
                    resolve(guessedsum,reject);
                }
            });
       }
       ask();
    });
}

(async function start() {
    var captcha1 = await promptCaptcha();
    console.log('Great! ' + captcha1 + ' is correct.');
    process.exit();
    
})();

