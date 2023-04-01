console.log("Hello World")
const root=document.getElementById("root")
const para= document.createElement("p");
const text1= document.createTextNode("Hello This is JS")
para.appendChild(text1)
root.appendChild(para)
para.classList.add("pclass")