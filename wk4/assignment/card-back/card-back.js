document.body.style.margin = 20;
const rectWidth = 100;
const rectHeight = 125;
let startingX = 5;
let startingY = 5;
function setup () {
    createCanvas(110, 135);
    background(8, 8, 75);
    // card back
    strokeWeight(4);
      stroke('MediumPurple');
      fill('midnightblue');
      rect(startingX, startingY, rectWidth, rectHeight, 10);
    strokeWeight(2);
    stroke('MediumPurple');
    fill('indigo');
    rect(startingX + 12, startingY + 12, rectWidth - 24, rectHeight - 24, 5);
    noFill();
    strokeWeight(2);
    stroke('PaleGreen');
    ellipse(
      startingX + rectWidth / 2,
      startingY + rectHeight / 2,
      rectWidth - 28,
      rectHeight / 2
    );
    ellipse(
      startingX + rectWidth / 2,
      startingY + rectHeight / 2,
      rectWidth / 2,
      rectHeight - 28
    );
    stroke('darkturquoise');
    quad(
      startingX + rectWidth / 2,
      startingY + 15,
      startingX + rectWidth - 15,
      startingY + rectHeight / 2,
      startingX + rectWidth / 2,
      startingY + rectHeight - 15,
      startingX + 15,
      startingY + rectHeight / 2
    );

    quad(
      startingX + rectWidth / 2,
      startingY + 35,
      startingX + rectWidth - 15,
      startingY + rectHeight / 2,
      startingX + rectWidth / 2,
      startingY + rectHeight - 35,
      startingX + 15,
      startingY + rectHeight / 2
    );
    // middle circle
    stroke('mediumPurple');
    fill('midnightBlue');
    strokeWeight(3);
    ellipse(startingX + rectWidth / 2, startingY + rectHeight / 2, 28);
    strokeWeight(2);
    stroke('paleGreen');
    line(
      startingX + rectWidth / 2 + 5,
      startingY + rectHeight / 2 + 5,
      startingX + rectWidth / 2 - 5,
      startingY + rectHeight / 2 - 5
    );
    line(
      startingX + rectWidth / 2 + 5,
      startingY + rectHeight / 2 - 5,
      startingX + rectWidth / 2 - 5,
      startingY + rectHeight / 2 + 5
    );
    stroke('mediumTurquoise');
    strokeWeight(2);
    line(
      startingX + rectWidth / 2,
      startingY + rectHeight / 2 + 7,
      startingX + rectWidth / 2,
      startingY + rectHeight / 2 - 7
    );
    line(
      startingX + rectWidth / 2 + 7,
      startingY + rectHeight / 2,
      startingX + rectWidth / 2 - 7,
      startingY + rectHeight / 2
    );
    // corner circles
    stroke('mediumPurple');
    strokeWeight(3);
    fill('midnightBlue');
    ellipse(startingX + 10, startingY + 10, 20);
    ellipse(startingX + rectWidth - 10, startingY + 10, 20);
    ellipse(startingX + rectWidth - 10, startingY + rectHeight - 10, 20);
    ellipse(startingX + 10, startingY + rectHeight - 10, 20);
    // diagonal lines
    strokeWeight(1);
    stroke('paleGreen');
    // top-left
    line(startingX + 6, startingY + 6, startingX + 14, startingY + 14);
    line(startingX + 14, startingY + 6, startingX + 6, startingY + 14);
    // top-right
    line(startingX + rectWidth - 6, startingY + 6, startingX + rectWidth - 14, startingY + 14);
    line(startingX + rectWidth - 14, startingY + 6, startingX + rectWidth - 6, startingY + 14);
    // bottom-right
    line(startingX + rectWidth - 6, startingY + rectHeight - 6, startingX + rectWidth - 14, startingY + rectHeight - 14);
    line(startingX + rectWidth - 14, startingY + rectHeight - 6, startingX + rectWidth - 6, startingY + rectHeight - 14);
    // bottom-left
    line(startingX + 6, startingY + rectHeight - 6, startingX + 14, startingY + rectHeight - 14);
    line(startingX + 14, startingY + rectHeight - 6, startingX + 6, startingY + rectHeight - 14);
    // perpendicular lines
    stroke('mediumTurquoise');
    strokeWeight(1);
    // top-left
    line(startingX + 5, startingY + 10, startingX + 15, startingY + 10);
    line(startingX + 10, startingY + 5, startingX + 10, startingY + 15);
    // top-right
    line(startingX + rectWidth - 10, startingY + 5, startingX + rectWidth - 10, startingY + 15);
    line(startingX + rectWidth - 15, startingY + 10, startingX + rectWidth - 5, startingY + 10);
    // bottom-right
    line(startingX + rectWidth - 15, startingY + rectHeight - 10, startingX + rectWidth - 5, startingY + rectHeight - 10);
    line(startingX + rectWidth - 10, startingY + rectHeight - 5, startingX + rectWidth - 10, startingY + rectHeight - 15);
    // bottom-left
    line(startingX + 5, startingY + rectHeight - 10, startingX + 15, startingY + rectHeight - 10);
    line(startingX + 10, startingY + rectHeight - 5, startingX + 10, startingY + rectHeight - 15);
}