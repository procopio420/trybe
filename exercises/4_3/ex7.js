function maior(array){
    let maior=array[0];
    let indice=0;
    for(i in array){
        if(array[i]>maior){
            maior=array[i];
            indice=i;
        }
    }
    return indice;
}

console.log(maior([2, 3, 6, 7, 10, 1]));