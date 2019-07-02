"use strict";
const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.static('public'));
console.log('web service started');

app.get('/', function (req, res) {
res.header("Access-Control-Allow-Origin", "*");
let mode = req.query.mode;
console.log(mode);
let file = fs.readFileSync("names.txt", 'utf8');
let rLines = file.split("\n");
let rand = Math.floor(Math.random() * rLines.length);
console.log(rand);
let name = rLines[rand].split(",")[0];
let x = rand;
res.send(name);
});
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));
}
app.get('*',(req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
app.listen(process.env.PORT);
