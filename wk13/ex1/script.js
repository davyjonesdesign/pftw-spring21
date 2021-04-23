var slider;
var slider2;
var pos;

function setup () {
  createCanvas(500, 500);
  noStroke();
  angleMode(DEGREES);
  slider = createSlider(0, 5, 3);
  slider2 = createSlider(0, 5, 3);

  pos = 0.0;
  inc = 1.0;

  pos2 = 0.0;
  inc2 = 5.0;
}

function draw () {
  clear();

  background(25, 50, 125);
  translate(width / 2, height / 2);

  var mySinVal = sin(pos);
  var mySinVal2 = sin(pos2);
  amplified = mySinVal * 500;
  amplified2 = mySinVal2 * 500;

  for (i = 255; i >= 0; i = x - 50) {
    for (x = 800; x >= 0; x = x - 200) {
      fill(x / 3.5, x / 2, i, 90);
      stroke(255, 255, 255, 50);
      strokeWeight(2);
      ellipse(0, 0, amplified + x, amplified2 + x);
    }
  }
  pos = pos + slider.value();
  pos2 = pos2 + slider2.value();
}
