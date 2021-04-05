var arr = [];
$(document).keypress(function(arr) {
    $("#level-title").text("LEVEL " + 1);
    var number = Math.floor(Math.random() * 4);
    var buttons = ["green", "red", "yellow", "blue"];
    var randomClick = "#" + buttons[number];
    $(randomClick).fadeOut(100).fadeIn(100);
    var Aud = new Audio(buttons[number] + ".mp3");
    Aud.play();
});