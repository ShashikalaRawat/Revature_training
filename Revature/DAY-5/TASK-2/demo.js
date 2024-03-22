//2 Create a div with "demo text" inside it now when I click on that div the text should get chaged to "I got clicked" and chagen the backgroud color of that div to pink.
function ChangeText(){
    event.target.innerHTML="I got clicked";
    event.target.style.backgroundColor="pink";
}
//3. Create a p tag inside it initially shwo 0. Then create 2 buttons to increment or decreament it by 1.
var Ele=document.getElementById("id1");
var count=0;
function increse(){
    count++;
    Ele.innerHTML=count;
   
}
function decrease(){
   count--;
   Ele.innerHTML=count;
}

