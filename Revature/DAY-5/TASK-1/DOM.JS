//1. Create 1 div with id:mainDiv, 2 Paragraph with class:para. select them using id selector and class selector and change their color text color to red.
var ans1=document.getElementById("mainDiv");
console.log("change by id");
ans1.style.color="red";

var ans2=document.getElementsByClassName("para");
console.log("change by class")
ans2[0].style.color="red";
ans2[1],style.color="red";
