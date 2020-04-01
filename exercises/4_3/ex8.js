function menor(array){
    let menor=array[0];
    let indice=0;
    for(i in array){
        if(array[i]<menor){
            menor=array[i];
            indice=i;
        }
    }
    return indice;
}

console.log(menor([2, 4, 6, 7, 10, 0, -3]));