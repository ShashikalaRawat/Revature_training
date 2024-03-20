var marks=parseInt(prompt("Enter Marks"));
function Grade(marks){
    if(marks>=90){
        return "Grade is A";
    }else if(marks>=80 && marks<90){
        return "Grade is B";
    }else if(marks>=70 && marks<80){
        return "Grade is C";
    }else if(marks>=60 && marks<70){
        return "Grade is D";
    }else{
        return "Grade is F"
    }
}
console.log(Grade(marks));