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


 //array
var animal= ["lion","tiger","cat","dog"];
document.write("<br>"+animal) 
animal[0] = "Elephant"
document.write("<br>"+animal) 

//sort array element 

animal.sort()
document.write("<br> sorted array <br>"+animal)

var x = animal.length
document.write("<br>"+ x)

//add one array element
animal.push("Fox")
document.write("<br>"+animal) 

//delete one array element from end

animal.pop()
document.write("<br>"+animal)

//delete one array element from front

animal.shift()
document.write("<br>"+animal)

//delete specified array element 

animal.splice(1,1)
document.write("<br>"+ animal +"<br>")


//string 

var text1 = "Welcome "
var text2 = "to Kerala"

//join texts 
document.write(text1.concat(text2)+"<br>")

var text3 = "HELLO"

document.write(text3.toLowerCase()+"<br>")

var text4 = "Learn JavaScript "

document.write(text3.toUpperCase())

//cut a word from a text
document.write("<br>"+
text4.slice(0,6))




