//Write a function to check if a given string is a valid email address: ```javascript const email1 = "example@example.com"; const email2 = "invalid@email";```
function checkEmail(email){
    for(var i=0;i<email.length;i++){
        var atTheRate=email.lastIndexOf('@');
        var dot=email.indexOf('.');
        if(atTheRate!=-1 && atTheRate!=0 && dot!=-1 && dot!=0 && dot>atTheRate+1){
            return true;
        }else{
            return false;
        }
    }

}
const email1 = "example@example.com"; 
const email2 = "invalid@email"
console.log(checkEmail(email1));
console.log(checkEmail(email2));

