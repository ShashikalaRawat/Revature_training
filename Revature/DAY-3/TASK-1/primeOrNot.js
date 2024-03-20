
//Check given no is prime or not
function primeNum(n){
    var flag=true;
   for(var i=2;i<n;i++){
    if(n%i==0){
       flag=false;
       break;
    }
   }
   if(flag==true){
    console.log("It is prime");
   }else{
    console.log("It is not prime no");
   }
}
primeNum(13);

//Check prime numbers in a given range
function printPrimeNum(num){
    for (let i =1;i<=num;i++){
        let count = 0 ;
        for (let j =1;j<=i;j++){
            if (i%j===0){
                count +=1;
            }
        }
        if (count === 2){
            console.log(i);
        }
    }
}
printPrimeNum(25);
 