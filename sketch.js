function setup() {
  createCanvas(500, 500);
background(220);
}
function draw() {
  
  stroke("black");
  fill('red');
  
  if(mouseIsPressed){  
    rect(mouseX, mouseY, 20, 20);
  }
  
  } 