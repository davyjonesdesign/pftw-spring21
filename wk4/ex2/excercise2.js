// Help Text
// select empy div and assign it to a variable
const helpTextDiv = document.querySelector('#helpTextDiv');
// put an h1 inside of it
// create a new element
const heading = document.createElement('h1');
heading.innerHTML =
  'Click on the moving square as many times as you can before it leaves the screen';
heading.style.color = 40;
helpTextDiv.appendChild(heading);

// Click counter
let rectX = 0;
const rectHeight = 75;
let rectY;
const rectWidth = 75;
let clickCount = 0;
let speed;
function setup () {
  createCanvas(500, 500);
  rectY = random(height - rectHeight);
  speed = random(1, 4);
}

function draw () {
  background(40);
  drawShape();
  rectX += speed;
  if (rectX > width) {
    noLoop();
    text('Your score was ' + clickCount, 100, 300);
  }
}

function mousePressed () {
  if (
    mouseX >= rectX &&
    mouseX <= rectX + rectWidth &&
    mouseY >= rectY &&
    mouseY <= rectY + rectHeight
  ) {
    clickCount++;
    console.log('hit', clickCount);
  }
}

function drawShape () {
  fill('lavender');
  rect(rectX, rectY, 75, 75);
}
