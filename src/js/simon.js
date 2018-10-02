// Business Logic
export function SimonGame() {
  this.simonPattern = [];
  this.playerPattern = [];
}

SimonGame.prototype.play = function() {
  var simonRandomCurrentChoice = Math.floor((Math.random() * 4) + 1);
  if(simonRandomCurrentChoice == 1) {
    this.simonPattern.push("green");
  } else if(simonRandomCurrentChoice == 2) {
    this.simonPattern.push("red");
  } else if(simonRandomCurrentChoice == 3) {
    this.simonPattern.push("yellow");
  } else {
    this.simonPattern.push("blue");
  }
};
