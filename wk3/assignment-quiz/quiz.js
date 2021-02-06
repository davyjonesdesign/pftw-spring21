let questionInput;
let currentQuestion;
let response;
let responseColor = "green";
let heading;
let numWrong = Number(0);
let numRight = Number(0);
let statements = [
  {
    question:
      "What has roots as nobody seees,\n\nIs taller than trees,\n\nUp, up it goes,\n\nAnd yet never grows?",
    answer: "a mountain",
  },
  {
    question:
      "Thirty white horses on a red hill,\n\nFirst they champ,\n\nThen they stamp,\n\nThen they stand still.",
    answer: "teeth",
  },
  {
    question:
      "Voiceless it cries,\n\nWingless flutters,\n\nToothless bites,\n\nMouthless mutters.",
    answer: "wind",
  },
  {
    question:
      "A box without hinges, key, or lid,\n\nYet golden treasure inside is hid.",
    answer: "an egg",
  },
  {
    question:
      "Alive without breath,\n\nAs cold as death;\n\nNever thirsty, ever drinking,\n\nAll in mail never clinking.",
    answer: "fish",
  },
  {
    question:
      "It cannot be seen, cannot be felt,\n\nCannot be heard, cannot be smelt.\n\nIt lies behind stars and under hills,\n\nAnd empty holes it fills.\n\nIt comes first and follows after,\n\nEnds life, kills laughter.",
    answer: "dark",
  },
];
function next() {
  if (statements.length < 1) {
    alert("you won");
    return;
  }

// lose the game after 5 wrong answers
  if (numWrong > 4) {
    alert("Sorry, but you have reached your limit of 5 wrong answers. You lose!");
    return;
    response = ""
  }
  const randomIndex = Math.ceil(Math.random() * statements.length - 1);
  return statements[randomIndex];
}

// answer checker and remover
function checkQuestion() {
  if (currentQuestion.answer === questionInput.value()) {
    // remove correct answer from array
    statements = statements.filter((statementObj) => {
      return currentQuestion.answer != statementObj.answer;
    });
    // this is the correct condition
    response = "correct! next question";
    responseColor = "green";
    numRight++;
  } else {
    // this is the wrong condition
    response = "oops, that wasn't quite right. Try another!";
    responseColor = "red";
    numWrong++;
  }
  currentQuestion = next();
  questionInput.value("");
  if (currentQuestion) {
    message = currentQuestion.question;
  }
}

//restart the quiz
function restartQuiz() {
    // add back array
    location.reload();
return false;

}


currentQuestion = next();
let message = currentQuestion.question;
function setup() {
  createCanvas(800, 800);
  heading = createElement("h1", ["LOTR Riddle Quiz"]);
  heading.position(100, 100);
  questionInput = createInput("");
  questionInput.size(250, 24);
  questionInput.position(500, 150);
  submitAnswerButton = createButton("submit answer");
  submitAnswerButton.size(250, 24);
  submitAnswerButton.mousePressed(checkQuestion);
  submitAnswerButton.position(500, 200);
  restartButton = createButton("restart");
  restartButton.size(250, 24);
  restartButton.mousePressed(restartQuiz);
  restartButton.position(500, 225);

}
function draw() {
  background("pink");
  fill("purple");
  textSize(24);
  text(message, 100, 200);
  fill(responseColor);
  text(response, 500, 300);
  text(5 - numWrong + ' chances left', 500, 350);
}
