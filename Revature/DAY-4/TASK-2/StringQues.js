//print the location of "my" in a string "I am enjoying my training".

var s="I am enjoying my training";
console.log(s.indexOf("my"));


//print the location of "m" in a string "I am enjoying my training"

console.log(s.indexOf("m"));


//extract the complete string from index 3 of the string "I am enjoying my training". and store in a variable

var Str1=s.substring(3);
console.log(Str1);


//extract string from index 0 to 4 from the string "I am enjoying my training". and store in a variable.

var Str2=s.substring(0,4);
console.log(Str2);

//replace "training" with "journey" in "I am enjoying my training". and store in a variable.
var Str3=s.replace("training","journey");
console.log(Str3);

//Print all the characters of a string using for loop can use charAt() or str[];

for(var i=0;i<s.length;i++){
    console.log(s[i]);
}

//store string str="a,b,c" into an array.
var newStr="a,b,c";
var Str4=newStr.split("");
console.log(Str4);

//remove white spaces from the string str="                                          abc     ".
var newStr2="                                  abc                     ";
console.log(newStr2.trim());

//Add two strings using the concat() function. and print them. make sure there is space between concatenated elements.
console.log(newStr.concat(" ",s));

//Remove 'e' from the following string:```javascript  const str = "abcedgedcve";```
const s1="abcedgedcve";
var s2=s1.replaceAll('e','');
console.log(s2);

//Convert the following string into an array:```javascript const str = "Hello there I am jack";
const s3="Hello there I am jack";
var s4=s3.split(" ");
console.log(s4);



