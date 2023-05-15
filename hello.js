var a = document.getElementById("sample")

console.log(a);

a.innerHTML = "Learn JavaScript"

a.style.color = "blue"

var b = document.getElementsByClassName("sample2")

b[0].innerHTML = "Good Morning"

b[0].style.color = "green"

var c = document.getElementsByTagName("p")

c[0].style.color = "orange"


var heading = document.createElement("h1")

function create(){
    heading.innerHTML = "Hello world"
    document.body.appendChild(heading)
}

function remove()
{
    heading.remove()
}

var headingevent = document.getElementById("eventh1");
var btn = document.getElementById("btn")

btn.addEventListener("click",changeColor)

function changeColor(){
    headingevent.style.color = "red";
}
headingevent.addEventListener("mouseover",changeBg)

function changeBg(){
    headingevent.style.backgroundColor = "yellow";
}
headingevent.addEventListener("mouseleave",rmBg)

function rmBg(){
    headingevent.style.backgroundColor = "white";
}