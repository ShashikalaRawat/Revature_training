//Check if the given string is a palindrome or not:```javascript const str = "racecar";
function palindrome(){
    const str="racecar";
    for(var i=0;i<str.length;i++){
        if(str[i]!==str[str.length-1-i]){
            return false;
        }
    }
    return true;
}

if(palindrome()==true){
    console.log("It is Palindrome");
}else{
    console.log("It is not Palindrome");
}
