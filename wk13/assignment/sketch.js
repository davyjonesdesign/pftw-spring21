var inc = 0.1;
var scl = 20;
var cols, rows;

var zoff = 0;

var fr;

var particles = [];

var flowfield = [];

function setup () {
  createCanvas(800, 600, Path2D);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP();

  flowfield = new Array(cols * rows);

  for (var i = 0; i < 2500; i++) {
    particles[i] = new Particle();
  }

  background(210, 161, 140);
}

function draw () {
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = (x + y * cols);
      flowfield[index] = v;
      var angle = noise(xoff, yoff, zoff) * sin(inc) * 30;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      xoff += sin(inc);
    }
    yoff += sin(inc);
    zoff += 0.0003;
  }
  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }
}

function mousePressed() {
  clear();
  background(random(100, 210), random(50, 160), random(30, 140));
}

