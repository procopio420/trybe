const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function triangulo(n){
    let string="";
    for(let i=0;i<n;i++){
        string+="*";
        console.log(string);
    }
}

rl.question("N: ", n => {triangulo(n);rl.close()});