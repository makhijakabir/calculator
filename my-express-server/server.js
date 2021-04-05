const express = require("express");
const app = express();

app.get("/", function(request, response) {
    response.send("HEY! I am the server speaking!");
});

app.listen(3000, function() {
    console.log("HEY! I am the server speaking!");
});