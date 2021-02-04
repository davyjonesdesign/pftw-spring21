function setup() {
  createCanvas(200, 200);
  noLoop();
}

function createTile() {
  translate(0, 0);
  fill(77, 118, 111);
  noStroke();
  rect(0, 0, 200, 200);

  // squares
  var hi = 140;
  var mid = 100;
  var low = 60;
  var x = 0;
  var y = 0;

  // squares - greenLight
  fill(116, 141, 112);
  beginShape();
  vertex(mid + x, low + y);
  vertex(hi + x, mid + y);
  vertex(mid + x, hi + y);
  vertex(low + x, mid + y);
  vertex(mid + x, low + y);
  endShape();

  var x = 100;
  beginShape();
  vertex(mid + x, low + y);
  vertex(mid + x, hi + y);
  vertex(low + x, mid + y);
  vertex(mid + x, low + y);
  endShape();

  var x = -100;
  beginShape();
  vertex(mid + x, low + y);
  vertex(hi + x, mid + y);
  vertex(mid + x, hi + y);
  vertex(mid + x, low + y);
  endShape();

  var x = 0;
  var y = 100;
  beginShape();
  vertex(mid + x, low + y);
  vertex(hi + x, mid + y);
  vertex(low + x, mid + y);
  vertex(mid + x, low + y);
  endShape();

  var y = -100;
  beginShape();
  vertex(hi + x, mid + y);
  vertex(mid + x, hi + y);
  vertex(low + x, mid + y);
  vertex(hi + x, mid + y);
  endShape();

  //corners
  var x = -100;
  beginShape();
  vertex(hi + x, mid + y);
  vertex(mid + x, hi + y);
  vertex(mid + x, mid + y);
  vertex(hi + x, mid + y);
  endShape();

  var x = 100;
  beginShape();
  vertex(mid + x, mid + y);
  vertex(mid + x, hi + y);
  vertex(low + x, mid + y);
  vertex(mid + x, mid + y);
  endShape();

  var y = 100;
  beginShape();
  vertex(mid + x, low + y);
  vertex(mid + x, mid + y);
  vertex(low + x, mid + y);
  vertex(mid + x, low + y);
  endShape();

  var x = -100;
  beginShape();
  vertex(mid + x, low + y);
  vertex(hi + x, mid + y);
  vertex(mid + x, mid + y);
  vertex(mid + x, low + y);
  endShape();

  // squares red
  low = low + 20;
  hi = hi - 20;
  var x = 0;
  var y = 0;
  fill(133, 30, 23);
  beginShape();
  vertex(mid + x, low + y);
  vertex(hi + x, mid + y);
  vertex(mid + x, hi + y);
  vertex(low + x, mid + y);
  endShape();

  var x = 100;
  beginShape();
  vertex(mid + x, low + y);
  vertex(mid + x, hi + y);
  vertex(low + x, mid + y);
  vertex(mid + x, low + y);
  endShape();

  var x = -100;
  beginShape();
  vertex(mid + x, low + y);
  vertex(hi + x, mid + y);
  vertex(mid + x, hi + y);
  vertex(mid + x, low + y);
  endShape();

  var x = 0;
  var y = 100;
  beginShape();
  vertex(mid + x, low + y);
  vertex(hi + x, mid + y);
  vertex(low + x, mid + y);
  vertex(mid + x, low + y);
  endShape();

  var y = -100;
  beginShape();
  vertex(hi + x, mid + y);
  vertex(mid + x, hi + y);
  vertex(low + x, mid + y);
  vertex(hi + x, mid + y);
  endShape();

  //corners
  var x = -100;
  beginShape();
  vertex(hi + x, mid + y);
  vertex(mid + x, hi + y);
  vertex(mid + x, mid + y);
  vertex(hi + x, mid + y);
  endShape();

  var x = 100;
  beginShape();
  vertex(mid + x, mid + y);
  vertex(mid + x, hi + y);
  vertex(low + x, mid + y);
  vertex(mid + x, mid + y);
  endShape();

  var y = 100;
  beginShape();
  vertex(mid + x, low + y);
  vertex(mid + x, mid + y);
  vertex(low + x, mid + y);
  vertex(mid + x, low + y);
  endShape();

  var x = -100;
  beginShape();
  vertex(mid + x, low + y);
  vertex(hi + x, mid + y);
  vertex(mid + x, mid + y);
  vertex(mid + x, low + y);
  endShape();

  // hexagons
  noStroke();
  fill(198, 141, 41);
  var sm = 20;
  var md = 40;
  var lg = 60;
  var xl = 80;
  var x = 0;
  var y = 0;

  beginShape();
  vertex(md + x, sm + y);
  vertex(lg + x, sm + y);
  vertex(xl + x, md + y);
  vertex(xl + x, lg + y);
  vertex(lg + x, xl + y);
  vertex(md + x, xl + y);
  vertex(sm + x, lg + y);
  vertex(sm + x, md + y);
  vertex(md + x, sm + y);
  endShape();

  var x = 100;
  beginShape();
  vertex(md + x, sm + y);
  vertex(lg + x, sm + y);
  vertex(xl + x, md + y);
  vertex(xl + x, lg + y);
  vertex(lg + x, xl + y);
  vertex(md + x, xl + y);
  vertex(sm + x, lg + y);
  vertex(sm + x, md + y);
  vertex(md + x, sm + y);
  endShape();

  var y = 100;
  beginShape();
  vertex(md + x, sm + y);
  vertex(lg + x, sm + y);
  vertex(xl + x, md + y);
  vertex(xl + x, lg + y);
  vertex(lg + x, xl + y);
  vertex(md + x, xl + y);
  vertex(sm + x, lg + y);
  vertex(sm + x, md + y);
  vertex(md + x, sm + y);
  endShape();

  var x = 0;
  beginShape();
  vertex(md + x, sm + y);
  vertex(lg + x, sm + y);
  vertex(xl + x, md + y);
  vertex(xl + x, lg + y);
  vertex(lg + x, xl + y);
  vertex(md + x, xl + y);
  vertex(sm + x, lg + y);
  vertex(sm + x, md + y);
  vertex(md + x, sm + y);
  endShape();

  // circles
  var lo = 35;
  var mid = 50;
  var hi = 65;
  var x = 0;
  var y = 0;
  fill(133, 30, 23);
  ellipse(mid + x, mid + y, 40);
  fill(198, 141, 41);
  beginShape();
  vertex(mid + x, lo + y);
  vertex(hi + x, mid + y);
  vertex(mid + x, hi + y);
  vertex(lo + x, mid + y);
  vertex(mid + x, lo + y);
  endShape();

  y = 100;
  fill(133, 30, 23);
  ellipse(mid + x, mid + y, 40);
  fill(198, 141, 41);
  beginShape();
  vertex(mid + x, lo + y);
  vertex(hi + x, mid + y);
  vertex(mid + x, hi + y);
  vertex(lo + x, mid + y);
  vertex(mid + x, lo + y);
  endShape();

  x = 100;
  fill(133, 30, 23);
  ellipse(mid + x, mid + y, 40);
  fill(198, 141, 41);
  beginShape();
  vertex(mid + x, lo + y);
  vertex(hi + x, mid + y);
  vertex(mid + x, hi + y);
  vertex(lo + x, mid + y);
  vertex(mid + x, lo + y);
  endShape();

  y = 0;
  fill(133, 30, 23);
  ellipse(mid + x, mid + y, 40);
  fill(198, 141, 41);
  beginShape();
  vertex(mid + x, lo + y);
  vertex(hi + x, mid + y);
  vertex(mid + x, hi + y);
  vertex(lo + x, mid + y);
  vertex(mid + x, lo + y);
  endShape();

  // perpendicular lines
  stroke(198, 141, 41);
  strokeWeight(0.25);
  line(0, 20, 180, 200)
  line(0, 40, 160, 200)
  line(0, 60, 140, 200)
  line(0, 80, 120, 200)
  line(0, 120, 80, 200)
  line(0, 140, 60, 200)
  line(0, 160, 40, 200)
  line(0, 180, 20, 200)
  line(20, 0, 200, 180)
  line(40, 0, 200, 160)
  line(60, 0, 200, 140)
  line(80, 0, 200, 120)
  line(120, 0, 200, 80)
  line(140, 0, 200, 60)
  line(160, 0, 200, 40)
  line(180, 0, 200, 20)
  // diagonal lines
  line(0, 20, 20, 0)
  line(0, 40, 40, 0)
  line(0, 60, 60, 0)
  line(0, 80, 80, 0)
  line(0, 120, 120, 0)
  line(0, 140, 140, 0)
  line(0, 160, 160, 0)
  line(0, 180, 180, 0)
  line(20, 200, 200, 20)
  line(40, 200, 200, 40)
  line(60, 200, 200, 60)
  line(80, 200, 200, 80)
  line(120, 200, 200, 120)
  line(140, 200, 200, 140)
  line(160, 200, 200, 160)
  line(180, 200, 200, 180)

  // thick lines
  stroke(116, 141, 112);
  strokeWeight(2);
  line(0, 200, 200, 0);
  line(100, 200, 200, 100);
  line(0, 100, 100, 0);
  line(0, 0, 200, 200);
  line(100, 0, 200, 100);
  line(0, 100, 100, 200);

  stroke(77, 118, 111);
  strokeWeight(4);
  for (var k = 0; k <= 200; k += 100) {
    line(k, 0, k, 200);
    line(0, k, 200, k);
  }
}

function draw() {
  createTile();
}
