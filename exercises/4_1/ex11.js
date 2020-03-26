const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function liquido(bruto){
    if(bruto>=0&&bruto<1556.95){
        bruto-=(0.08*bruto);
    }
    else if(bruto>=1556.95&&bruto<2594.93){
        bruto-=(0.09*bruto);
    }
    else if(bruto>=2594.93&&bruto<5189.83){
        bruto-=(0.11*bruto);
    }
    else{
        bruto-=570.88;
    }

    if (bruto>=0&&bruto<=1903.98){
        bruto=bruto;
    }
    else if(bruto>1903.98&&bruto<=2826.65){
        bruto-=((0.075*bruto)-142.8);
    }
    else if(bruto>2826.65&&bruto<=3751.05){
        bruto-=((0.15*bruto)-354.8);
    }
    else if(bruto>3751.05&bruto<=4664.68){
        bruto-=((0.225*bruto)-636.13);
    }
    else{
        bruto-=((0.275*bruto)-869.36);
    }

    return bruto;
}

rl.question("Salario bruto: ", function(bruto){
    console.log(liquido(bruto));
    rl.close();
});