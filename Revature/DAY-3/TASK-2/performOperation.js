var arrowSum=(a,b)=> a+b;
var arrowMinus=(a,b)=> a-b;
var arrowMult=(a,b)=> a*b;
function calculator(){
    var userInput=prompt("Enter your operation");
    var a=parseInt(prompt("Enter Your First No."));
    var b=parseInt(prompt("Enter Your second No."));
    switch(userInput){
        case '+': console.log(arrowSum(a,b));
                  break;
        case '-': console.log(arrowMinus(a,b));
                  break;
        case '*': console.log(arrowMult(a,b));
    }
}
calculator();