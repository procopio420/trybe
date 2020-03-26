const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function lucro(custo, valor){
    custo*=1.2;
    return (valor*1000)-(custo*1000);
}

rl.question("Custo: ", function(custo){
    rl.question("Valor de venda: ", function(valor){
        if(custo>=0&&valor>=0)
            console.log(lucro(custo,valor));
        else 
            console.log("Error")
        rl.close();
    }) 
});