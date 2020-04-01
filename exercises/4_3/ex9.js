function maior(array){
    let maior=0;
    let nome;
    for(i in array){
        if(array[i].length>maior){
            maior=array[i].length;
            nome=array[i];
        }
    }
    return nome;
}

console.log(maior(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))