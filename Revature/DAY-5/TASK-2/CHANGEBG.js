//  Create 4 divs with size 100x100px with bg-color:red;
//- When I click on 1st div change the bg-color.
//- When the mouse comes in the second div area change the bg-color.
//- When user clicks on 3rd div add an image in the backgroud.
//- When the user clicks on 4th div change the size of div.

function ChangeColor(){
    event.target.style.backgroundColor="blue";
    console.log("color changed for div1");

}

function ChangeC(){
    event.target.style.backgroundColor="yellow";
    console.log("color changed for div2");
}
function addImage(){
    event.target.style.backgroundImage="url('TRANSFORM.png')";
    console.log("color changed for div3");
}
function changeSize(){
    event.target.style.height="300px";
    event.target.style.width="900px";
    console.log("size changes for div 4");
}
