function GuessNum(a){
  count=0;
  while(count!=1){
   let num=prompt("Guess the Number: ");
   if(num==a){
      count+=1;
      console.log("Congratulations!!, you did it");
   }else{
      if(num>a){
       console.log("Your number is greater ");
       alert("Your number is greater ")
      }else{
       console.log("Your number is smaller");
       alert("Your number is smaller")
      }
   }
  }
}
const randNum=Math.floor(Math.random()*100)+1;
GuessNum(randNum);


