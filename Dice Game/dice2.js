var i = Math.floor((Math.random() * 6) + 1);
while (i <= 6) {
    document.getElementById("img1").src = "images/dice" + i + ".png ";
    break;
}
var j = Math.floor((Math.random() * 6) + 1);
while (j <= 6) {
    document.getElementById("img2").src = "images/dice" + j + ".png ";
    break;
}
if (i > j) {
    document.getElementById("caption").innerHTML = "Player 1 Wins!";
} else {
    document.getElementById("caption").innerHTML = "Player 2 Wins!";
}