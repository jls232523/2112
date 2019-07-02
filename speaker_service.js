"use strict";
const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.static('public'));
console.log('web service started');

app.get('', function (req, res) {
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
app.listen(process.env.PORT);
