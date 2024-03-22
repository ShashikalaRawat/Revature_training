function output() {
    event.preventDefault();
    var name = document.getElementById("name").value;
    console.log(name);
    var pass=document.getElementById("pass").value;
    console.log(pass);
  }
var form= document.getElementById("f1");
form.addEventListener("submit",output);

