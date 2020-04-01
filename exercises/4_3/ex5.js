let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: 'Sim'
};
let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: 'Sim'
};

console.log(info.personagem,"e",info2.personagem);
console.log(info.origem,"e",info2.origem);
console.log(info.nota,"e",info2.nota);
if(info2.recorrente=="Sim"&&info.recorrente=="Sim"){
    console.log("Ambos recorrentes");
}
else if(info2.recorrente=="Nao"&&info.recorrente=="Sim"){
    console.log(info2.personagem, "recorrente");
}
else if(info2.recorrente=="Sim"&&info.recorrente=="Nao"){
    console.log(info1.personagem, "recorrente");
}
else{
    console.log("Nenhum recorrente");
}