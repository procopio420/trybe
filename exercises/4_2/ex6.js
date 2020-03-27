const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ePrimo(n){
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}

rl.question("N: ", n => {console.log(ePrimo(n));rl.close()});