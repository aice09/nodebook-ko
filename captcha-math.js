const readline =
require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

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
    console.log('test' + captcha1);
    process.exit();
    
})();

