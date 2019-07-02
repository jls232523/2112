/***
Joshua Silverio Lexi Garrabrant
CSc 337
Final Project
Description: js code for webpage called Typer's Kitchen that lets the user
learn how to type in a fun way.
***/

(function() {
  "use strict";

  /*** on load for browser opening***/
  window.onload = function() {
    document.getElementById("button").onclick = speak;
  };
function speak(){
  let dictUrl = "https://localhost:3000";
  fetch(dictUrl)//book url request
  .then(checkStatus)
  .then(function(responseText) {
    let json = JSON.parse(responseText);
    for(let i = 0; i < json.dictionary.length; i++){
      unusedWords.push(json.dictionary[i].word);
    }
  })
  .catch(function(error) {
    console.log(error);
  });
  responsiveVoice.speak("hello world", "UK English Male");
}
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response.text();
  } else {
    return Promise.reject(response.status);
  }
}
      })();
