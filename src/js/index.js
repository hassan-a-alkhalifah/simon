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
    newGame.playerPattern.push("green");
    console.log(newGame);
  });
  $("#red-btn").click(function() {
    newGame.playerPattern.push("red");
    console.log(newGame);
  });
  $("#yellow-btn").click(function() {
    newGame.playerPattern.push("yellow");
    console.log(newGame);
  });
  $("#blue-btn").click(function() {
    newGame.playerPattern.push("blue");
    console.log(newGame);
  });
});
