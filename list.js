export function getHTMlList(InputList) {
    var htmlList = ""
    for (var i = 0; i < InputList.length; i = i + 1) {
        htmlList = htmlList + "<li>" + InputList[i] + "</li>";
    }
    return "<ul>" + htmlList + "</ul>"
}
export function removeItem() {
    console.log("function embeded")
}
