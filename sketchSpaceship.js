//Spaceship flying forward

let img;
let w;
let xoff = 0;
let i = 0;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight - 4);
}

function setup() {
  //createCanvas(600, 400);
  createCanvas(windowWidth, windowHeight - 4);

  img = loadImage('Images/earth2.png'); // Load the image

  w = new walker();

}


function draw() {
  background(51);
  noStroke();

  //earth image
  image(img, windowWidth / 2, windowHeight / 4, img.width / 2, img.height / 2);


  //flashing stars
  i = i + 1;

  if (i % 10 === 0) {
    fill(50);

    push();
    translate(width * 0.8, height * 0.5);
    rotate(frameCount / -100.0);
    star(5, 50, 3, 7, 5);
    pop();

    push();
    translate(width * 0.4, height * 0.2);
    rotate(frameCount / -100.0);
    star(5, 10, 3, 7, 5);
    pop();

    push();
    translate(width * 0.8, height * 0.5);
    star(-500, -200, 3, 7, 8);
    pop();

    push();
    translate(width * 0.4, height * 0.2);
    star(-400, 200, 3, 7, 5);
    pop();

    push();
    translate(width * 0.4, height * 0.2);
    star(500, 10, 3, 7, 5);
    pop();

    push();
    translate(width * 0.8, height * 0.5);
    star(-700, 200, 3, 7, 8);
    pop();

    push();
    translate(width * 0.6, height * 0.8);
    rotate(frameCount / -100.0);
    star(5, 10, 3, 7, 8);
    pop();


  }
  else {
    fill(255)

    push();
    translate(width * 0.8, height * 0.5);
    rotate(frameCount / -100.0);
    star(5, 50, 3, 7, 5);
    pop();

    push();
    translate(width * 0.4, height * 0.2);
    rotate(frameCount / -100.0);
    star(5, 10, 3, 7, 5);
    pop();

    push();
    translate(width * 0.8, height * 0.5);
    star(-500, -200, 3, 7, 8);
    pop();

    push();
    translate(width * 0.4, height * 0.2);
    star(-400, 200, 3, 7, 5);
    pop();

    push();
    translate(width * 0.4, height * 0.2);
    star(500, 10, 3, 7, 5);
    pop();

    push();
    translate(width * 0.8, height * 0.5);
    star(-700, 200, 3, 7, 8);
    pop();

    push();
    translate(width * 0.6, height * 0.8);
    rotate(frameCount / -100.0);
    star(5, 10, 3, 7, 8);
    pop();
  }

  // Spaceship
  w.update();
  w.display();
}



function walker() {
  //Spaceship initial position
  this.pos = createVector(-50, height / 2);

  //Initial velocity
  this.vel = createVector(0, 0);

  //Initial acceleration
  this.acc = createVector(0.01, 0);


  //Update spaceship position
  this.update = function () {
    this.pos.y = noise(xoff) * height;
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    //If spaceship flys exist the screen, then start from the beginning
    if (this.pos.y > height || this.pos.y < 0 || this.pos.x > width) {
      this.pos = createVector(-50, height / 2);
      this.vel = createVector(0, 0);
      this.acc = createVector(0.01, 0);
    }
    xoff += 0.005;


  }

  this.display = function () {
    fill(255, 255, 0);
    //Spaceship body
    ellipse(this.pos.x, this.pos.y, 100, 60);
    //Spaceship wings
    triangle(this.pos.x - 40, this.pos.y + 60, this.pos.x, this.pos.y, this.pos.x - 40, this.pos.y - 60);

    //Spacehsip windows
    stroke(4);
    fill(255);
    ellipse(this.pos.x - 20, this.pos.y, 10, 10);
    ellipse(this.pos.x, this.pos.y, 10, 10);
    ellipse(this.pos.x + 20, this.pos.y, 10, 10);

  }
}



//Star shape
function star(x, y, radius1, radius2, npoints) {
  //TWO_PI = 6.28318530717958647693
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}