//4. Create an array with 3 userObjects: name, city , age. put those in an array.
// Now in HTML page. Create an empty div tag: <div></div>
// and below this div tag create an button.
// Now when the user clicks on that button. The names present in all those 3 obj should get printed with <h1>

// after clicking your div should look like this:
// <div>
    //<h1>name<h1>
    //<h1>name<h1>
    //<h1>name<h1>
//</div>
class Person{

        constructor(name,age,city){
          this.name=name;
            this.age=age;
            this.city=city;
          
       }
    
       getName(){
           return this.name;
       }
    
    }
    
    var p1= new Person("Yash",24,"Pune");
    var p2= new Person("Mitu",21,"Jaipur");
    var p3= new Person("Piyush",20,"Ajmer");
var ans=[p1.getName(),p2.getName(),p3.getName()];
function showTable(){
    var divi=document.getElementById("id1");
    divi.innerHTML='';
    for(var i=0;i<ans.length;i++){
        var heading=document.createElement('h1');
        heading.textContent=ans[i];
        divi.appendChild(heading);
    }

}

