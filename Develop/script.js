//Create start quiz function
//Create timer interval
//Create each question as a function include buttons and listeners, if thens, display & count correct v false. Move on to next question.
//Display final score, create enter initials form

const timerEl = document.querySelector(".timer-text");
const startButton = document.querySelector(".start-button");

const highScore = "";
const myInitials = "";
let timer;
let timerCount = 75;

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerEl.textContent = timerCount;
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }

  startButton.addEventListener("click", startTimer);