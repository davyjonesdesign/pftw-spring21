const DOWN = 'down';
const UP = 'up';
let startingX = 50;
let startingY = 100;
const cards = [];
const gameState = {
  totalPairs: 9,
  flippedCards: [],
  numMatched: 0,
  attempts: 0,
  waiting: false
};
function setup () {
  createCanvas(825, 625);
  let selectedFaces = [];
  for (let z = 0; z < 9; z++) {
    const randomIdx = floor(random(cardfaceArray.length))
    const face = cardfaceArray[randomIdx];
    selectedFaces.push(face);
    selectedFaces.push(face);
    // remove the used cardface so it doesn't get selected again
    cardfaceArray.splice(randomIdx, 1);
  }
  selectedFaces = shuffleArray(selectedFaces);
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 6; i++) {
      const cardFaceImg = selectedFaces.pop();
      cards.push(new Card(startingX, startingY, cardFaceImg));
      startingX += 125;
    }
    startingY += 150;
    startingX = 50;
  }
};
let cardfaceArray = [];

// card back preloader
// let cardBack;
function preload () {
  // cardBack = loadImage('img/card-back.png');
  cardfaceArray = [
    loadImage('img/blue.png'),
    loadImage('img/boophis.png'),
    loadImage('img/costaRica.png'),
    loadImage('img/funny.png'),
    loadImage('img/horned.png'),
    loadImage('img/killer.png'),
    loadImage('img/leaf.png'),
    loadImage('img/poison.png'),
    loadImage('img/red.png')
  ]
}

function draw () {
  background(8, 8, 75);
  if (gameState.numMatched === gameState.totalPairs) {
    fill('paleGreen');
    strokeWeight(0);
    textSize(66);
    text('you win!!!', 500, 590);
    noLoop();
  }
  for (let l = 0; l < cards.length; l++) {
    if (!cards[l].isMatch) {
      cards[l].face = DOWN;
    }
    cards[l].show();
  }
  noLoop();
  gameState.flippedCards.length = 0;
  gameState.waiting = false;
  fill('mediumPurple');
  textSize(24);
  stroke(0)
  text('attempts: ' + gameState.attempts, 250, 575);
  fill(255);
  text('/', 205, 575);
  fill('darkTurquoise');
  text('matches: ' + gameState.numMatched, 50, 575);
  fill('PaleGreen');
  textSize(40);
  text('Frog Memory Game', 50, 65);
}

function mousePressed () {
  if (gameState.waiting) {
    return;
  }
  for (let k = 0; k < cards.length; k++) {
    // first check flipped cards length, and then we can trigger the flip
    if (gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
      console.log('flipped', cards[k]);
      gameState.flippedCards.push(cards[k]);
    }
  }
  if (gameState.flippedCards.length === 2) {
    gameState.attempts++;
    if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
      // cards match! Time to score!
      // mark cards as matched so they don't flip back
      gameState.flippedCards[0].isMatch = true;
      gameState.flippedCards[1].isMatch = true;
      // empty the flipped cards array
      gameState.flippedCards.length = 0;
      // increment the score
      gameState.numMatched++;
      // loop occurs again
      loop();
    } else {
      gameState.waiting = true;
      const loopTimeout = window.setTimeout(() => {
        loop();
        window.clearTimeout(loopTimeout);
      }, 1000)
    }
  }
}

