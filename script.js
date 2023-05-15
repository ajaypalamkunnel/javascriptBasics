var person = "John"
var person2 = "smith"


document.write(person)
document.write("<br>")
document.write(typeof person)


//number

var num1 = 10;
var num2 = 20.34;

document.write("<br>")
document.write(num1)
document.write("<br>")
document.write(typeof num1)

//Boolean

var js = true;
var html = false;

//undefined

var test1;



document.write("<br>")
document.write(test1)
document.write("<br>")
document.write(typeof test1)


//null
 var test2=null;

//oops
// sample object
let employee ={
    name: "John",
    position: "Dev",
    salary:"40000",
    getSalary:function (){
        document.write("<br>Salary of "+this.name+" is "+this.salary)
    }

}

employee.getSalary()
console.log(employee);


//class

class Staff{
    constructor(name,position,salary){
        this.name = name;
        this.position = position;
        this.salary = salary;

    }

    displaySalary(){
        document.write("<br>salary of "+this.name+" is "+this.salary)
    }
}

let e1 = new Staff("Afsal","Accountant",60000)
let e2 =  new Staff("Nirmal","creator",30000)

e1.displaySalary()
e2.displaySalary()

//Inheritance

class Manager extends Staff{

}

let m1 = new Manager("smith","HR Manager",50000)
console.log(m1);

m1.displaySalary();