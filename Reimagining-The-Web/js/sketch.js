/*
Slow Factor adapted from https://p5js.org/examples/input-easing.html
Gradient adapted from https://p5js.org/examples/color-linear-gradient.html
*/

let x = 1;
let y = 1;
let slowFactor = 0.05;
let clicked = 1;

function preload() {
  anger = loadImage('Emojis/anger.png');
  yeehaw = loadImage('Emojis/cowboy.png');
  dino = loadImage('Emojis/dino.png');
  sad = loadImage('Emojis/sad.png');
  star = loadImage('Emojis/star.png');
  pumpkin = loadImage('Emojis/pumpkin.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);  
  
  yeehaw.loadPixels();
  anger.loadPixels();
  dino.loadPixels();
  sad.loadPixels();
  star.loadPixels();
  pumpkin.loadPixels();
}


function draw() {
  //gradient function
  color1 = color('#FFF3B2');
  color2 = color('#F7B0AC');
  setGradient(0, 0, windowWidth, windowHeight, color1, color2, "Y");
  
  if (clicked > 7){
    mouseClicked();
    
  }
  if(clicked == 1){
    cowboy();
  }
  if(clicked == 2){
  color1 = color('#DDFFB2');
  color2 = color('#CBDAFF');
  setGradient(0, 0, windowWidth, windowHeight, color1, color2, "Y");
  trex();
  }
  if(clicked == 3){
  color1 = color('#271300');
  color2 = color('#A54F00');
  setGradient(0, 0, windowWidth, windowHeight, color1, color2, "Y")
    spooky();
  }
  if(clicked == 4){
    color1 = color('#BC0B00');
  color2 = color('#340D0D');
  setGradient(0, 0, windowWidth, windowHeight, color1, color2, "Y")
    angry();
  }
  if(clicked == 5){
    color1 = color('#322272');
  color2 = color('#BF4B4B');
  setGradient(0, 0, windowWidth, windowHeight, color1, color2, "Y")
    stars(); 
  }
  
  if(clicked == 6){
    color1 = color('#408CFF');
  color2 = color('#071A36');
  setGradient(0, 0, windowWidth, windowHeight, color1, color2, "Y")
    tear();
  }
  if (clicked == 7){
    clicked = 1;
  }
  
  
}

function mouseClicked() {
  
  clicked++;
  console.log(clicked);
}

function cowboy() {
  let targetX = mouseX;
  let dx = targetX - x;
  x += dx * slowFactor;

  let targetY = mouseY;
  let dy = targetY - y;
  y += dy * slowFactor;

  image(yeehaw, x, y, 50, 50);
  
  fill('#FE9892');
  noStroke();
  textSize(12);
  text('yeehaw', x +2, y + 60, 100,100);
}

function angry() {
  let targetX = mouseX;
  let dx = targetX - x;
  x += dx * slowFactor;

  let targetY = mouseY;
  let dy = targetY - y;
  y += dy * slowFactor;

  fill('#FF574D');
  noStroke();
  textSize(12);
  text('let it out', x + 2, y + 60, 100,100);
  image(anger, x, y, 50, 50);
}

function trex() {
  let targetX = mouseX;
  let dx = targetX - x;
  x += dx * slowFactor;

  let targetY = mouseY;
  let dy = targetY - y;
  y += dy * slowFactor;

  
  fill('#A5BCF9');
  noStroke();
  textSize(12);
  text('rawr', x + 12, y + 60, 100,100);
  
  image(dino, x, y, 50, 50);
}

function tear() {
  let targetX = mouseX;
  let dx = targetX - x;
  x += dx * slowFactor;

  let targetY = mouseY;
  let dy = targetY - y;
  y += dy * slowFactor;

  image(sad, x, y, 50, 50);
  
    fill('#9FC6FF');
  noStroke();
  textSize(12);
  text('you will be okay', x - 12 , y + 60, 100,100);
}

function stars() {
  let targetX = mouseX;
  let dx = targetX - x;
  x += dx * slowFactor;

  let targetY = mouseY;
  let dy = targetY - y;
  y += dy * slowFactor;

    
  fill('#7A63D8');
  noStroke();
  textSize(12);
  text('i am a star', x -2 , y + 60, 100,100);
  image(star, x, y, 50, 50);
}

function spooky() {
  let targetX = mouseX;
  let dx = targetX - x;
  x += dx * slowFactor;

  let targetY = mouseY;
  let dy = targetY - y;
  y += dy * slowFactor;

  image(pumpkin, x, y, 50, 50);
  fill('#FFB572');
  noStroke();
  textSize(12);
  text('sp00ky', x +4 , y + 60, 100,100);
  

}


//creating a function to create the gradient colour
function setGradient(x, y, w, h, color1, color2, axis) {
  noFill();
  if (axis == "Y") { // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      var inter = map(i, y, y + h, 0, 1);
      var c = lerpColor(color1, color2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  }

}