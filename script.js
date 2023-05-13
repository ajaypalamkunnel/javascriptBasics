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


//functions


function greetings()
{
  document.write("<br>"+"Good Morning"+"<br>")
}

function sum(n1,n2)
{
  document.write(n1 + n2)
  document.write("<br>"+"sum = "+ n1 + n2 +"<br>")
}

sum(10,20)
