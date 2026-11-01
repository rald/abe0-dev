import './q5.js';
import palette from './palette.js'; 

let nx = 0;
let ny = 0;

function setup() {
  createCanvas(256, 384);
  displayMode('maxed');
  background(palette[10]);
}

function draw() {
  // Driven primarily by mouse event handlers to prevent offset issues on scale
}

function mousePressed() {
  nx = mouseX;
  ny = mouseY;
}

function mouseDragged() {
  stroke(palette[12]);
  strokeWeight(2);
  line(nx, ny, mouseX, mouseY);
  nx = mouseX;
  ny = mouseY;
}

function windowResized() {
  displayMode('maxed');
}

window.setup = setup;
window.draw = draw;
window.mousePressed = mousePressed;
window.mouseDragged = mouseDragged;
window.windowResized = windowResized;
