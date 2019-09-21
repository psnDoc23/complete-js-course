/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, prevRoll;

init();

gamePlaying = true;  

dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);

document.querySelector('#current-0').textContent = dice;
// could be used to add html tags (not .textContent)
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// getter:
var x = document.querySelector('#score-0').textContent; // READ in the value of the elemnt score 0

// change CSS with querySelector
// hide the die at the beginning




// or could use ananymous function:
document.querySelector('.btn-roll').addEventListener('click', function() {
  if(gamePlaying) {
      // 1. Random number
      var dice1 = Math.floor(Math.random() * 6) + 1; // dice is local to the function now, removed from above
      var dice2 = Math.floor(Math.random() * 6) + 1; // dice is local to the function now, removed from above
      
      //2. Display the result
      //var diceDOM = document.querySelector('.dice');
      document.getElementById('dice-1').style.display = 'block';
      document.getElementById('dice-2').style.display = 'block';
      document.getElementById('dice-1').src = 'dice' + dice1 + '.png';
      document.getElementById('dice-2').src = 'dice' + dice2 + '.png';

      diceDOM.style.display = 'block';
      diceDOM.src = 'dice-' + dice + '.png'; // src (like html tag) 
      

      //3. Update the round score IF the rolled number was NOT a 1
      if(dice === 6 && prevRoll === 6) {
          scores[activePlayer] = 0; // player loses score
          document.querySelector('#score-' + activePlayer).textContent = '0';
          nextPlayer();
      }
      else if (dice !== 1) {
          //Add score
          roundScore += dice1 + dice2;
          document.querySelector('#current-' + activePlayer).textContent = roundScore;
      } else {
          // next player
          nextPlayer(); // DRY principle
      }
      prevRoll = dice;
  }    
});


document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying) {
        // Add CURRENT score to global score
        scores[activePlayer] += roundScore;
        

        // Update UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        var input = document.querySelector('.final-score').value;
        var winningScore;

        // Undefined, 0, null or "" are COERCED to false
        // Anything else is COERCED to true
        if(input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }

        // Check if the player won the game
        if (scores[activePlayer] >= winningScore) {
            // console.log("Player " + (activePlayer + 1) + " won!");
            document.querySelector('#name-' + activePlayer).textContent = "Winner!";
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';

            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false; // set state variable
        } else {
            nextPlayer(); // DRY principle
        }
    }

});


function nextPlayer() {
    //Next player
    // toggle the active player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    // worked, but he liked toggle better... see below...
    //document.querySelector('.player-0-panel').classList.remove('active'); //querySelctor b/c it's a class
    //document.querySelector('.player-1-panel').classList.add('active');
    
    // or could do
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}


document.querySelector('.btn-new').addEventListener('click', init); // don't use () b/c we don't want to call it, but to pass it

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true; // start game

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';


    // set all four to zeroes 
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // change names back from winner to player x
    document.getElementById('name-0').textContent = 'Player-1'; // originally used querySelector! WHAT'S THE DIFFERENCE?
    document.getElementById('name-1').textContent = 'Player-2';

    // remove the winner class from BOTH players regardless of who was the winner
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');


}



/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that,
 it's the next player's turn. (Hint: Always save the previous dice roll in a
     separate variable)
2. Add an input field to the HTML where players can set the winning score, so
 that they can change the predefined score of 100. (Hint: you can read that value 
with the .value property in JavaScript. This is a good oportunity to use google to
 figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses
 his current score when one of them is a 1. (Hint: you will need CSS to position the
 second dice, so take a look at the CSS code for the first one.)
*/
