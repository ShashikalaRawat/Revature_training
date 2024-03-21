//check if a string starts with a specific substring: ```javascript const str = "Hello, World!"; const substr = "Hello"; ```
function check(str,substr){
    if(str.startsWith(substr,0)){
        console.log("Yes");
    }else{
        console.log("No");
    }
}
const str = "Hello, World!";
const substr = "Hello";
check(str,substr);
