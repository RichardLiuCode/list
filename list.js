export function getHTMlList(InputList) {
    var htmlList = ""
    for (var i = 0; i < InputList.length; i = i + 1) {
        while (InputList[i].includes("<")) {
            InputList[i] = InputList[i].replace("<", "&lt");
        }
        while (InputList[i].includes(">")) {
            InputList[i] = InputList[i].replace(">", "&gt");
        }
        htmlList = htmlList + "<li>" + InputList[i] + "</li>";
    }
    return "<ul>" + htmlList + "</ul>"
}
