let a=5;

function signal(a){
    if(a>0){
        return "Positive";
    }
    else if(a<0){
        return "Negative";
    }
    else{
        return "Zero";
    }
}

console.log(signal(a));