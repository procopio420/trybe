function verificaPalindrome(string){
    let palindrome="";
    for(let i=0;i<string.length;i++){
        palindrome+=string[(string.length-1)-i];
    }
    if(palindrome==string){
        return true;
    }
    return false;
}
