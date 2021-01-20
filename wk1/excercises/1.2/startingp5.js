function setup() {
  createCanvas(windowWidth, windowHeight);
}

const numb = window.prompt("What stroke weight would you like?");
if (Number(numb) >= "6") {
  function draw() {
    fill(124, 150, 125);
    if (mouseIsPressed) {
      fill(107, 227, 119, 50);
      stroke(107, 227, 119);
      strokeWeight(6);
    } else {
      fill(0, 0, 0, 0);
      stroke(0, 0, 0, 0);
    }
    rect(mouseX, mouseY, 50, 50, 15);
  }
} else if (Number(numb) >= "5") {
  function draw() {
    fill(124, 150, 125);
    if (mouseIsPressed) {
      fill(107, 227, 119, 50);
      stroke(107, 227, 119);
      strokeWeight(5);
    } else {
      fill(0, 0, 0, 0);
      stroke(0, 0, 0, 0);
    }
    rect(mouseX, mouseY, 50, 50, 15);
  }
} else if (Number(numb) >= "4") {
  function draw() {
    fill(124, 150, 125);
    if (mouseIsPressed) {
      fill(107, 227, 119, 50);
      stroke(107, 227, 119);
      strokeWeight(4);
    } else {
      fill(0, 0, 0, 0);
      stroke(0, 0, 0, 0);
    }
    rect(mouseX, mouseY, 50, 50, 15);
  }
} else if (Number(numb) >= "3") {
  function draw() {
    fill(124, 150, 125);
    if (mouseIsPressed) {
      fill(107, 227, 119, 50);
      stroke(107, 227, 119);
      strokeWeight(3);
    } else {
      fill(0, 0, 0, 0);
      stroke(0, 0, 0, 0);
    }
    rect(mouseX, mouseY, 50, 50, 15);
  }
} else if (Number(numb) >= "2") {
  function draw() {
    fill(124, 150, 125);
    if (mouseIsPressed) {
      fill(107, 227, 119, 50);
      stroke(107, 227, 119);
      strokeWeight(2);
    } else {
      fill(0, 0, 0, 0);
      stroke(0, 0, 0, 0);
    }
    rect(mouseX, mouseY, 50, 50, 15);
  }
} else {
  function draw() {
    fill(124, 150, 125);
    if (mouseIsPressed) {
      fill(107, 227, 119, 50);
      stroke(107, 227, 119);
      strokeWeight(1);
    } else {
      fill(0, 0, 0, 0);
      stroke(0, 0, 0, 0);
    }
    rect(mouseX, mouseY, 50, 50, 15);
  }
}
