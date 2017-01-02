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

// build a one off 200 car array
// timeout doesn't seem to make a difference here.
function initCars() {
    for (var i = 0; i < 20; i++) {
        setTimeout(createCar, 1000, i);
        // createCar(i);
    }
}

function Car(x, y, vx, delay, colour) {
    this.delay = delay;
    this.x = x;
    this.vx = vx;
    this.copyVX = vx;

    this.move = function() {
      // console.log('move');
        this.x += this.vx;
        if (this.x > 800) this.x = 0;
    }

    // will slow down by decreasing vx down to .5
    this.slow = function() {
        if (this.vx >= .1) {
            // console.log('slowin '+this.vx);
            this.vx = this.vx - .1;
        }
    }

    this.stop = function() {
        this.vx = 0;
    }

    this.accelerate = function() {
        //dont go faster than original speed
        if (this.vx < this.copyVX) {
            // console.log('speedin up  '+this.vx);
            this.vx = this.vx + .1;
        }
    }

    this.draw = function() {
        ctx.fillStyle = colour;
        ctx.fillRect(this.x, y, 10, 5);
    }
}

function createCar(i) {
    // initial position in middle of canvas
    var x = 0;
    var y = 0;
    var delay = getRandomIntInclusive(1, 2000);
    var vx = 3 + Math.random() * 2;
    // var vy = Math.random() * -3;
    var colour = colours[i % colours.length];
    var p = new Car(x, 20, vx, delay, colour);
    cars.push(p);
}

// this is essentially checking each object, applying an update, if anything changes then we animate
function render() {
    ctx.clearRect(0, 0, width, height);
    for (var i = 0; i < cars.length; i++) {
        // check all x positions and slow down the car if there is one in front
        for (var j = 0; j < cars.length; j++) {
            // check range and slow down, break out otherwise will accel onchecking other cars
            if ((cars[j].x - cars[i].x) < 50 && (cars[j].x - cars[i].x) > 20) {
                cars[i].slow();
                break;
            } else {
                cars[i].accelerate();
            }
        }
        // delay the car by creating count down delay
        if (cars[i].delay <= 0) {
            cars[i].move();
            cars[i].draw();
        } else {
            cars[i].delay--;
        }
        // console.log(cars[i]);
    }

    requestAnimationFrame(render);
}

// init
initCars();
render();