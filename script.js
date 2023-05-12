//operators
//Arithematic operators

var a = 10;
var b = 5;

document.write(a + b);
document.write("<br>");
document.write(a * b);
document.write("<br>");
document.write(a - b);
document.write("<br>");
document.write(a / b);
document.write("<br>");
document.write(a % b);
document.write("<br>");
a++;
document.write(a);

document.write("<br>");

//exponentional operators

document.write(10 ** 2); //square
document.write("<br>");
document.write(10 ** 3); //cube
document.write("<br>");
document.write("<br>");

//assignment operators
document.write("assignment operators");
var x = 10;
document.write("<br>");
document.write(x);
document.write("<br>" + "add and assign");
var result = (x += 4);
document.write("<br>");
document.write(result);

document.write("<br>" + "subtract and assign");
var result = (x -= 4);
document.write("<br>" + result);

document.write("<br>" + "multiply and assign");
var result = (x *= 4);
document.write("<br>" + result);

document.write("<br>" + "division and assign");
var result = (x /= 4);
document.write("<br>" + result);

document.write("<br>" + "MOdulus and assign");
var result = (x %= 4);
document.write("<br>" + result + "<br>");


//comparison operators

var a = 10
var b = 20
document.write("<br>" + "equal to operator"+ "<br>");
document.write(a == b)


var x = "10"
var y = 10
document.write("<br>" + "also check datatype"+ "<br>");
document.write(x === y)//false because both variable are different datatype


var j = 10
var k = 10
document.write("<br>" + "not equal to operator"+ "<br>");
document.write(j != k)//false

document.write("<br> <br> <br> logical operator")

//logical operator

var g = 10
var h = 12

var c = 10
var d = 10

document.write("<br>" + "AND operator"+ "<br>");
document.write(g == h && c == d)

document.write("<br>" + "OR operator"+ "<br>");
document.write(g == h || c == d)


document.write("<br>" + "NOT operator"+ "<br>");
document.write(!(c == d))




