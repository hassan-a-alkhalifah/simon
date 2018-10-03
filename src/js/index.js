import './../scss/styles.scss';
import $ from 'jquery';
import {SimonGame} from './simon.js';
import { play } from './simon.js';

// UI Logic
$(document).ready(function(){
  var newGame = new SimonGame();
  $("#logo").click(function() {
    newGame.play();
    console.log(newGame);
  });
  $("#green-btn").click(function() {
    if(newGame.simonPattern.length > 0) {
      newGame.playerPattern.push("green");
      newGame.compare();
      console.log(newGame);
    }
  });
  $("#red-btn").click(function() {
    if(newGame.simonPattern.length > 0) {
      newGame.playerPattern.push("red");
      newGame.compare();
      console.log(newGame);
    }
  });
  $("#yellow-btn").click(function() {
    if(newGame.simonPattern.length > 0) {
      newGame.playerPattern.push("yellow");
      newGame.compare();
      console.log(newGame);
    }
  });
  $("#blue-btn").click(function() {
    if(newGame.simonPattern.length > 0) {
      newGame.playerPattern.push("blue");
      newGame.compare();
      console.log(newGame);
    }
  });
});
