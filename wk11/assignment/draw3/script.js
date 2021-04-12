let r, g, b, x, y;

function setup () {
  createCanvas(600, 600);
  background(10);
}

function draw () {
  if (mouseIsPressed === true) {
    mousePressed();
  }
}

function mousePressed () {
  r = random(255);
  g = random(255);
  b = random(255);
  x = random(600);
  y = random(600);
  stroke(r, g, b);
  line(mouseX, mouseY, x, y);
}
