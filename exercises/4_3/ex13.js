let romano = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
};
function numero(string){
    let numero=0;
    let s=[];
    for(i in string){
        for(u in romano){
            if(string[i]==u){
                numero=romano[u];
            }
        }
        s.push(numero.toString());
    }
    numero=0;
    let n=0;
    for(let i=s.length-1;i>=0;i--){ 
        if(Number(s[i-1])<Number(s[i])){
            n+=Number(s[i])-Number(s[i-1]);
            i--;
        }
        else{
            n+=Number(s[i])
        }
    }
    return n;
}

console.log(numero("CMLXVIII"));