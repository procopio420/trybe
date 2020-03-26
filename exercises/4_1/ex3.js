let a = 10, b = 5, c=15;

function maior(a,b,c){
    if(a>b&&a>c){
        return a;
    }
    else if(b>a&&b>c){
        return b;
    }
    else if(c>a&&c>b) {
        return c;
    }
}

console.log(maior(a,b,c));
