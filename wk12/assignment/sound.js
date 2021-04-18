/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
let noise, sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8;

function preload () {
  soundFormats('mp3', 'ogg');
  sound1 = loadSound('sound/hum1.mp3');
  sound2 = loadSound('sound/hum2.mp3');
  sound3 = loadSound('sound/hum3.mp3');
  sound4 = loadSound('sound/hum4.mp3');
  sound5 = loadSound('sound/whistle1.mp3');
  sound6 = loadSound('sound/whistle2.mp3');
  sound7 = loadSound('sound/whistle3.mp3');
  sound8 = loadSound('sound/whistle4.mp3');
}

function setup () {
  createCanvas(800, 400);
  noise = new p5.Noise();
  noise.start();
  noise.amp(0);
  amplitude = new p5.Amplitude();
}

function draw () {
  background(235, 75);
  translate(65, 35);
  strokeWeight(3);

  // draw keys
  // 'a' key
  fill(255);
  stroke(255, 0, 0);
  rect(35, 35, 40, 40, 5);
  textSize(32);
  fill(255, 0, 0);
  noStroke();
  text('A', 44.5, 66.5);

  // 's' key
  fill(255);
  stroke(150, 0, 100);
  rect(115, 75, 40, 40, 5);
  fill(150, 0, 100);
  noStroke();
  text('S', 124.5, 106.5);

  // 'd' key
  fill(255);
  stroke(175, 100, 175);
  rect(195, 35, 40, 40, 5);
  fill(175, 100, 175);
  noStroke();
  text('D', 204, 66.5);

  // 'f' key
  fill(255);
  stroke(75, 0, 150);
  rect(275, 75, 40, 40, 5);
  fill(100, 50, 175);
  noStroke();
  text('F', 285, 106.5);

  // 'j' key
  fill(255);
  stroke(0, 100, 25);
  rect(350, 220, 40, 40, 5);
  fill(0, 100, 25);
  noStroke();
  text('J', 361.5, 251);

  // 'k' key
  fill(255);
  stroke(0, 50, 175);
  rect(430, 175, 40, 40, 5);
  fill(0, 50, 175);
  noStroke();
  text('K', 439, 206.5);

  // 'l' key
  fill(255);
  stroke(200, 150, 0);
  rect(510, 220, 40, 40, 5);
  fill(200, 150, 0);
  noStroke();
  text('L', 520.5, 251.5);

  // ';' key
  fill(255);
  stroke(175, 50, 0);
  rect(590, 175, 40, 40, 5);
  fill(175, 50, 0);
  noStroke();
  text(';', 604, 202.5);

  // get volume reading from the p5.Amplitude analyzer
  const level = amplitude.getLevel();

  // use level to draw humming circles
  const levelHeight = map(level, 0, 1, 0, height);
  strokeWeight(2);
  if (sound1.isPlaying() === true) {
    fill(255, 100, 100, (levelHeight * 5));
    stroke(255, 0, 0, (levelHeight * 10));
    rect(35 - levelHeight, 35 - levelHeight, 40 + (levelHeight * 2), 40 + (levelHeight * 2), 5 + (levelHeight * 2));
    rect(35 - (levelHeight * 2), 35 - (levelHeight * 2), 40 + (levelHeight * 4), 40 + (levelHeight * 4), 5 + (levelHeight * 4));
    fill(255, 225, 225);
    noStroke();
    text('A', 44.5, 66.5);
  } if (sound2.isPlaying() === true) {
    fill(200, 0, 150, (levelHeight * 5));
    stroke(150, 0, 100, (levelHeight * 10));
    rect(115 - levelHeight, 75 - levelHeight, 40 + (levelHeight * 2), 40 + (levelHeight * 2), 5 + (levelHeight * 2));
    rect(115 - (levelHeight * 2), 75 - (levelHeight * 2), 40 + (levelHeight * 4), 40 + (levelHeight * 4), 5 + (levelHeight * 4));
    fill(255, 200, 225);
    noStroke();
    text('S', 124.5, 106.5);
  } if (sound3.isPlaying() === true) {
    fill(175, 100, 175, (levelHeight * 5));
    stroke(150, 75, 150, (levelHeight * 10));
    rect(195 - levelHeight, 35 - levelHeight, 40 + (levelHeight * 2), 40 + (levelHeight * 2), 5 + (levelHeight * 2));
    rect(195 - (levelHeight * 2), 35 - (levelHeight * 2), 40 + (levelHeight * 4), 40 + (levelHeight * 4), 5 + (levelHeight * 4));
    fill(255, 225, 255);
    noStroke();
    text('D', 204, 66.5);
  } if (sound4.isPlaying() === true) {
    fill(100, 50, 100, (levelHeight * 5));
    stroke(75, 0, 150, (levelHeight * 10));
    rect(275 - levelHeight, 75 - levelHeight, 40 + (levelHeight * 2), 40 + (levelHeight * 2), 5 + (levelHeight * 2));
    rect(275 - (levelHeight * 2), 75 - (levelHeight * 2), 40 + (levelHeight * 4), 40 + (levelHeight * 4), 5 + (levelHeight * 4));
    fill(255, 225, 255);
    noStroke();
    text('F', 285, 106.5);
  }

  // draw whistle squares
  if (sound5.isPlaying() === true) {
    fill(0, 175, 75, (levelHeight * 5));
    stroke(0, 100, 25, (levelHeight * 10));
    rect(350 - levelHeight, 220 - levelHeight, 40 + (levelHeight * 2), 40 + (levelHeight * 2), 5 + levelHeight);
    fill(200, 255, 225);
    noStroke();
    text('J', 361.5, 251);
  } if (sound6.isPlaying() === true) {
    fill(50, 100, 200, (levelHeight * 5));
    stroke(0, 50, 175, (levelHeight * 10));
    rect(430 - levelHeight, 175 - levelHeight, 40 + (levelHeight * 2), 40 + (levelHeight * 2), 5 + levelHeight);
    noStroke();
    fill(200, 225, 255);
    text('K', 439, 206.5);
  } if (sound7.isPlaying() === true) {
    fill(200, 150, 50, (levelHeight * 5));
    stroke(100, 50, 0, (levelHeight * 10));
    rect(510 - levelHeight, 220 - levelHeight, 40 + (levelHeight * 2), 40 + (levelHeight * 2), 5 + levelHeight);
    fill(255, 255, 200);
    noStroke();
    text('L', 520.5, 251.5);
  } if (sound8.isPlaying() === true) {
    fill(255, 150, 100, (levelHeight * 5));
    stroke(175, 50, 0, (levelHeight * 10));
    rect(590 - levelHeight, 175 - levelHeight, 40 + (levelHeight * 2), 40 + (levelHeight * 2), 5 + levelHeight);
    noStroke();
    fill(255, 225, 200);
    text(';', 604, 202.5);
  }
}

// match keys to sounds when pressed
function keyPressed () {
  if (key === 'a') {
    sound1.play();
  } else if (key === 's') {
    sound2.play();
  } else if (key === 'd') {
    sound3.play();
  } else if (key === 'f') {
    sound4.play();
  } else if (key === 'j') {
    sound5.play();
  } else if (key === 'k') {
    sound6.play();
  } else if (key === 'l') {
    sound7.play();
  } else if (key === ';') {
    sound8.play();
  }
}
