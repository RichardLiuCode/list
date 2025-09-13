import {removeItem} from "./list.js"
var list=[];
document.getElementById("addItem").addEventListener("click",function(){
list.push(document.getElementById("input1").value)
document.getElementById("display").innerHTML=list
})