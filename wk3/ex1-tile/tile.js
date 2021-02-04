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
  endShape();

  var x = 100;
  beginShape();
  vertex(mid + x, low + y);
  vertex(hi + x, mid + y);
  vertex(mid + x, hi + y);
  vertex(low + x, mid + y);
  endShape();

  var x = -100;
  beginShape();
  vertex(mid + x, low + y);
  vertex(hi + x, mid + y);
  vertex(mid + x, hi + y);
  vertex(low + x, mid + y);
  endShape();

  var x = 0;
  var y = 100;
  beginShape();
  vertex(mid + x, low + y);
  vertex(hi + x, mid + y);
  vertex(mid + x, hi + y);
  vertex(low + x, mid + y);
  endShape();

  var y = -100;
  beginShape();
  vertex(mid + x, low + y);
  vertex(hi + x, mid + y);
  vertex(mid + x, hi + y);
  vertex(low + x, mid + y);
  endShape();

  //corners
  var x = -100;
  beginShape();
  vertex(mid + x, low + y);
  vertex(hi + x, mid + y);
  vertex(mid + x, hi + y);
  vertex(low + x, mid + y);
  endShape();

  var x = 100;
  beginShape();
  vertex(mid + x, low + y);
  vertex(hi + x, mid + y);
  vertex(mid + x, hi + y);
  vertex(low + x, mid + y);
  endShape();

  var y = 100;
  beginShape();
  vertex(mid + x, low + y);
  vertex(hi + x, mid + y);
  vertex(mid + x, hi + y);
  vertex(low + x, mid + y);
  endShape();

  var x = -100;
  beginShape();
  vertex(mid + x, low + y);
  vertex(hi + x, mid + y);
  vertex(mid + x, hi + y);
  vertex(low + x, mid + y);
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
  vertex(hi + x, mid + y);
  vertex(mid + x, hi + y);
  vertex(low + x, mid + y);
  endShape();

  var x = -100;
  beginShape();
  vertex(mid + x, low + y);
  vertex(hi + x, mid + y);
  vertex(mid + x, hi + y);
  vertex(low + x, mid + y);
  endShape();

  var x = 0;
  var y = 100;
  beginShape();
  vertex(mid + x, low + y);
  vertex(hi + x, mid + y);
  vertex(mid + x, hi + y);
  vertex(low + x, mid + y);
  endShape();

  var y = -100;
  beginShape();
  vertex(mid + x, low + y);
  vertex(hi + x, mid + y);
  vertex(mid + x, hi + y);
  vertex(low + x, mid + y);
  endShape();

  //corners
  var x = -100;
  beginShape();
  vertex(mid + x, low + y);
  vertex(hi + x, mid + y);
  vertex(mid + x, hi + y);
  vertex(low + x, mid + y);
  endShape();

  var x = 100;
  beginShape();
  vertex(mid + x, low + y);
  vertex(hi + x, mid + y);
  vertex(mid + x, hi + y);
  vertex(low + x, mid + y);
  endShape();

  var y = 100;
  beginShape();
  vertex(mid + x, low + y);
  vertex(hi + x, mid + y);
  vertex(mid + x, hi + y);
  vertex(low + x, mid + y);
  endShape();

  var x = -100;
  beginShape();
  vertex(mid + x, low + y);
  vertex(hi + x, mid + y);
  vertex(mid + x, hi + y);
  vertex(low + x, mid + y);
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
  for (var i = 0; i <= 200; i += 20) {
    line(0, i, 200, i);
    line(i, 0, i, 200);
  }

  // diagonal lines
  for (var j = -180; j <= 180; j += 20) {
    line(j, 200, j + 200, 0);
    line(0, j, 200, j + 200);
  }

  // thick lines

  stroke(116, 141, 112);
  strokeWeight(2);
  for (var l = -200; l <= 400; l += 100) {
    line(l, 200, l + 200, 0);
    line(0, l, 200, l + 200);
  }
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
