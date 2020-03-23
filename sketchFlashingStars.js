//Draw stars on a canvas

let img;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight - 4);
}

function setup() {
  createCanvas(windowWidth, windowHeight - 4);

  img = loadImage('Images/earth2.png'); // Load the image

}


function draw() {

  //earth image
  image(img, windowWidth / 2, 220, img.width / 4, img.height / 4);

  //Color of the stars
  fill(255 + sin(frameCount * 0.1) * 255, 204, 0);

  //Press the mouse key and move around to draw stars
  if (mouseIsPressed) {
    translate(width * 0.4, height * 0.2);
    star(mouseX - 680, mouseY - 180, 3, 7, 5);
  }
  else {
    noStroke();
  }
}



//Star shape
function star(x, y, radius1, radius2, npoints) {
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



// function mouseClicked() {
//   //i = i + 1;
//   fill(255, 204, 0)
//   translate(width * 0.4, height * 0.2);
//   star(mouseX - 680, mouseY - 180, 3, 7, 5);

//   // if (i % 10 === 0) {
//   //   fill(50);
//   //   translate(width * 0.4, height * 0.2);
//   //   star(mouseX - 680, mouseY - 180, 3, 7, 5);
//   // }
//   // else {
//   //   fill(50,205,50);
//   //   translate(width * 0.4, height * 0.2);
//   //   star(mouseX - 680, mouseY - 180, 3, 7, 5);
//   // }
// }