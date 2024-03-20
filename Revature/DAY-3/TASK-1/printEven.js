//Check Given No is Even or not using for loop
function printEven(n){
    for(var i=0;i<n;i++){
        if(i%2==0){
            console.log(i);
        }
    }
}
 printEven(100);




//Check Given No is Even or not using do while loop
function printEvenNumbers(n){
    let i=0;
    do{
        if(i%2==0)
        {
            console.log(i);
        }
    }
    while(i<=n);
}
printEvenNumbers(15);