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
      "It cannot be seen, cannot be felt,\n\nCannot be heard, cannot be smelt.\n\nIt lies behind stars and under hills,\n\nAnd empty holes it fills. It comes first and follows after,\n\nEnds life, kills laughter.",
    answer: "dark",
  },
];
function next() {
  if (statements.length < 1) {
  var r = confirm("Huzzah! The ring is destroyed and Middle Earth is saved!\n\nWould you like to play again?");
  if (r == true) {
    location.reload();
  return false;
  } 
  return
  }

  // lose the game after 5 wrong answers
  if (numWrong > 4) {
    let r = confirm("Unfortunately, you have fallen into a deep chasm.\n\n Play again to slay the Balrog and save Middle Earth.");
    if (r == true) {
    location.reload();
    return false;
    } 
    return;
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
    response = "Correct! Click here to answer next question.";
    responseColor = "yellow";
    numRight++;
  } else {
    // this is the wrong condition
    response = "Oops, that wasn't quite right. Click here and try another!";
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
  bg = loadImage("LOTR-background.jpg");
  createCanvas(windowWidth, windowHeight);
  heading = createElement("h1", ["LOTR Riddle Quiz"]);
  heading.position(100, 25);
  questionInput = createInput("");
  questionInput.size(550);
  questionInput.position(100, 375);
  questionInput.placeholder = "new text for email";
  submitAnswerButton = createButton("submit answer");
  submitAnswerButton.size(250);
  submitAnswerButton.mousePressed(checkQuestion);
  submitAnswerButton.position(100, 475);
  restartButton = createButton("restart");
  restartButton.size(250);
  restartButton.mousePressed(restartQuiz);
  restartButton.position(400, 475);
}
function draw() {
  background(bg);
  background("rgba(25, 25, 0, 0.85)");
  fill("white");
  textSize(20);
  text(message, 100, 125);
  fill(responseColor);
  text(response, 125, 415);
  fill("#fff");
  text(numRight + " / 6 correct", 100, 575);
  text([5 - numWrong] + " chances remaining", 460, 575);
}
