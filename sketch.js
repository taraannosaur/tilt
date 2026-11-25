let me;
let guests;
let colours = ["#e63946", "#2a9d8f", "#e9c46a", "#264653"];
let maxSpeed = 15;

function preload() {
  partyConnect("wss://demoserver.p5party.org", "tara", "tararoom1");
  me = partyLoadMyShared({ x: 200, y: 200, colour: random(colours) });
  guests = partyLoadGuestShareds();
}

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(220);

  me.x += map(me.rotationX, -180, 180, -maxSpeed, maxSpeed);
  me.y += map(me.rotationY, -180, 180, -maxSpeed, maxSpeed);

  for (let i = 0; i < guests.length; i++) {
    let g = guests[i];
    if (g.x !== undefined && g.colour !== undefined) {
      fill(g.colour);
      ellipse(g.x, g.y, 40, 40);
    }
  }
}