//Spaceship flying forward

var w;
var xoff = 0;



function setup() {
  var cnv = createCanvas(600,400);
  

  // Move the canvas so it's inside our <div id="sketch-holder">.
  cnv.parent("sketch-holder");

  w = new walker();

}


function draw() {
  background(51);
  noStroke();

  w.update();
  w.display();

}



function walker() {
  //Spaceship initial position
  this.pos = createVector(-50, height/2);

  //Initial velocity
  this.vel = createVector(0, 0);

  //Initial acceleration
  this.acc = createVector(0.01,0);


  //Update spaceship position
  this.update = function() {
    this.pos.y = noise(xoff) * height;
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    //If spaceship flys exist the screen, then start from the beginning
    if (this.pos.y > height || this.pos.y < 0 || this.pos.x > width) {
      this.pos = createVector(-50, height/2);
      this.vel = createVector(0, 0);
      this.acc = createVector(0.01,0);
    }
    xoff += 0.005;


  }

  this.display = function(){
    fill(255,255,0);
    //Spaceship body
    ellipse(this.pos.x, this.pos.y, 100, 60);
    //Spaceship wings
    triangle(this.pos.x-40, this.pos.y+60,this.pos.x, this.pos.y,this.pos.x-40, this.pos.y-60);

    //Spacehsip windows
    stroke(4);
    fill(255);
    ellipse(this.pos.x-20, this.pos.y, 10,10);
    ellipse(this.pos.x, this.pos.y, 10,10);
    ellipse(this.pos.x+20, this.pos.y, 10,10);

  }


}
