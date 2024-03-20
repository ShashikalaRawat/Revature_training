//method-1 using extra array
function reverseArr(arr){
   var ans=[];
   for(let i=0;i<arr.length;i++){
    ans[i]=arr[arr.length-1-i];
   }
   return ans;
}
const arr=[25,45,12,67,89,34];
console.log(reverseArr(arr));


//method-2 using reverse()
// const arr=[25,45,12,67,89,34];
// console.log(arr.reverse());