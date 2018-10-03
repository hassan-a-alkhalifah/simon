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

SimonGame.prototype.compare = function() {
  if(this.simonPattern.length > 0) {
    for(var i = 0; i < this.playerPattern.length; i ++) {
      if(this.playerPattern[i] === this.simonPattern[i] && this.playerPattern.length === this.simonPattern.length) {
        console.log("next round");
        this.playerPattern = [];
        this.play();
        return;
      } else if(this.playerPattern[i] !== this.simonPattern[i]) {
        console.log("LOSE");
        this.simonPattern = [];
        this.playerPattern = [];
        return;
      }
      console.log("continue");
    }
  }
};
