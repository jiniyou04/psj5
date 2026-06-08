let offsetY = 0;
let offsetX = 0;
let blinkTimer = 0;
let blushAlpha = 140;

function setup() {
  createCanvas(600, 400);
}
function draw() {
  offsetY = 0;
  offsetX = 0;
  if (keyIsDown(UP_ARROW))    offsetY = -18;
  if (keyIsDown(DOWN_ARROW))  offsetY = 10;
  if (keyIsDown(LEFT_ARROW))  offsetX = -15;
  if (keyIsDown(RIGHT_ARROW)) offsetX = 15;

  if (keyIsDown(32)) {
    blushAlpha = 230;
  } else {
    blushAlpha = 140;
  }

  if (blinkTimer > 0) blinkTimer--;

  let ox = offsetX;
  let oy = offsetY;

  let ldx = constrain((mouseX - (265+ox)) * 0.18, -4, 4);
  let ldy = constrain((mouseY - (186+oy)) * 0.18, -3, 3);
  let rdx = constrain((mouseX - (335+ox)) * 0.18, -4, 4);
  let rdy = constrain((mouseY - (186+oy)) * 0.18, -3, 3);

  background(255, 245, 232);

  fill(17, 17, 17);
  noStroke();
  ellipse(300+ox, 163+oy, 234, 234);
  rect(183+ox, 163+oy, 234, 260);

  fill(255, 213, 158);
  stroke(232, 168, 124);
  strokeWeight(1);
  rect(274+ox, 296+oy, 52, 62, 6);

  fill(255, 213, 158);
  stroke(232, 168, 124);
  strokeWeight(1);
  ellipse(185+ox, 185+oy, 27, 34);
  ellipse(415+ox, 185+oy, 27, 34);

  noFill();
  stroke(212, 168, 0);
  strokeWeight(3.5);
  ellipse(185+ox, 211+oy, 30, 30);
  ellipse(415+ox, 211+oy, 30, 30);
  fill(255, 245, 232);
  noStroke();
  ellipse(185+ox, 211+oy, 18, 18);
  ellipse(415+ox, 211+oy, 18, 18);

  fill(255, 224, 178);
  stroke(232, 168, 124);
  strokeWeight(1.5);
  ellipse(300+ox, 195+oy, 216, 230);

  fill(17, 17, 17);
  noStroke();
  arc(300+ox, 140+oy, 216, 133, PI, TWO_PI);

  fill(255);
  stroke(26, 10, 0);
  strokeWeight(1.5);
  ellipse(265+ox, 186+oy, 34, 34);
  if (blinkTimer == 0) {
    fill(61, 32, 0);
    noStroke();
    ellipse(265+ox+ldx, 186+oy+ldy, 23, 23);
    fill(26, 10, 0);
    ellipse(265+ox+ldx, 186+oy+ldy, 13, 13);
    fill(255);
    ellipse(262+ox+ldx, 183+oy+ldy, 7, 7);
  } else {
    fill(255, 224, 178);
    noStroke();
    ellipse(265+ox, 186+oy, 34, 10);
    stroke(26, 10, 0);
    strokeWeight(2);
    noFill();
    line(251+ox, 186+oy, 279+ox, 186+oy);
  }
  noFill();
  stroke(26, 10, 0);
  strokeWeight(3.5);
  arc(265+ox, 170+oy, 42, 20, PI+0.15, TWO_PI-0.15);

  fill(255);
  stroke(26, 10, 0);
  strokeWeight(1.5);
  ellipse(335+ox, 186+oy, 34, 34);
  if (blinkTimer == 0) {
    fill(61, 32, 0);
    noStroke();
    ellipse(335+ox+rdx, 186+oy+rdy, 23, 23);
    fill(26, 10, 0);
    ellipse(335+ox+rdx, 186+oy+rdy, 13, 13);
    fill(255);
    ellipse(332+ox+rdx, 183+oy+rdy, 7, 7);
  } else {
    fill(255, 224, 178);
    noStroke();
    ellipse(335+ox, 186+oy, 34, 10);
    stroke(26, 10, 0);
    strokeWeight(2);
    noFill();
    line(321+ox, 186+oy, 349+ox, 186+oy);
  }
  noFill();
  stroke(26, 10, 0);
  strokeWeight(3.5);
  arc(335+ox, 170+oy, 42, 20, PI+0.15, TWO_PI-0.15);

  noStroke();
  fill(255, 179, 186, blushAlpha);
  ellipse(232+ox, 228+oy, 57, 34);
  ellipse(368+ox, 228+oy, 57, 34);

  noFill();
  stroke(200, 144, 90);
  strokeWeight(1.5);
  line(296+ox, 204+oy, 289+ox, 223+oy);
  line(304+ox, 204+oy, 311+ox, 223+oy);
  arc(300+ox, 225+oy, 23, 9, 0, PI);

  fill(232, 128, 128);
  stroke(208, 96, 96);
  strokeWeight(0.8);
  arc(300+ox, 250+oy, 50, 20, 0, PI);
  fill(240, 144, 144);
  arc(300+ox, 253+oy, 50, 28, 0, PI);
  noFill();
  stroke(208, 96, 96);
  strokeWeight(1);
  line(275+ox, 252+oy, 325+ox, 252+oy);

  fill(200, 230, 255, 25);
  stroke(17, 17, 17);
  strokeWeight(3);
  rect(238+ox, 172+oy, 53, 32, 4);
  rect(309+ox, 172+oy, 53, 32, 4);
  noFill();
  arc(300+ox, 186+oy, 22, 12, PI, TWO_PI);
  line(238+ox, 182+oy, 200+ox, 182+oy);
  line(362+ox, 182+oy, 400+ox, 182+oy);

  fill(245, 255, 122);
  stroke(212, 192, 80);
  strokeWeight(1);
  arc(300+ox, 450+oy, 480, 230, PI, TWO_PI);
}

function mousePressed() {
  blinkTimer = 18;
}
