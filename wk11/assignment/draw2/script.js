function setup () {
  createCanvas(600, 600);
  background(255);
}

function draw () {
  strokeWeight(1);
  noFill();
  for (let z = 0; z <= 50; z += 25) {
    for (let y = 0; y <= height; y += 25) {
      for (let x = 0; x <= width; x += 25) {
        stroke(185, 100, 0);
        ellipse(x, y, z, z);
        strokeWeight(0.5);
        stroke(100, 200, 150);
        fill(200, 240, 180, 40);
        ellipse(x, y, z - 20, z - 20);
      }
    }
  }
}
