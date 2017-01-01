var ctx = document.getElementById('canvas').getContext('2d');
var cars = [];



// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Car(speed, colour) {
  this.speed = getRandomIntInclusive(1, 5);
  this.colour = colour;
  this.startPos = getRandomIntInclusive(800, 3000); //not best way of doing this
  // this.delay = 10;
}


Car.prototype.update = function () {

  this.startPos -= this.speed;

  ctx.fillStyle = "rgb(200,0,0)";
  ctx.fillRect(this.startPos, 20, 10, 5);
};

//create 100 car array
function drawCars() {
  for (var i = 0; i < 100; i++) {
    var car = new Car();
    cars.push(car);
  }
  draw();
}

drawCars();

//go through each car and update
function draw() {

  ctx.clearRect(0, 0, 800, 800);
  // road
  ctx.fillStyle = "rgb(200,200,200)";
  ctx.fillRect(0, 10, 800, 50);

  //road line
  ctx.fillStyle = "rgb(250,250,250)";
  ctx.fillRect(0, 35, 800, 1);

  //go through each car and start to update
  for (var i = 0; i < cars.length; i++) {
    var myCar = cars[i];
    myCar.update();
  }
  requestAnimationFrame(draw);
}
