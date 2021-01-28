var members = document.getElementById("p1").innerHTML;
var membersArray;
var spans;
document.getElementById("p1").innerHTML = "";
string_to_array = function (str) {
    return str.trim().split(", ");
};
membersArray = string_to_array(members);
for(var i=0;i<membersArray.length;i++){
    var node = document.createElement("span");
    var textnode;
    if (membersArray.length -1 != i) {
        textnode = document.createTextNode(membersArray[i].trim() + ", ");
    }
    else {
        textnode = document.createTextNode(membersArray[i].trim())
    }
    node.appendChild(textnode);
    document.getElementById("p1").appendChild(node);
}
spans = document.getElementsByTagName("span");
for(var i=0;i<spans.length;i++){
    document.getElementsByTagName("h1")[0].style.textShadow = "rgb(025, 025, 025) -4px 1px 4px, rgba(025, 025, 025, 0.9) 3px -9px 9px, rgba(025, 025, 025, 0.9) 3px 1px 3px";
    document.getElementsByTagName("h1")[0].style.color = "white";
    document.getElementsByTagName("h1")[0].style.fontFamily = "Arial";
    document.getElementsByTagName("h1")[0].style.fontSize = "44px";
    spans[i].style.textShadow = "rgb(025, 025, 025) -4px 1px 4px, rgba(025, 025, 025, 0.9) 3px -9px 9px, rgba(025, 025, 025, 0.9) 3px 1px 3px";
    spans[i].style.cursor = "pointer";
    spans[i].style.color = "white";
    spans[i].style.fontFamily = "Arial";
    spans[i].style.fontSize = "40px";
    spans[i].addEventListener("click", function(e) {
        if(e.target.className.indexOf("inactive") > -1){
            e.target.className = "";
            e.target.style.opacity = "1";
        } else {
            e.target.className = "inactive";
            e.target.style.opacity = "0.3";
        }
    });
}
document.body.style.padding = "20% 100px";
document.body.style.background = "url('https://media.giphy.com/media/gen0pz7WHRGbyFYtkK/giphy.gif')";
document.body.style.backgroundSize = "cover";
