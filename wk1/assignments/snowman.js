let grid = undefined;
let stroke1 = prompt("enter a basic color name in lowercase", "black");
let stroke2 = prompt("enter another basic color in lowercase", "red");
function setup() {
    createCanvas(1000, 800);
    background (155, 200, 255);
}
function draw() {
    // trees
    fill(25, 150, 75);
    //left
    triangle(0, 675, 350, 675, 175, 375);
    triangle(45, 500, 305, 500, 175, 235);
    triangle(85, 335, 265, 335, 175, 135);
    //right
    triangle(1000, 675, 650, 675, 825, 375);
    triangle(955, 500, 695, 500, 825, 235);
    triangle(915, 335, 735, 335, 825, 135);
    // tree stumps
    fill("#633C00")
    rect(137.5, 675, 75, 100)
    rect(787.5, 675, 75, 100)
    // snowman
    fill("#f1f1f1");
    strokeWeight(15)
    //ground
    noStroke()
    quad(-100, 750, -100, 900, 1100, 900, 1100, 750)
    // bottom
    stroke(stroke1);
    ellipse(500, 585, 400);
    // middle
    ellipse(500, 390, 300);
    // scarf
    fill(stroke2);
    stroke (stroke2);
    strokeWeight(50);
    arc(500, 255, 200, 110, 0, PI);
    strokeCap(ROUND);
    line(604, 250, 650, 175);
    line(590, 250, 590, 375);
    strokeWeight(7);
    // scarf strings - top
    line(632, 166, 655, 120);
    line(638, 173, 670, 123);
    line(650, 175, 683, 127);
    line(657, 183, 692, 141);
    line(665, 190, 695, 160);
    // scarf strings - bottom
    line(570, 375, 565, 430);
    line(580, 375, 577, 435);
    line(590, 375, 590, 435);
    line(600, 375, 602, 435);
    line(610, 375, 615, 430);
    // head
    strokeWeight(15)
    fill("#f1f1f1");
    stroke(stroke1);
    ellipse(500, 200, 200);
    // hat brim
    stroke(stroke1);
    strokeWeight(30);
    line(375, 125, 625, 125);
    // hat body
    fill(stroke1);
    strokeWeight(25);
    rect(425, 20, 150, 100, 5);
    fill(25, 150, 75);
    strokeWeight(0);
    rect(412.5, 65, 175, 35);
    // eyes
    stroke(stroke1);
    strokeWeight(35);
    point(465, 175);
    point(535, 175);
    // buttons
    point(500, 360);
    point(500, 420);
    point(500, 480);
    // mouth
    noFill()
    strokeWeight(15);
    arc(500, 245, 60, 40, 0, PI);
    // arms
    strokeWeight(15);
    stroke(stroke1)
    noFill();
    line(375, 350, 200, 300);
    line(625, 350, 800, 300);
    strokeCap(ROUND);
    // left fingers
    line(200, 300, 200, 250);
    line(200, 300, 150, 250);
    line(200, 300, 150, 300);
    //right fingers
    line(800, 300, 800, 250);
    line(800, 300, 850, 250);
    line(800, 300, 850, 300)
    // nose
    stroke(255, 165, 0);
    triangle(499, 215, 492, 220, 499, 220);
    // snow
    fill("#fff");
    noStroke();
    ellipse(75, 50, 10);
    ellipse(120, 85, 12);
    ellipse(20, 35, 7);
    ellipse(15, 85, 6);
    ellipse(135, 150, 10);
    ellipse(120, 185, 4);
    ellipse(139, 35, 7);
    ellipse(57, 135, 15);
    ellipse(18, 176, 11);
    ellipse(200, 104, 9);
    ellipse(170, 79, 6);
    ellipse(275, 350, 10);
    ellipse(120, 585, 12);
    ellipse(220, 35, 7);
    ellipse(315, 85, 6);
    ellipse(335, 150, 10);
    ellipse(120, 385, 4);
    ellipse(139, 325, 7);
    ellipse(57, 335, 13);
    ellipse(618, 160, 8);
    ellipse(600, 104, 9);
    ellipse(170, 579, 6);
    ellipse(170, 229, 6);
    ellipse(304, 250, 7);
    ellipse(120, 258, 12);
    ellipse(220, 235, 7);
    ellipse(315, 285, 6);
    ellipse(335, 250, 10);
    ellipse(40, 285, 4);
    ellipse(239, 145, 7);
    ellipse(357, 46, 12);
    ellipse(65, 245, 8);
    ellipse(27, 367, 9);
    ellipse(208, 327, 6);
    ellipse(625, 50, 10);
    ellipse(650, 85, 12);
    ellipse(720, 35, 7);
    ellipse(715, 85, 6);
    ellipse(835, 150, 10);
    ellipse(920, 185, 4);
    ellipse(939, 35, 7);
    ellipse(757, 135, 15);
    ellipse(718, 176, 11);
    ellipse(800, 104, 9);
    ellipse(870, 79, 6);
    ellipse(275, 350, 10);
    ellipse(120, 585, 12);
    ellipse(820, 35, 7);
    ellipse(915, 85, 6);
    ellipse(935, 150, 10);
    ellipse(820, 385, 4);
    ellipse(939, 325, 7);
    ellipse(857, 335, 13);
    ellipse(818, 260, 8);
    ellipse(800, 104, 9);
    ellipse(770, 579, 6);
    ellipse(670, 229, 6);
    ellipse(734, 250, 7);
    ellipse(920, 258, 12);
    ellipse(887, 435, 7);
    ellipse(975, 234, 6);
    ellipse(735, 350, 10);
    ellipse(940, 450, 4);
    ellipse(239, 465, 7);
    ellipse(58, 465, 12);
    ellipse(65, 550, 8);
    ellipse(129, 467, 9);
    ellipse(268, 564, 6);
    ellipse(228, 524, 9);
    ellipse(316, 439, 6);
    ellipse(39, 679, 14);
    ellipse(70, 650, 9);
    ellipse(17, 500, 7);
    ellipse(200, 500, 14);
    ellipse(234, 634, 12);
    ellipse(210, 387, 10);
    ellipse(147, 670, 8);
    ellipse(127, 617, 5);
    ellipse(265, 660, 6);
    ellipse(230, 705, 15);
    ellipse(135, 745, 11);
    ellipse(39, 723, 9);
    ellipse(300, 730, 6);
    ellipse(940, 600, 4);
    ellipse(756, 465, 7);
    ellipse(858, 465, 12);
    ellipse(965, 550, 8);
    ellipse(729, 417, 9);
    ellipse(868, 648, 6);
    ellipse(728, 724, 9);
    ellipse(716, 639, 6);
    ellipse(779, 679, 14);
    ellipse(737, 530, 9);
    ellipse(867, 540, 7);
    ellipse(800, 500, 14);
    ellipse(834, 666, 12);
    ellipse(810, 590, 10);
    ellipse(950, 670, 8);
    ellipse(927, 617, 5);
    ellipse(965, 410, 6);
    ellipse(930, 705, 15);
    ellipse(835, 725, 11);
    ellipse(796, 195, 9);
    ellipse(668, 420, 6);
}