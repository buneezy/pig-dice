//Business Logic

function Player(turnScore, totalScore) {
  this.turnScore = turnScore;
  this.totalScore = totalScore
  // this.sum = 0;
  // this.i = 0;
}

Player.prototype.rollDie = function(){
  // var rollNumber = 0;
debugger;
  var rollNumber = Math.floor((Math.random() * 6) + 1);
  var diceArray = [];

  if (rollNumber !== 1){
    diceArray.push(rollNumber);
  } else{
    rollNumber = "You rolled a 1";
    diceArray = 0;
  }

  this.turnScore = diceArray;
  return rollNumber;
  console.log(rollNumber);

  console.log(diceArray);

};

Player.prototype.addTurnScore = function(){
  // var rollNumber = 0;

  for (var i = 0, sum = 0; i < this.turnScore.length; sum += this.turnScore[i++]);
    // console.log(sum);
    return sum;
};




// Player.prototype.hold = function() {
//   this.score += this.turnScore
//   this.turnScore = 0;
// }
//
// Player.prototype.newTurn = function() {
//   this.turnScore = 0;
// };
//
// Player.prototype.scoreCheck = function() {
//   if(this.score >= 100){
//     return "Win";
//   };
// };
//
// Player.prototype.newGame = function(){
//   this.turnScore = 0;
//   this.score = 0;
// }


//User Interface
$(document).ready(function() {
  $("#names").submit(function(event) {
    event.preventDefault();

    var player1Input = $('input#player1name').val();
    var player2Input = $('input#player2name').val();
    $(".player1Input").text(player1Input);
    $(".player2Input").text(player2Input);

    $("#names").hide();
    $("#game").show();

  });

    $("#play-one").click(function() {
          // debugger;
      var player1 = new Player(0, 0);
      var player2 = new Player(0, 0);

      var player1Dice = player1.rollDie();
      var player1TurnScore = player1.addTurnScore();
      $("#player1Roll").text(player1Dice);
      $("#player1Score").text(player1TurnScore);
      // $("#player-1-total-score").text(player1.score);


  });
});
