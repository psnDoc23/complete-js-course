/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

document.querySelector('#current-0').textContent = dice;
// could be used to add html tags (not .textContent)
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// getter:
var x = document.querySelector('#score-0').textContent; // READ in the value of the elemnt score 0

// change CSS with querySelector
// hide the die at the beginning
document.querySelector('.dice').style.display = 'none';

/*
function btn() {
    // Do something here

}
document.querySelector('.btn-roll').addEventListener('click', btn)  // note btn, NOT but() b/c we want it to be a callback as part of the listner, not something we call when the button is clicked
*/


// or could use ananymous function:
document.querySelector('.btn-roll').addEventListener('click', function() {
  if(gamePlaying) {
      // 1. Random number
      var dice = Math.floor(Math.random() * 6) + 1;

      //2. Display the result
      var diceDOM = document.querySelector('.dice');
      diceDOM.style.display = 'block';
      diceDOM.src = 'dice-' + dice + '.png';


      //3. Update the round score IF the rolled number was NOT a 1
      if (dice !== 1) {
          //Add score
          roundScore += dice;
          document.querySelector('#current-' + activePlayer).textContent = roundScore;
      } else {
          //Next player
          nextPlayer();
      }
  }    
});





