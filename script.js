var person = "John";
var person2 = "smith";

document.write(person);
document.write("<br>");
document.write(typeof person);

//number

var num1 = 10;
var num2 = 20.34;

document.write("<br>");
document.write(num1);
document.write("<br>");
document.write(typeof num1);

//Boolean

var js = true;
var html = false;

//undefined

var test1;

document.write("<br>");
document.write(test1);
document.write("<br>");
document.write(typeof test1);

//null
var test2 = null;

//controll statemnts

var k = 10;

if (k > 0) {
  document.write("<br>" + "positive number");
} else if (k < 0) {
  document.write("<br>" + "Negative number");
} else {
  document.write("<br>" + "Zero");
}

document.write("<br>" + "Switch statement"+"<br>");

var a = "C";

switch (a) {
  case "A":
    document.write("Apple");
    break;
  case "B":
    document.write("Bat");
    break;
  case "C":
    document.write("cat");
    break;
  default:
    document.write("Invalid entry");
}


//loops

//for loop

for(var i=1;i<=5;i++)
{
    document.write("<br>"+i+"<br>")
}

//while loop

var j= 10;
while(j>=1)
{
    document.write("<br>"+j+"<br>")
    j--;
}

var l=1
do{
  document.write("<br>"+l+"<br>")
  l++
}while(l<=10)