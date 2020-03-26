const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function xadrez(peca){
    peca.toLowerCase();
    if(peca=="pawn"){
        return "1 vertically";
    }
    else if(peca=="rook"){
        return "horizontally or vertically";
    }
    else if(peca=="knight"){
        return "in L";
    }
    else if(peca=="bishop"){
        return "diagonals";
    }
    else if(peca=="queen"){
        return "vertically, horizontally or diagonally";
    }
    else if(peca=="king"){
        return "1 vertically, horizontally, or diagonally";
    }
    else{
        return "error";
    }
}

rl.question("Qual a peça? ",function(peca){
    console.log(xadrez(peca));
    rl.close();
});
