let _x = 100;
let _y = 200;
let _r = 30;
let bubbleArray = [];
function setup () {
  createCanvas(600, 400);
    for (let i = 0; i < 6; i++) {
      const bubble = new Bubble(_x, _y, _r);
      bubbleArray.push(bubble);
      _x += 75;
  }
}

function draw () {
  background(0);
  for (let k = 0; k < 6; k++) {
    bubbleArray[k].move();
    bubbleArray[k].show();
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
