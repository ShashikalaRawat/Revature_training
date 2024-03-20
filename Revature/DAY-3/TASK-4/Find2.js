
function findTwo(arr){
    var ind=arr.indexOf(2);
    if(ind>0){
        return ind;
    }else{
        return "Element not found in the array";
    }
}
const arr=[1,2,3,4,5,6];
console.log(findTwo(arr));
