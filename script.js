import { getHTMlList } from "./list.js"
import { filterHTML } from "https://richardliucode.github.io/richardcode/RichardJS/xssFilterModule.js"
var list = [];
document.getElementById("addItem").addEventListener("click", function () {
    var inputItem = filterHTML(document.getElementById("input1").value);
    if (inputItem != "") {
        list.push(inputItem);
        document.getElementById("display").innerHTML = getHTMlList(list)
    }
})
document.getElementById("deletebutton").addEventListener("click", function () {
    var deleteItem = document.getElementById("input1").value;
    for (var i = 0; i < list.length; i = i + 1) {
        if (list[i] == deleteItem) {
            list.splice(i, 1)
            document.getElementById("display").innerHTML = getHTMlList(list)
        }
    }
})
