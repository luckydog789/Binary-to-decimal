//require the dependencies for this project. 
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

//use parseInt to convert binary to decimal
function bin2decimal(input){
return parseInt(input, 2); 
}

//Ask a question on what binary number to convert
readline.question('Enter a binary number to convert to decimal. ', (answer) => {
    console.log(bin2decimal(answer));
    readline.close();
});