// DOM selectors
const stars = document.getElementById('canvas-stars');
const starsCtx = stars.getContext('2d');

// global variables
let screen,
  starsElements,
  starsParams = {
    speed: 0.2,
    number: 330,
    extinction: 4,
    maxOpacity: 0.3
  };

// run stars
setupStars();
updateStars();

// update stars on resize to keep them centered
window.onresize = function () {
  setupStars();
};

// star constructor
function Star() {
  this.x = Math.random() * stars.width;
  this.y = Math.random() * stars.height;
  this.z = Math.random() * stars.width;

  this.move = function () {
    this.z -= starsParams.speed;
    if (this.z <= 0) {
      this.z = stars.width;
    }
  };

  this.show = function () {
    let x, y, rad, opacity;
    x = (this.x - screen.c[0]) * (stars.width / this.z);
    x = x + screen.c[0];
    y = (this.y - screen.c[1]) * (stars.width / this.z);
    y = y + screen.c[1];
    rad = stars.width / this.z;
    opacity = rad > starsParams.extinction ? 1.5 * (2 - rad / starsParams.extinction) : 1;

    starsCtx.beginPath();
    starsCtx.fillStyle =
      'rgba(255, 255, 255, ' + (opacity >= starsParams.maxOpacity ? starsParams.maxOpacity : opacity) + ')';
    starsCtx.arc(x, y, rad, 0, Math.PI * 2);
    starsCtx.fill();
  };
}

// setup <canvas>, create all the starts
function setupStars() {
  screen = {
    w: window.innerWidth,
    h: window.innerHeight,
    c: [window.innerWidth * 0.5, window.innerHeight * 0.5]
  };
  window.cancelAnimationFrame(updateStars);
  stars.width = screen.w;
  stars.height = screen.h;
  if (screen.w <= 400) {
    starsParams.speed = 0.15;
    starsParams.number = 100;
  } else {
    starsParams.speed = 0.4;
    starsParams.number = 330;
  }
  starsElements = [];
  for (let i = 0; i < starsParams.number; i++) {
    starsElements[i] = new Star();
  }
}

// redraw the frame
function updateStars() {
  starsCtx.fillStyle = '#07061c';
  starsCtx.fillRect(0, 0, stars.width, stars.height);
  starsElements.forEach(function (s) {
    s.show();
    s.move();
  });

  window.requestAnimationFrame(updateStars);
}
