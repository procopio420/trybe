function repete(array){
    let quant=[];
    for(let i=0;i<100;i++){
        quant[i]=0;
    }
    for(i in array){
        quant[array[i]]++;
    }
    let maior=0,indice=0;
    for(i in quant){
        if(quant[i]>maior){
            maior=quant[i];
            indice=i;
        }
    }
    return indice;
}

console.log(repete([2, 3, 2, 5, 8, 2, 3]));