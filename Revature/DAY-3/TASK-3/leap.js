var y=prompt("Enter Year");
function leapYear(y){

    if(y%4==0){
        if(y%100==0){
            if(y%400==0){
               return true;
            }
        }
        return true;
    }
    return false;
}
if(leapYear(y)==true){
    console.log("Leap Year");
 }else{
    console.log("Not a Leap Year");
 }