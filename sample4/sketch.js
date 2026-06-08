function setup() {
  createCanvas(400, 600);
}
function draw() {
  let t = frameCount * 0.018;
  background(8, 55, 160);
  // 1. 바다 배경
  noStroke();
  fill(255, 255, 220, 30);
  triangle(0, 0, 130, 600, 0, 600);
  fill(255, 255, 255, 25);
  quad(0, 0, 260, 600, 400, 600, 70, 0);
  fill(0, 255, 220, 22);
  quad(120, 0, 320, 600, 400, 600, 220, 0);
  fill(255, 170, 70, 18);
  triangle(400, 0, 400, 250, 240, 0);
  // 2. 햇빛 그룹 — 위아래 부유 + pulse 크기
  let sunOff = sin(t * 0.8) * 6;
  let sunPulse = 1 + sin(t * 1.2) * 0.06;
  noStroke();
  fill(0, 210, 190, 210);
  ellipse(48, 70 + sunOff, 90 * sunPulse, 90 * sunPulse);
  fill(255, 130, 20, 200);
  ellipse(82, 102 + sunOff, 66 * sunPulse, 66 * sunPulse);
  fill(15, 35, 110, 220);
  ellipse(35, 130 + sunOff, 96 * sunPulse, 96 * sunPulse);
  fill(255, 255, 255, 70);
  ellipse(60, 92 + sunOff, 38 * sunPulse, 38 * sunPulse);
  fill(255, 240, 210, 40);
  ellipse(55, 95 + sunOff, 135 * sunPulse, 135 * sunPulse);
  // 3. 물고기 — 좌우 드리프트 + pulse 크기
  let fishDrift = sin(t * 0.5) * 18;
  let fishPulse = 1 + sin(t * 0.9) * 0.07;
  let hueShift = sin(t * 0.6) * 30;
  fill(255, 255, 255, 150);
  ellipse(145 + fishDrift, 325, 220 * fishPulse, 220 * fishPulse);
  fill(160, 235, 255, 80);
  ellipse(145 + fishDrift, 325, 270 * fishPulse, 270 * fishPulse);
  fill(10, 45, 145, 190);
  ellipse(255 + fishDrift * 0.7, 438, 260 * fishPulse, 260 * fishPulse);
  fill(0, 220, 200, 75);
  ellipse(255 + fishDrift * 0.7, 438, 305 * fishPulse, 305 * fishPulse);
  fill(255, 110 + hueShift, 10, 210);
  arc(200 + fishDrift * 0.5, 395, 112, 112, 0, PI);
  fill(0, 235 + hueShift * 0.3, 205, 190);
  arc(200 + fishDrift * 0.5, 395, 112, 112, PI, TWO_PI);
  fill(255, 250, 230, 95);
  ellipse(200 + fishDrift * 0.5, 395, 48, 48);
  fill(255, 180, 80, 45);
  ellipse(200 + fishDrift * 0.5, 395, 170, 170);
  // 4. 쓰레기 사각형 — 느린 회전
  let trashAngle = sin(t * 0.3) * 0.12;
  push();
  translate(330, 287);
  rotate(trashAngle);
  stroke(255, 245, 210, 180);
  strokeWeight(2);
  fill(6, 22, 85, 235);
  rect(-52, -52, 105, 105);
  noStroke();
  fill(0, 210, 185, 220);
  arc(0, 0, 84, 84, HALF_PI, PI + HALF_PI);
  fill(255, 115 + hueShift * 0.8, 10, 220);
  arc(0, 0, 84, 84, PI + HALF_PI, HALF_PI);
  fill(255, 255, 255, 75);
  ellipse(0, 0, 28, 28);
  fill(255, 240, 210, 30);
  ellipse(0, 0, 120, 120);
  pop();
  push();
  translate(343, 493);
  rotate(-trashAngle * 0.8);
  stroke(255, 245, 210, 160);
  strokeWeight(1.5);
  fill(8, 24, 90, 235);
  rect(-41, -41, 82, 82);
  noStroke();
  fill(255, 255, 255, 220);
  ellipse(0, 0, 42, 42);
  fill(10, 80, 200, 220);
  triangle(-21, -20, 21, -20, 0, 20);
  fill(0, 220, 200, 60);
  ellipse(0, 0, 70, 70);
  pop();
  // 5. 물방울 — 위로 떠오르면서 크기
  let dropY = (frameCount * 0.5) % 120;
  let dropSize = 1 + sin(t * 2) * 0.2;
  noStroke();
  fill(255, 200, 120, 120);
  ellipse(300, 115 - dropY * 0.3, 20 * dropSize, 20 * dropSize);
  fill(0, 230, 210, 110);
  ellipse(340, 145 - dropY * 0.4, 14 * dropSize, 14 * dropSize);
  fill(255, 255, 255, 100);
  ellipse(310, 175 - dropY * 0.5, 10 * dropSize, 10 * dropSize);
  fill(255, 170, 60, 95);
  ellipse(92, 235 - dropY * 0.35, 12 * dropSize, 12 * dropSize);
  fill(0, 230, 210, 90);
  ellipse(118, 258 - dropY * 0.45, 9 * dropSize, 9 * dropSize);
  // 6. 빛 줄기 — alpha 맥동
  let rayAlpha = map(sin(t * 1.1), -1, 1, 40, 100);
  stroke(0, 255, 220, rayAlpha);
  line(35, 130 + sunOff, 330, 287);
  stroke(255, 140, 40, rayAlpha);
  line(82, 102 + sunOff, 343, 493);
}
