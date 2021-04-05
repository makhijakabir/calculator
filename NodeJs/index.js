const fs = require("fs");
/*This is the syntax to include the file system.
The file system is used to play around with the files*/

// fs.copyFileSync("file1.txt", "file2.txt"); //This just copies the files from one location to another!

const superheroes = require('superheroes');

var myHero = superheroes.random();
console.log(myHero);