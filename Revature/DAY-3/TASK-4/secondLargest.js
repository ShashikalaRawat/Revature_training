function FindMax(arr){
    let max=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}
function SecondLar(arr){
   let max=FindMax(arr);
   let smax=0;
   for(let i=0;i<arr.length;i++){
     if(arr[i]<max && arr[i]>=smax){
          smax=arr[i];
     }
   }
   return smax;
}
const arr=[10, 5, 8, 20, 15, 12];
console.log(SecondLar(arr));