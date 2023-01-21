//Create start quiz function
//Create timer interval
//Create each question as a function include buttons and listeners, if thens, display & count correct v false. Move on to next question.
//Display final score, create enter initials form

const timerEl = document.querySelector(".timer-text");
const startButton = document.querySelector(".start-button");
const questionEl = document.querySelector(".quiz-area");

const highScore = "";
const myInitials = "";
let timer;
let timerCount = 75;
let questions = [
  "Commonly used data types do NOT include______ ",
  "The condition in an if-else statement is enclosed with______",
  "Arrays in JavaScript can be used to store_______",
];

function startGame() {
  startButton.disabled = true;
  startTimer();
  poseQuestion();
}

function poseQuestion() {
  questionEl.setAttribute(
    "style",
    "font-size:35px; text-align:left; font-weight:bold;"
  );
  questionEl.innerHTML = "";

  const theQuestion = document.createElement("div");
  questionEl.append(theQuestion);
  theQuestion.className = "theQuestion";
  theQuestion.textContent = "The condition in an if-else statement is enclosed with______";

  const answers = document.createElement("div");
  questionEl.append(answers);
  answers.className = "theAnswers";

  const answerOne = document.createElement("button");
  answers.append(answerOne);
  answerOne.innerText = "Answer1";


  const answerTwo = document.createElement("button");
  answers.append(answerTwo);
  answerTwo.innerText = "Answer2";


  const answerThree = document.createElement("button");
  answers.append(answerThree);
  answerThree.innerText = "Answer3";


  const answerFour = document.createElement("button");
  answers.append(answerFour);
  answerFour.innerText = "Answer4";
}

function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerEl.textContent = timerCount;

    if (timerCount === 0) {
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}

startButton.addEventListener("click", startGame);
