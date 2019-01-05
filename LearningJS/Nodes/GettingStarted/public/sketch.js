var circ = {
    x: 0,
    y: 0,
    d: 50,
    r: 0,
    g: 0,
    b: 0
}

var speed = {
    x: 10,
    y: 4
}

var back = {
    r: 0,
    g: 0,
    b: 0
}

var socket;

function setup() {
    createCanvas(1000, 1000);

    // Connect to servers socket!
    socket = io.connect('http://localhost:3000');
}

function draw() {
    randomSeed(100);

    // Background
    back.r = map(circ.x, 0, width, 0, 255);
    back.g = map(circ.y, 0, height, 0, 255);
    background(back.r, back.g, 0);

    // Filled Rectangle
    ellipseMode(CENTER);
    circ.r = map(circ.x, 0, width, 0, 255);
    circ.g = map(circ.x, 0, height, 0, 255);
    circ.b = map(circ.y, 0, height, 255, 0);
    fill(circ.r, circ.g, circ.b);
    ellipse(circ.x, circ.y, circ.d, circ.d);

    circ.x += speed.x;
    circ.y += speed.y;

    if (circ.x >= width || circ.x <= 0) {
        speed.x = -speed.x
    }

    if (circ.y >= height || circ.y <= 0) {
        speed.y = -speed.y;
    }


}