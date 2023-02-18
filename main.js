function preload(){
    img=loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQQe2QVoebzAIWtPSs8LhCC4eWjscsGE_JGMyBqPXI&s');
    
  }
function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    image(img,10,10,400,400);
    fill(255,0,0);
    stroke(0,128,0);
    rect(30, 20, 55, 55);
  }
  

