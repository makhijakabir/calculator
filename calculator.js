const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ entended: true }));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("The result is: " + result);
});

app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmi_cal.html");
});

app.post("/bmicalculator", function(req, res) {
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);
    var result = weight / (height * height);
    res.send("YOut BMI is: " + result);
});

app.listen(3000, function() {
    console.log("Hey! I am the Server Speaking!");
});