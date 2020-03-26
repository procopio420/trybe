const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function toChar(nota){
    if(nota>100||nota<0){
        return "Error";
    }
    else if(nota>=90){
        return "A";
    }
    else if(nota>=80){
        return "B";
    }
    else if(nota>=70){
        return "C";
    }
    else if(nota>=60){
        return "D";
    }
    else if(nota>=50){
        return "E";
    }
    else{
        return "F";
    }
}

rl.question("Nota (0-100): ", function(nota){
    console.log(toChar(nota));
    rl.close();
});