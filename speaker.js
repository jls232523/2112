/***
Joshua Silverio Lexi Garrabrant
CSc 337
Final Project
Description: js code for webpage called Typer's Kitchen that lets the user
learn how to type in a fun way.
***/

(function() {
  "use strict";
let word = "josh";
  /*** on load for browser opening***/
  window.onload = function() {
    document.getElementById("button").onclick = speak;
    document.getElementById("spell").onclick = spell;
    document.getElementById("show").onclick = show;
  };
function show(){
  document.getElementById("word").innerHTML = word;

}
function spell(){
  for(let i=0; i<word.length;i++){
    responsiveVoice.speak(word[i], "US English Female");
    setTimeout(function () {

    }, 150);
  }
}
function speak(){
  document.getElementById("word").innerHTML = "";
  let dictUrl = "https://lj2112.herokuapp.com/?mode=user";
  fetch(dictUrl)//book url request
  .then(checkStatus)
  .then(function(responseText) {
    word = responseText;
    responsiveVoice.speak(word, "US English Female");
  })
  .catch(function(error) {
    console.log(error);
  });
}
function checkStatus(response) {
  console.log(response);
  if (response.status >= 200 && response.status < 300) {
    return response.text();
  } else {
    return Promise.reject(response.status);
  }
}
      })();
