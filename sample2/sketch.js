function setup() {
  createCanvas(600, 400);
  noLoop();
}
function draw() {
  background(255, 245, 232);
  // 뒷머리 원 + 사각형
  fill(17, 17, 17);
  noStroke();
  ellipse(300, 163, 234, 234);
  rect(183, 163, 234, 260);
  // 목
  fill(255, 213, 158);
  stroke(232, 168, 124);
  strokeWeight(1);
  rect(274, 296, 52, 62, 6);
  // 귀
  ellipse(185, 185, 27, 34);
  ellipse(415, 185, 27, 34);
  // 링 귀걸이
  noFill();
  stroke(212, 168, 0);
  strokeWeight(3.5);
  ellipse(185, 211, 30, 30);
  ellipse(415, 211, 30, 30);
  fill(255, 245, 232);
  noStroke();
  ellipse(185, 211, 18, 18);
  ellipse(415, 211, 18, 18);
  // 얼굴
  fill(255, 224, 178);
  stroke(232, 168, 124);
  strokeWeight(1.5);
  ellipse(300, 195, 216, 230);
  // 앞머리 반원
  fill(17, 17, 17);
  noStroke();
  arc(300, 140, 216, 133, PI, TWO_PI);
  // 왼쪽 눈
  fill(255);
  stroke(26, 10, 0);
  strokeWeight(1.5);
  ellipse(265, 186, 34, 34);
  fill(61, 32, 0);
  noStroke();
  ellipse(265, 186, 23, 23);
  fill(26, 10, 0);
  ellipse(265, 186, 13, 13);
  fill(255);
  ellipse(259, 181, 7, 7);
  noFill();
  stroke(26, 10, 0);
  strokeWeight(3.5);
  arc(265, 170, 42, 20, PI + 0.15, TWO_PI - 0.15);
  // 오른쪽 눈
  fill(255);
  stroke(26, 10, 0);
  strokeWeight(1.5);
  ellipse(335, 186, 34, 34);
  fill(61, 32, 0);
  noStroke();
  ellipse(335, 186, 23, 23);
  fill(26, 10, 0);
  ellipse(335, 186, 13, 13);
  fill(255);
  ellipse(329, 181, 7, 7);
  noFill();
  stroke(26, 10, 0);
  strokeWeight(3.5);
  arc(335, 170, 42, 20, PI + 0.15, TWO_PI - 0.15);
  // 볼터치
  noStroke();
  fill(255, 179, 186, 140);
  ellipse(232, 228, 57, 34);
  ellipse(368, 228, 57, 34);
  // 코
  noFill();
  stroke(200, 144, 90);
  strokeWeight(1.5);
  line(296, 204, 289, 223);
  line(304, 204, 311, 223);
  arc(300, 225, 23, 9, 0, PI);
  // 입술
  fill(232, 128, 128);
  stroke(208, 96, 96);
  strokeWeight(0.8);
  arc(300, 250, 50, 20, 0, PI);
  fill(240, 144, 144);
  arc(300, 253, 50, 28, 0, PI);
  noFill();
  stroke(208, 96, 96);
  strokeWeight(1);
  line(275, 252, 325, 252);
  // 안경
  fill(200, 230, 255, 25);
  stroke(17, 17, 17);
  strokeWeight(3);
  rect(238, 172, 53, 32, 4);
  rect(309, 172, 53, 32, 4);
  noFill();
  arc(300, 186, 22, 12, PI, TWO_PI);
  line(238, 182, 200, 182);
  line(362, 182, 400, 182);
  // 옷 반원
  fill(245, 255, 122);
  stroke(212, 192, 80);
  strokeWeight(1);
  arc(300, 450, 480, 230, PI, TWO_PI);
}
