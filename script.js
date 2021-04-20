  //
  // var dice = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
  //
  // var randomDice1 = dice[Math.floor(Math.random() * dice.length)];
  // var randomDice2 = dice[Math.floor(Math.random() * dice.length)];
  //
  //
  //
  //   document.querySelector(".img1").setAttribute("src", randomDice1);
  //   document.querySelector(".img2").setAttribute("src", randomDice2);
  //   var player1 = dice.indexOf(randomDice1) + 1;
  //   var player2 = dice.indexOf(randomDice2) + 1;
  //
  //
  //
  //   if(randomDice1 > randomDice2) {
  //     document.querySelector("h1").innerHTML = "Player 1 win!";
  //   } else {
  //     document.querySelector("h1").innerHTML = "Player 2 win!";
  //   }
  //
  //   if(randomDice1 === randomDice2) {
  //     document.querySelector("h1").innerHTML = "Remis!";
  //   }


var randomDice1 = Math.floor((Math.random() * 6) + 1);
var dice1 = "images/dice" + randomDice1 + ".png";
var randomDice2 = Math.floor((Math.random() * 6) + 1);
var dice2 = "images/dice" + randomDice2 + ".png";

document.querySelector(".img1").setAttribute("src", dice1);
document.querySelector(".img2").setAttribute("src", dice2);

if (randomDice1 > randomDice2) {
  document.querySelector("h1").innerHTML = "🏆 Player 1 Wins!";
} else if (randomDice1 < randomDice2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆 ";
} else if (randomDice1 === randomDice2){
document.querySelector("h1").innerHTML = "Draw!";
}
