let bubble;
function setup () {
  createCanvas(600, 400);
  bubble = new Bubble(200, 300, 20);
}

function draw () {
  background(0);
  for (let k = 0; k < 6; k++) {
    bubble.move();
    bubble.show();
  }
}

class Bubble {
  constructor (_x, _y, _r) {
    this.x = _x;
    this.y = _y;
    this.width = _r;
    this.height = _r;
    this.show();
    this.move();
  }

  move () {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show () {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.width);
  }
}
