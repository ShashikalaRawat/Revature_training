//Create a form to take user data like name and email. Now once the user have filled his data and clicked on submit button get all the data filled in the form and put inside a object and store that object in global userArray[]. Below your form create a div which display all the user names stored in your userArray[].
var userArray=[];

function output(){
    event.preventDefault();
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    
    userArray.push({name: name, email: email});
    var div=document.getElementById("array");
    div.innerHTML='';
   for(var i=0;i<userArray.length;i++){
    var create=document.createElement('p');
    create.textContent=userArray[i].name;
    div.appendChild(create);
    
   }
}
var form=document.getElementById("f1");
form.addEventListener("submit",output);

