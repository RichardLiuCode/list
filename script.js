import { removeItem, getHTMlList } from "./list.js"
var list = [];
document.getElementById("addItem").addEventListener("click", function () {
    var inputItem = document.getElementById("input1").value;
    if (inputItem != "") {
        list.push(inputItem);
        document.getElementById("display").innerHTML = (getHTMlList(list))
    } else {

    }

})
