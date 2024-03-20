function FindMax(arr){
    let max=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}
const arr=[23, 45, 12, 67, 89, 34];
console.log(FindMax(arr));