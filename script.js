"use strict"

let container=document.createElement("div");
container.setAttribute("id","container");

let container1=document.createElement("div");
container1.setAttribute("id","container1");

let btn1=document.createElement("button");
btn1.setAttribute("id","btn1");
btn1.innerText="Open Model";

let h1=document.createElement("h1")
h1.setAttribute("id","content");
h1.innerText="Model Project";

let container2=document.createElement("div")
container2.setAttribute("id","container2")

let span=document.createElement("span")
span.setAttribute("class","close");
span.innerText="X";

let para=document.createElement("p")
para.setAttribute("class","content")
para.innerText="Model content"

container.append(container1)
container1.append(h1,btn1)
container2.append(span,para)
document.body.append(container,container2)

let Model1=document.getElementById("container2")
let Model=document.getElementById("container1")

btn1.onclick = function() {
    Model.style.display = "none";
    Model1.style.display="block";
    container.classList.add('opacityClass')
    // container.style.backgroundColor="#2dcde2";
    // container.style.opacity=0.4;
  }

span.onclick = function() {
    Model.style.display ="block";
    Model1.style.display="none"
    container.classList.remove('opacityClass')
    // container.style.backgroundColor=""
    // container.style.opacity="";
  }
 