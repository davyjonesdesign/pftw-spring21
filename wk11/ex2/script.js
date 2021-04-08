let r, g, b;

function setup () {
  createCanvas(500, 500);
  r = random(255);
  g = random(255);
  b = random(255);
  background(20);
}

function draw () {
  noFill();
  stroke(r, g, b);
  strokeWeight(1);
  // using for loop to create triangles
  for (let Yc = 0; Yc <= 500; Yc += 250) {
    for (let Xc = 0; Xc <= 500; Xc += 500) {
      for (let Yb = 0; Yb <= 500; Yb += 250) {
        for (let Xb = 0; Xb <= 500; Xb += 500) {
          for (let Ya = 0; Ya <= 500; Ya += 250) {
            for (let Xa = 0; Xa <= 500; Xa += 500) {
              triangle(Xa, Ya, Xb, Yb, Xc, Yc);
            }
          }
        }
      }
    }
  }
  if (mouseIsPressed === true) {
    mousePressed();
  }
}

function mousePressed () {
  r = random(255);
  g = random(255);
  b = random(255);
  Xa = mouseX;
  Ya = mouseY;
  for (let Yc = 0; Yc <= 500; Yc += 500) {
    for (let Xc = 0; Xc <= 500; Xc += 250) {
      for (let Yb = 0; Yb <= 500; Yb += 500) {
        for (let Xb = 0; Xb <= 500; Xb += 250) {
          for (let Ya = 0; Ya <= 500; Ya += 500) {
            for (let Xa = 0; Xa <= 500; Xa += 250) {
              triangle(mouseX, Ya, Xb, mouseY, Xc, Yc);
            }
          }
        }
      }
    }
  }
}
