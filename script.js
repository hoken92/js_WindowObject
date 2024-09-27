// Window asking user a guessing game

// DOM elements
const divEl = document.getElementById("app");
const bodyEl = document.body;

// Random number
const number = Math.floor(Math.random() * 5).toString();

// Game Round number
let count = 0;

// Loops the guess the number game 3 times
function loopGuessNumber() {
  // Pops a modal for user to guess the number
  let userInput = prompt("What number am I thinking of from 0 to 5?");

  // If the number is correct, exits the game and shows the answer
  if (userInput === number) {
    bodyEl.style.backgroundColor = "green";
    bodyEl.textContent = `You got it right! The number was ${number}`;
    return;
  } else if (userInput > number) {
    bodyEl.style.backgroundColor = "red";
    bodyEl.textContent = `Your number is too high. Try again.
                            You have ${2 - count} rounds left.`;
  } else {
    bodyEl.style.backgroundColor = "red";
    bodyEl.textContent = `Your number is too low. Try again. 
                            You have ${2 - count} rounds left.`;
  }

  // increase the game round count by 1
  count++;

  // If count is less than 3, delay the next round by 2 seconds
  if (count < 3) {
    setTimeout(loopGuessNumber, 2000);
  }

  // If count is = 3, game over
  if (count === 3) {
    bodyEl.textContent = `Game over. The number was ${number}`;
  }
}

loopGuessNumber();
