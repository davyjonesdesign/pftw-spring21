function setup() {
  createCanvas(616, 616);
}

function createTile(
  originX,
  originY,
  backColor,
  bigSquareColor,
  smallSquareColor,
  hexagonColor,
  circleColor,
  gridColor,
  xColor,
  boxColor
) {
  translate(originX, originY);
  fill(backColor);
  noStroke();
  rect(0, 0, 200, 200);

  // squares
  var hi = 140;
  var mid = 100;
  var low = 60;
  var x = 0;
  var y = 0;

  fill(bigSquareColor);
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

  // small squares
  low = low + 20;
  hi = hi - 20;
  var x = 0;
  var y = 0;
  fill(smallSquareColor);
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
  fill(hexagonColor);
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
  fill(circleColor);
  ellipse(mid + x, mid + y, 40);
  fill(smallSquareColor);
  beginShape();
  vertex(mid + x, lo + y);
  vertex(hi + x, mid + y);
  vertex(mid + x, hi + y);
  vertex(lo + x, mid + y);
  vertex(mid + x, lo + y);
  endShape();

  y = 100;
  fill(circleColor);
  ellipse(mid + x, mid + y, 40);
  fill(smallSquareColor);
  beginShape();
  vertex(mid + x, lo + y);
  vertex(hi + x, mid + y);
  vertex(mid + x, hi + y);
  vertex(lo + x, mid + y);
  vertex(mid + x, lo + y);
  endShape();

  x = 100;
  fill(circleColor);
  ellipse(mid + x, mid + y, 40);
  fill(smallSquareColor);
  beginShape();
  vertex(mid + x, lo + y);
  vertex(hi + x, mid + y);
  vertex(mid + x, hi + y);
  vertex(lo + x, mid + y);
  vertex(mid + x, lo + y);
  endShape();

  y = 0;
  fill(circleColor);
  ellipse(mid + x, mid + y, 40);
  fill(smallSquareColor);
  beginShape();
  vertex(mid + x, lo + y);
  vertex(hi + x, mid + y);
  vertex(mid + x, hi + y);
  vertex(lo + x, mid + y);
  vertex(mid + x, lo + y);
  endShape();

  // perpendicular lines
  stroke(gridColor);
  strokeWeight(0.25);
  line(0, 20, 180, 200);
  line(0, 40, 160, 200);
  line(0, 60, 140, 200);
  line(0, 80, 120, 200);
  line(0, 120, 80, 200);
  line(0, 140, 60, 200);
  line(0, 160, 40, 200);
  line(0, 180, 20, 200);
  line(20, 0, 200, 180);
  line(40, 0, 200, 160);
  line(60, 0, 200, 140);
  line(80, 0, 200, 120);
  line(120, 0, 200, 80);
  line(140, 0, 200, 60);
  line(160, 0, 200, 40);
  line(180, 0, 200, 20);
  // diagonal lines
  line(0, 20, 20, 0);
  line(0, 40, 40, 0);
  line(0, 60, 60, 0);
  line(0, 80, 80, 0);
  line(0, 120, 120, 0);
  line(0, 140, 140, 0);
  line(0, 160, 160, 0);
  line(0, 180, 180, 0);
  line(20, 200, 200, 20);
  line(40, 200, 200, 40);
  line(60, 200, 200, 60);
  line(80, 200, 200, 80);
  line(120, 200, 200, 120);
  line(140, 200, 200, 140);
  line(160, 200, 200, 160);
  line(180, 200, 200, 180);

  // X's
  stroke(xColor);
  strokeWeight(2);
  line(0, 200, 200, 0);
  line(100, 200, 200, 100);
  line(0, 100, 100, 0);
  line(0, 0, 200, 200);
  line(100, 0, 200, 100);
  line(0, 100, 100, 200);
  // Box Color
  stroke(boxColor);
  strokeWeight(4);
  for (var k = 0; k <= 200; k += 100) {
    line(k, 0, k, 200);
    line(0, k, 200, k);
  }
}

function draw() {
  createTile(
    4,
    4,
    "CadetBlue",
    "DarkSlateGray",
    "Wheat",
    "DarkBlue",
    "CadetBlue",
    "wheat",
    "CadetBlue",
    "DarkSlateGray"
  );
  createTile(
    0,
    204,
    "LavenderBluch",
    "Plum",
    "Indigo",
    "LightSeaGreen",
    "LavenderBlush",
    "Indigo",
    "Silver",
    "Silver"
  );
  createTile(
    0,
    204,
    "FireBrick",
    "Black",
    "FireBrick",
    "LightCoral",
    "LavenderBlush",
    "Indigo",
    "LightCoral",
    "LightCoral"
  );
  createTile(
    204,
    -408,
    "Silver",
    "RosyBrown",
    "PaleGoldenRod",
    "Peru",
    "Gold",
    "LightYellow",
    "Peru",
    "LightYellow"
  );
  createTile(
    0,
    204,
    "SlateGray",
    "Gainsboro",
    "Black",
    "MediumSpringGreen",
    "Silver",
    "GhostWhite",
    "MediumSpringGreen",
    "MediumSeaGreen"
  );

  createTile(
    0,
    204,
    "DarkBlue",
    "Blue",
    "CornFlowerBlue",
    "MediumBlue",
    "RoyalBlue",
    "LightSkyBlue",
    "DeepSkyBlue",
    "MidnightBlue"
  );
  createTile(
    204,
    -408,
    "DarkMagenta",
    "Fuchsia",
    "LightPink",
    "Fuchsia",
    "DarkMagenta",
    "PaleTurquoise",
    "LightPink",
    "DarkMagenta"
  );
  createTile(
    0,
    204,
    "Salmon",
    "DodgerBlue",
    "SkyBlue",
    "LightCyan",
    "Salmon",
    "LightCyan",
    "LightCyan",
    "SkyBlue"
  );
  createTile(
    0,
    204,
    "DarkOliveGreen",
    "PaleGreen",
    "Yellow",
    "PaleGreen",
    "DarkSeaGreen",
    "DarkGreen",
    "PaleGreen",
    "DarkOliveGreen"
  );
}
