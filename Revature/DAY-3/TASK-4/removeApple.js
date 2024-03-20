function removeApple(arr,a){
   arr.splice(a,1);
   return arr;
}
const arr=["banana","Mango","Apple","kiwi"];
let a=arr.indexOf("Apple");
console.log(removeApple(arr,a));