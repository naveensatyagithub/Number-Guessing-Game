let numberToGuess = Math.floor(Math.random() * 100) + 1;
let attempts = 7;

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  const feedback = document.getElementById("feedback");
  const attemptsText = document.getElementById("attemptsLeft");
  const resetBtn = document.getElementById("resetBtn");

  if (isNaN(guess) || guess < 1 || guess > 100) {
    feedback.textContent = "Please enter a number between 1 and 100.";
    feedback.style.color = "red";
    return;
  }

  attempts--;

  if (guess === numberToGuess) {
    feedback.textContent = `🎉 Correct! The number was ${numberToGuess}.`;
    feedback.style.color = "green";
    document.getElementById("guessInput").disabled = true;
    resetBtn.style.display = "inline-block";
  } else if (guess < numberToGuess) {
    feedback.textContent = "Too low!";
    feedback.style.color = "#555";
  } else {
    feedback.textContent = "Too high!";
    feedback.style.color = "#555";
  }

  if (attempts > 0 && guess !== numberToGuess) {
    attemptsText.textContent = `Attempts remaining: ${attempts}`;
  } else if (attempts === 0 && guess !== numberToGuess) {
    feedback.textContent = `😢 Out of attempts. The number was ${numberToGuess}.`;
    feedback.style.color = "red";
    document.getElementById("guessInput").disabled = true;
    resetBtn.style.display = "inline-block";
    attemptsText.textContent = "";
  }
}

function resetGame() {
  numberToGuess = Math.floor(Math.random() * 100) + 1;
  attempts = 7;
  document.getElementById("guessInput").disabled = false;
  document.getElementById("guessInput").value = '';
  document.getElementById("feedback").textContent = '';
  document.getElementById("attemptsLeft").textContent = '';
  document.getElementById("resetBtn").style.display = "none";
}

