const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function triangulo(n){
    let array=[];
    for(let i=0;i<n;i++){
        array[i]=" ";
    }
    
    let a=(n-1)/2,b=(n-1)/2;
    
    for(let i=0;i<Math.ceil(n/2.0);i++){
        if(a==b){
            array[a]="*";
        }
        else {
            array[a]="*";
            array[b]="*";
        }
        let newArray=array.join("");
        console.log(newArray);
        a++;
        b--;
    }
}

rl.question("N: ", n => {triangulo(n);rl.close()});