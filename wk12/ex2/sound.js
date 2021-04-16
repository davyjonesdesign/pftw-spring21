var sound;
var fft;

function preload () {
  sound = loadSound('technoBeats.mp3');
}

function setup () {
  createCanvas(500, 500);
  fft = new p5.FFT();
  noStroke();
}

function draw () {
  if (sound.isPlaying() == true) {
    background(25, 0, 0, 30);
    fill(200, 0, 0);

    var waveform = fft.waveform();
    for (var i = 0; i < waveform.length; i++) {
      var x = map(i, 0, waveform.length, 0, width);
      var y = map(waveform[i], -1.5, 1.5, height, 0);
      ellipse(x, y, 2, 2);
    }
  } else {
    background(125, 0, 0);
  }
}

function mousePressed () {
  if (sound.isPlaying() == true) {
    sound.pause();
  } else {
    sound.play();
  }
}
