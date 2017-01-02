var ctx = document.getElementById('canvas').getContext('2d');
// var width = canvas.width = window.innerWidth;
var width = 800;
var height = 400;
var colours = ['#029DAF', '#E5D599', '#FFC219', '#F07C19', '#E32551'];
var cars = [];

// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Car(x,y,vx, colour) {
    this.speed = getRandomIntInclusive(1, 5);
    this.colour = colour;
    this.startPos = getRandomIntInclusive(800, 3000); //not best way of doing this
    // this.delay = 10;

    this.update = function() {
        x += vx;
    }

    this.draw = function() {
        ctx.fillStyle = colour;
        ctx.fillRect(x, y, 10, 5);
    }
}

function initCars() {
    for (var i = 0; i < 200; i++) {
        setTimeout(createCar, 20 * i, i);
    }
}

function createCar(i) {
    // initial position in middle of canvas
    var x = 800;
    var y = 0;
    // randomize the vx and vy a little - but we still want them flying 'up' and 'out'
    var vx = -2 + Math.random() * 4;
    // var vy = Math.random() * -3;
    // randomize size and opacity a little & pick a color from our color palette
    // var size = 5 + Math.random() * 5;
    var colour = colours[i % colours.length];
    // var opacity = 0.5 + Math.random() * 0.5;
    var p = new Car(x, 20, vx, colour);
    cars.push(p);
}

function render() {
    ctx.clearRect(0, 0, width, height);
    for (var i = 0; i < cars.length; i++) {
        cars[i].update();
        cars[i].draw();
    }
    requestAnimationFrame(render);
}

// init
initCars();
render();

// Car.prototype.update = function () {

//   this.startPos -= this.speed;

//   ctx.fillStyle = "rgb(200,0,0)";
//   ctx.fillRect(this.startPos, 20, 10, 5);

//   //should kill this car
// };

// //create 100 car array
// function drawCars() {
//   for (var i = 0; i < 100; i++) {
//     var car = new Car();
//     cars.push(car);
//   }
//   draw();
// }

// drawCars();

// //go through each car and update
// function draw() {

//   ctx.clearRect(0, 0, 800, 800);
//   // road
//   ctx.fillStyle = "rgb(200,200,200)";
//   ctx.fillRect(0, 10, 800, 50);

//   //road line
//   ctx.fillStyle = "rgb(250,250,250)";
//   ctx.fillRect(0, 35, 800, 1);

//   //go through each car and start to update for every frame
//   for (var i = 0; i < cars.length; i++) {
//     var myCar = cars[i];
//     myCar.update();
//   }
//   requestAnimationFrame(draw);
// }
