
let fs = require("fs");
const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.static('public'));
console.log('web service started');
app.use(function(req, res, next) {//for posts
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers",
              "Origin, X-Requested-With, Content-Type, Accept");
});
app.get('/', function (req, res) {
	res.header("Access-Control-Allow-Origin", "*");
let file = fs.readFileSync("names/names.txt", 'utf8');
let rLines = file.split("\n");
let rand = MATH.random() * rLines.length;
console.log(rand);
for(let i=0; i<rLines.length;i++){

}
}
app.listen(3000);