class Card {
  constructor (x, y, cardFaceImg) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 125;
    this.face = DOWN;
    this.cardFaceImg = cardFaceImg;
    this.isMatch = false;
    this.show();
  }

  show () {
    if (this.face === UP || this.isMatch) {
      fill('MediumPurple');
      stroke('mediumPurple');
      strokeWeight(4);
      rect(this.x, this.y, this.width, this.height, 10);
      // cardBack Image
      image(this.cardFaceImg, this.x, this.y)
    } else {
      // card back
      fill('midnightblue');
      stroke('MediumPurple');
      strokeWeight(4);
      rect(this.x, this.y, this.width, this.height, 10);
      stroke('MediumPurple');
      fill('indigo');
      rect(this.x + 12, this.y + 12, this.width - 24, this.height - 24, 5);
      noFill();
      strokeWeight(2);
      stroke('PaleGreen');
      ellipse(
        this.x + this.width / 2,
        this.y + this.height / 2,
        this.width - 28,
        this.height / 2
      );
      ellipse(
        this.x + this.width / 2,
        this.y + this.height / 2,
        this.width / 2,
        this.height - 28
      );
      stroke('darkturquoise');
      quad(
        this.x + this.width / 2,
        this.y + 15,
        this.x + this.width - 15,
        this.y + this.height / 2,
        this.x + this.width / 2,
        this.y + this.height - 15,
        this.x + 15,
        this.y + this.height / 2
      );
      quad(
        this.x + this.width / 2,
        this.y + 35,
        this.x + this.width - 15,
        this.y + this.height / 2,
        this.x + this.width / 2,
        this.y + this.height - 35,
        this.x + 15,
        this.y + this.height / 2
      );
      // middle circle
      stroke('mediumPurple');
      fill('midnightBlue');
      strokeWeight(3);
      ellipse(this.x + this.width / 2, this.y + this.height / 2, 28);
      strokeWeight(2);
      stroke('paleGreen');
      line(
        this.x + this.width / 2 + 5,
        this.y + this.height / 2 + 5,
        this.x + this.width / 2 - 5,
        this.y + this.height / 2 - 5
      );
      line(
        this.x + this.width / 2 + 5,
        this.y + this.height / 2 - 5,
        this.x + this.width / 2 - 5,
        this.y + this.height / 2 + 5
      );
      stroke('mediumTurquoise');
      strokeWeight(2);
      line(
        this.x + this.width / 2,
        this.y + this.height / 2 + 7,
        this.x + this.width / 2,
        this.y + this.height / 2 - 7
      );
      line(
        this.x + this.width / 2 + 7,
        this.y + this.height / 2,
        this.x + this.width / 2 - 7,
        this.y + this.height / 2
      );
      // corner circles
      stroke('mediumPurple');
      strokeWeight(3);
      fill('midnightBlue');
      ellipse(this.x + 10, this.y + 10, 20);
      ellipse(this.x + this.width - 10, this.y + 10, 20);
      ellipse(this.x + this.width - 10, this.y + this.height - 10, 20);
      ellipse(this.x + 10, this.y + this.height - 10, 20);
      // diagonal lines
      strokeWeight(1);
      stroke('paleGreen');
      // top-left
      line(this.x + 6, this.y + 6, this.x + 14, this.y + 14);
      line(this.x + 14, this.y + 6, this.x + 6, this.y + 14);
      // top-right
      line(
        this.x + this.width - 6,
        this.y + 6,
        this.x + this.width - 14,
        this.y + 14
      );
      line(
        this.x + this.width - 14,
        this.y + 6,
        this.x + this.width - 6,
        this.y + 14
      );
      // bottom-right
      line(
        this.x + this.width - 6,
        this.y + this.height - 6,
        this.x + this.width - 14,
        this.y + this.height - 14
      );
      line(
        this.x + this.width - 14,
        this.y + this.height - 6,
        this.x + this.width - 6,
        this.y + this.height - 14
      );
      // bottom-left
      line(
        this.x + 6,
        this.y + this.height - 6,
        this.x + 14,
        this.y + this.height - 14
      );
      line(
        this.x + 14,
        this.y + this.height - 6,
        this.x + 6,
        this.y + this.height - 14
      );
      // perpendicular lines
      stroke('mediumTurquoise');
      strokeWeight(1);
      // top-left
      line(this.x + 5, this.y + 10, this.x + 15, this.y + 10);
      line(this.x + 10, this.y + 5, this.x + 10, this.y + 15);
      // top-right
      line(
        this.x + this.width - 10,
        this.y + 5,
        this.x + this.width - 10,
        this.y + 15
      );
      line(
        this.x + this.width - 15,
        this.y + 10,
        this.x + this.width - 5,
        this.y + 10
      );
      // bottom-right
      line(
        this.x + this.width - 15,
        this.y + this.height - 10,
        this.x + this.width - 5,
        this.y + this.height - 10
      );
      line(
        this.x + this.width - 10,
        this.y + this.height - 5,
        this.x + this.width - 10,
        this.y + this.height - 15
      );
      // bottom-left
      line(
        this.x + 5,
        this.y + this.height - 10,
        this.x + 15,
        this.y + this.height - 10
      );
      line(
        this.x + 10,
        this.y + this.height - 5,
        this.x + 10,
        this.y + this.height - 15
      );
      // cardBack Image
      // image(cardBack, this.x - 15, this.y - 15)
    }
  }

  didHit (mouseX, mouseY) {
    if (
      mouseX >= this.x &&
      mouseX <= this.x + this.width &&
      mouseY >= this.y &&
      mouseY <= this.y + this.height
    ) {
      this.flip();
      return true;
    } else {
      return false;
    }
  }

  flip () {
    if (this.face === DOWN) {
      this.face = UP;
    } else {
      this.face = DOWN;
    }
    this.show();
  }
}
function shuffleArray (array) {
  let counter = array.length;
  while (counter > 0) {
    // Pick random index
    const idx = Math.floor(Math.random() * counter);
    // decrease counter by 1 (decrement)
    counter--;
    // swap the last element with it
    const temp = array[counter];
    array[counter] = array[idx];
    array[idx] = temp;
  }
  return array;
}
