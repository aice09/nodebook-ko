const readline =
require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Salary Grade Identifier');
readline.question('Enter your exact salary: ', salary =>
{
    
    if (salary <= 11647) {
        sg = 'SG1-Step1'
    } else if (salary >= 11647){
        sg = 'SG1-Step2'
    } else {
        sg = 'ss'
    }
    console.log(`Your Salary is ${salary}`)
    console.log(`Your Salary Grade is ${sg}`)
    readline.close();
    
});