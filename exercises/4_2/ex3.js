const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function triangulo(n){
    let vetor_string=[""];
    let string="";
    for(let i=0;i<n;i++){
        vetor_string[i]=" ";
    }
    for(let u=n-1;u>=0;u--){
        vetor_string[u]="*";
        string=vetor_string.join("");
        console.log(string);
    }
}

rl.question("N: ", n => {triangulo(n);rl.close()});