var valueX;
var valueY;
function Particle () {
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxspeed = 3.5;

  this.prevPos = this.pos.copy();

  this.update = function () {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  };

  this.follow = function (vectors) {
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var index = x + y * cols;
    var force = vectors[index];
    this.applyForce(force);
  };

  this.applyForce = function (force) {
    this.acc.add(force);
  };

  this.show = function () {
    for (var i = 0; i < 3; i++) {
      strokeWeight(1.5);
      stroke(41, 31, 43, 15);
      // Fill color according to mouseClicked()
      stroke(random(20, 60), random(10, 50), random(20, 60), 15);
    }
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    this.updatePrev();
  };

  this.updatePrev = function () {
    this.prevPos.y = this.pos.y;
    this.prevPos.x = this.pos.x;
  };

  this.edges = function () {
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
      this.updatePrev();
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.updatePrev();
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
      this.updatePrev();
    }
  };
}
