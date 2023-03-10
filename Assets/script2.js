const timerEl = document.querySelector(".timer-text");
const startButton = document.querySelector(".start-button");
const questionEl = document.querySelector(".quiz-area");
const myInitials = document.querySelector(".initVal");
const highScoresTxt = document.querySelector(".high-scores");

let timer;
let timerCount = 75;
let highScore = 0;

let quizQuestions = [
  {
    question: "Commonly used data types do NOT include______. ",
    answers: ["strings", "booleans", "alerts", "numbers"],
    correct: "alerts",
  },

  {
    question: "The condition in an if-else statement is enclosed with______.",
    answers: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    correct: "parenthesis",
  },

  {
    question: "Arrays in JavaScript can be used to store_______.",
    answers: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    correct: "all of the above",
  },

  {
    question:
      "String values must be enclosed within___when being assigned to a variable.",
    answers: ["commas", "curly brackets", "quotes", "parenthesis"],
    correct: "quotes",
  },

  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: ["JavaScript", "terminal/bash", "for loops", "console log"],
    correct: "console log",
  },
];

function startGame() {
  startButton.disabled = true;
  startTimer();
  poseQuestions();
}

//random  question generator

function poseQuestions() {
  let currentQuestion = "";

  for (let index = 0; index < quizQuestions.length; index++) {
    const random = Math.floor(Math.random() * quizQuestions.length);
    let randomQuestion = quizQuestions[random];
    currentQuestion = randomQuestion;
  }

  const theQuestion = document.createElement("div");
  questionEl.append(theQuestion);
  questionEl.className = "theQuestion";
  questionEl.innerHTML = currentQuestion.question;

  const answers = document.createElement("div");
  questionEl.append(answers);
  answers.className = "theAnswers";

  //buttons for asnwers

  let button1 = document.createElement("button");
  button1.className = "btn1";
  answers.append(button1);
  button1.innerText = "1. " + currentQuestion.answers[0];

  let button2 = document.createElement("button");
  button2.className = "btn2";
  answers.append(button2);
  button2.innerText = "2. " + currentQuestion.answers[1];

  let button3 = document.createElement("button");
  button3.className = "btn3";
  answers.append(button3);
  button3.innerText = "3. " + currentQuestion.answers[2];

  let button4 = document.createElement("button");
  button4.className = "btn4";
  answers.append(button4);
  button4.innerText = "4. " + currentQuestion.answers[3];

  button1.onclick = function () {
    if (currentQuestion.answers[0] == currentQuestion.correct) {
      correctAnswer();
    } else {
      wrongAnswer();
    }
  };

  button2.onclick = function () {
    if (currentQuestion.answers[1] == currentQuestion.correct) {
      correctAnswer();
    } else {
      wrongAnswer();
    }
  };

  button3.onclick = function () {
    if (currentQuestion.answers[2] == currentQuestion.correct) {
      correctAnswer();
    } else {
      wrongAnswer();
    }
  };

  button4.onclick = function () {
    if (currentQuestion.answers[3] == currentQuestion.correct) {
      correctAnswer();
    } else {
      wrongAnswer();
    }
  };

  //wrong answer function!

  function wrongAnswer() {
    let wrongMsg = document.querySelector(".theAnswers");
    wrongMsg.setAttribute(
      "style",
      "font-size:120px; color:red; border-top: red solid 4px; margin-top: 30px;"
    );
    wrongMsg.innerText = "Wrong!";
    timerCount = timerCount - 10;
    setTimeout(() => {
      poseQuestions();
    }, 550);
  }

  //correct answer function!

  function correctAnswer() {
    let correctMsg = document.querySelector(".theAnswers");
    correctMsg.setAttribute(
      "style",
      "font-size:120px; color:green; border-top: green solid 4px; margin-top: 30px"
    );
    correctMsg.innerText = "Correct!";
    highScore++;
    setTimeout(() => {
      poseQuestions();
    }, 550);
  }

  if (timerCount <= 0) {
    clearInterval(timer);
    endGame();
  }
}

//The timer

function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerEl.textContent = timerCount;
    if (timerCount <= 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);
}

//end of game page

function endGame() {
  let initText = "";
  timerEl.innerHTML = 0;
  questionEl.innerHTML = "";

  const theQuestion = document.createElement("div");
  questionEl.append(theQuestion);
  theQuestion.className = "theQuestion";
  theQuestion.textContent = "All done, thanks for playing!!";

  const enterInitMsg = document.createElement("div");
  theQuestion.append(enterInitMsg);
  enterInitMsg.className = "enterInitMsg";
  enterInitMsg.textContent = "Your final score is: " + highScore;

  const enterInit = document.createElement("form");
  theQuestion.append(enterInit);
  enterInit.className = "initials-form";

  const initBox = document.createElement("label");
  enterInit.append(initBox);
  initBox.className = "initBox";
  initBox.textContent = "Enter your initials: ";

  const initVal = document.createElement("input");
  initBox.append(initVal);
  initBox.className = "initVal";

  const submitInit = document.createElement("button");
  initBox.append(submitInit);
  submitInit.className = "submitButton";
  submitInit.textContent = "Submit";

  const initList = document.createElement("ul");
  theQuestion.append(initList);
  initList.className = "initial-list";

  //submit initials button

  submitInit.addEventListener("click", function (event) {
    event.preventDefault();
    let theQuestion = document.querySelector(".theQuestion");
    initList.textContent = initVal.value.trim() + " High Score = " + highScore;
    initList.setAttribute("style", "font-size: 16px;");
  });
}

//start button event and high scores link
startButton.addEventListener("click", startGame);
highScoresTxt.addEventListener("click", endGame);
