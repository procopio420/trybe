const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function quadrado(n){
    let string="";
    for(let i=0;i<n;i++){
        for(let u=0;u<n;u++){
            string+="*";
        }
        console.log(string);
        string="";
    }
}

rl.question("N: ", n => {quadrado(n);rl.close()});