
    var student ={
        name: prompt("Enter Your Name"),
        age: parseInt(prompt("Enter your age")),
        Grade:prompt("Enter Your Grade"),
    
        displayInfo: function(){
            console.log(this.name);
            console.log(this.age);
            console.log(this.Grade);
        }
        
    }
    student.displayInfo();
    


