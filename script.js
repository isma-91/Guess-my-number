'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');

let eleNumber = document.querySelector('.number');
let message = document.querySelector('.message');
let secretNumber = Math.trunc(Math.random() * 20) + 1; // Numero random tra 1 e 20
let score = 20;
let highScore = 0;
let eleHighScore = document.querySelector('.highscore');
let eleScore = document.querySelector('.score');
let eleInput = document.querySelector('.guess');

// esempio di utilizzo di una funzione al posto delle variabili per stampare in pagina
/*
function displayMessage(message){
  document.querySelector('.message').textContent = message;
}
// poi nell'if, ad esempio, dove non viene inserito nessun valore:
displayMessage('⛔ No Number'); // al posto di: message.textContent = '⛔ No Number';
*/

btnCheck.addEventListener('click', function () {
  const guess = Number(eleInput.value);

  if (!guess) {
    message.textContent = '⛔ No Number';
  } else if (guess > score) {
    message.textContent = `⛔ Number must be beetween 1 and ${score}`;
  } else if (guess === secretNumber) {
    message.textContent = '🎉 Correct Number!';
    eleNumber.textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      eleHighScore.textContent = highScore;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    eleNumber.style.width = '30rem';
  } else if (guess !== secretNumber) {
    if (score > 1) {
      message.textContent =
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      score--;
      eleScore.textContent = score;
    } else {
      message.textContent = '🧨 You lost the game!';
      eleScore.textContent = 0;
    }
  }
});

btnAgain.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  message.textContent = 'Start guessing...';
  eleScore.textContent = score;
  eleNumber.textContent = '?';
  eleInput.value = null;

  document.querySelector('body').style.backgroundColor = '#222';
  eleNumber.style.width = '15rem';
});
