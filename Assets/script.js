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
  "Commonly used data types do NOT include______. ",
  "The condition in an if-else statement is enclosed with______.",
  "Arrays in JavaScript can be used to store_______.",
  "String values must be enclosed within___when being assigned to a variable.",
  "A very useful tool used during development and debugging for printing content to the debugger is:",
];
let question1Answers = ["strings", "booleans", "alerts", "numbers"];
let question2Answers = [
  "quotes",
  "curly brackets",
  "parenthesis",
  "square brackets",
];
let question3Answers = [
  "numbers and strings",
  "other arrays",
  "booleans",
  "all of the above",
];
let question4Answers = ["commas", "curly brakcets", "quotes", "parenthesis"];
let question5Answers = [
  "JavaScript",
  "terminal/bash",
  "for loops",
  "console log",
];

function startGame() {
  startButton.disabled = true;
  startTimer();
  poseQuestion1();
}

function poseQuestion1() {
  questionEl.setAttribute(
    "style",
    "font-size:35px; text-align:left; font-weight:bold;"
  );
  questionEl.innerHTML = "";

  const theQuestion = document.createElement("div");
  questionEl.append(theQuestion);
  theQuestion.className = "theQuestion";
  theQuestion.textContent = questions[0];

  const answers = document.createElement("div");
  questionEl.append(answers);
  answers.className = "theAnswers";

  const answerOne = document.createElement("button");
  answers.append(answerOne);
  answerOne.className = "firstAnswer";
  answerOne.innerText = "1. " + question1Answers[0];

  const answerTwo = document.createElement("button");
  answers.append(answerTwo);
  answerTwo.className = "secondAnswer";
  answerTwo.innerText = "2. " + question1Answers[1];

  const answerThree = document.createElement("button");
  answers.append(answerThree);
  answerThree.className = "thirdAnswer";
  answerThree.innerText = "3. " + question1Answers[2];

  const answerFour = document.createElement("button");
  answers.append(answerFour);
  answerFour.className = "fourthAnswer";
  answerFour.innerText = "4. " + question1Answers[3];

  const button1 = document.querySelector(".firstAnswer");
  button1.addEventListener("click", function () {
    alert("try again!");
  });

  const button2 = document.querySelector(".secondAnswer");
  button2.addEventListener("click", function () {
    alert("try again!");
  });

  const button3 = document.querySelector(".thirdAnswer");
  button3.addEventListener("click", poseQuestion2)

  const button4 = document.querySelector(".fourthAnswer");
  button4.addEventListener("click", function () {
    alert("try again!");
  });
}

function poseQuestion2 (){
  questionEl.innerHTML = "";

  const theQuestion = document.createElement("div");
  questionEl.append(theQuestion);
  theQuestion.className = "theQuestion";
  theQuestion.textContent = questions[1];
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
