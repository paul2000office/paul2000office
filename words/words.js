const words = ["engine","Linked In","login","hello","Java Script","Amsterdam","123"];
var text = words.sort()
.filter(word => word.charAt(0) >= "A" && word.charAt(0) <= "Z")
.join("<br/>");

document.getElementById("words").innerHTML = text;