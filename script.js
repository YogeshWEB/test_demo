console.log("Hello World")
const root=document.getElementById("root")
const para= document.createElement("p");
const text1= document.createTextNode("Hello This is JS")
const btn = document.createElement("button")
const btntext = document.createTextNode("small")


para.appendChild(text1)
root.appendChild(para)
btn.appendChild(btntext)
root.appendChild(btn)
para.classList.add("pclass")
function small(){
    
    para.classList.remove("pclass")
}
btn.setAttribute("onclick","small()")