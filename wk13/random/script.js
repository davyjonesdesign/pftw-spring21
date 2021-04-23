let angle = 0; // declare a variable for the initial angle
let currentAnglePercentage = 0;

function preload () {
  img = loadImage('map.png')
}

function getCurrentAngle () {
  return map(currentAnglePercentage % 100, 0, 100, 0, 360);
}

function setup () {
  createCanvas(800, 500, WEBGL);
  noStroke();
}

function draw () {
  currentAnglePercentage++;
  background(25);
  noStroke;
  angleMode(DEGREES);
  ellipseMode(CENTER);

  const posX = 0; // change the x axis
  const posY = 0; // change the y axis
  const reSize = 10; // change the size
  const rotationSpeed = (mouseX) * 0.1; // change the rotation speed

  const radius = mouseY / 3;
  const x = radius * cos(angle);
  const y = radius * sin(angle);

  translate(0, 0)
  rotateY((millis() * mouseX) / 10000);
  rotateX((millis() * mouseY) / 10000);
  sphere(40 + x);
  texture(img);

  angle += rotationSpeed;
}
