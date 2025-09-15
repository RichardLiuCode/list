import { getHTMLList } from "./list.js"
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
    var deleteItem = filterHTML(document.getElementById("input1").value);
    for (var i = 0; i < list.length; i = i + 1) {
        if (list[i] == deleteItem) {
            list.splice(i, 1)
            document.getElementById("display").innerHTML = getHTMlList(list)
        }
    }
})

document.getElementById("searchButton").addEventListener("click", function () {

    document.getElementById("display").innerHTML = ""
    var resultContainer = document.createElement("ul")
    var targetItem = document.getElementById("input1").value;
    for (var i = 0; i < list.length; i = i + 1) {
        if (list[i].includes(targetItem)) {
            var result = document.createElement("li")
            result.innerHTML = filterHTML(list[i]);
            resultContainer.appendChild(result);
        }
    }
    document.getElementById("display").appendChild(resultContainer);
})
