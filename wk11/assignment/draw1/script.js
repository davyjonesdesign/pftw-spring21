function setup () {
  createCanvas(600, 600);
  background(255);
}

function draw () {
  noStroke();
  for (let y = 10; y <= height - 10; y += 10) {
    for (let x = 10; x <= width - 10; x += 10) {
      fill(255, 0, 0);
      ellipse(x, y, 3, 1);
      fill(0, 255, 0);
      ellipse(x - 3, y - 3, 2, 3);
      fill(0, 0, 255);
      ellipse(x + 5, y + 3, 3, 1);
    }
  }
}
