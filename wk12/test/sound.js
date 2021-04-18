function preload(){
  sound1 = loadSound('sound/hum1.mp3');
  sound2 = loadSound('sound/hum2.mp3');
}
function setup(){
  cnv = createCanvas(500, 500);
  cnv.mouseClicked(toggleSound);

  amplitude = new p5.Amplitude();
  amplitude.setInput(sound2);
}

function draw() {
  background(220);
  text('tap to play', 20, 20);

  let level = amplitude.getLevel();
  let size = map(level, 0, 0.7, 0, height);
  fill(0);
  ellipse(width/2, height/2, 100, -size);
}

function toggleSound(){
  if (sound1.isPlaying() && sound2.isPlaying()) {
    sound1.stop();
    sound2.stop();
  } else {
    sound1.play();
    sound2.play();
  }
}