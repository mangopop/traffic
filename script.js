var ctx = document.getElementById('canvas').getContext('2d');
var cars = 0;

// road
// ctx.fillStyle = "rgb(200,200,200)";
// ctx.fillRect(0, 10, 800, 50);

//road line
// ctx.fillStyle = "rgb(250,250,250)";
// ctx.fillRect(0, 35, 800, 1);

// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Car(speed, colour) {
  this.speed = speed;
  this.colour = colour;
  this.startPos = 800;
  this.delay = 10;
}

function CarAdvanced(speed, colour) {
  this.speed = speed;
  this.colour = colour;
  this.startPos = 800;
  this.delay = 10;

  var interval = setInterval(function () {
    ctx.clearRect(0, 0, 800, 800); // clear canvas

    //car shape 
    ctx.fillStyle = this.colour;
    ctx.fillRect(this.startPos, 20, 10, 5);

    //reduce position according to speed.
    this.startPos -= this.speed;

    //when off screen end, clear
    if (this.startPos < -20) {
      console.log('fin');
      clearInterval(interval);
      //remove correct car from array
    }
  }, 100);

}

function init() {
  //need to make multiple here
  // var delay = 10;
  // var newCar1 = new Car(getRandomIntInclusive(1,5),'rgb(200,0,0)');
  var interval = setInterval(drawCar, 2000);
}

//can we call multple intervals of same name? no gives weird flicker.
function drawCar() {
  console.log('draw car');
  var car = new Car(getRandomIntInclusive(1, 5), 'rgb(200,0,0)');

  var interval = setInterval(function () {
    ctx.clearRect(0, 0, 800, 800); // clear canvas
    // console.log('animate car');

    //car shape 
    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect(car.startPos, 20, 10, 5);

    //reduce position according to speed.
    car.startPos -= 10;

    //when off screen end, clear
    if (car.startPos < -20) {
      console.log('fin');
      clearInterval(interval);
    }
  }, 100);
}

init();

// function drawCars() {
//   var startPos = 800;
//   var interval = setInterval(function () {
//     ctx.clearRect(0, 0, 800, 800); // clear canvas

//     //car shape 
//     ctx.fillStyle = "rgb(200,0,0)";
//     ctx.fillRect(startPos, 20, 10, 5);

//     //reduce position according to speed.
//     startPos -= 10;

//     //when off screen end, clear
//     if (startPos < -20) {
//       console.log('fin');
//       clearInterval(interval);
//     }
//   }, 100);

// }


