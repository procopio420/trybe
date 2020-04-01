function eFinal(word, ending){
    let dif=word.length-ending.length;
    for(let i=ending.length-1;i>=0;i--){
        if(word[i+dif]!=ending[i]){
            return false;
        }
    }
    return true;
}

console.log(eFinal("trybe", "be"));