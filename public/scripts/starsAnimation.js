// DOM selectors
const stars = document.getElementById('canvas-stars');
const starsCtx = stars.getContext('2d');

// global variables
let screen,
  starsElements,
  animationId,
  frameCount = 0,
  starsParams = {
    speed: 0.2,
    number: 150,
    extinction: 4,
    maxOpacity: 0.3
  };

// star constructor
class Star {
  constructor() {
    this.x = Math.random() * stars.width;
    this.y = Math.random() * stars.height;
    this.z = Math.random() * stars.width;

    // propiedades para realismo
    this.baseOpacity = Math.random() * starsParams.maxOpacity;
    this.twinkleSpeed = 0.02 + Math.random() * 0.03;
    this.sizeFactor = 0.5 + Math.random(); // tamaño variable
    this.phase = Math.random() * Math.PI * 2;
    this.color = getStarBlueColor(this.baseOpacity);

    this.move = function () {
      this.z -= starsParams.speed;
      if (this.z <= 0) {
        this.x = Math.random() * stars.width;
        this.y = Math.random() * stars.height;
        this.z = stars.width;
        this.baseOpacity = Math.random() * starsParams.maxOpacity;
        this.sizeFactor = 0.5 + Math.random();
        this.twinkleSpeed = 0.02 + Math.random() * 0.03;
        this.phase = Math.random() * Math.PI * 2;
      }
    };

    this.show = function () {
      const scale = stars.width / this.z;
      const x = (this.x - screen.c[0]) * scale + screen.c[0];
      const y = (this.y - screen.c[1]) * scale + screen.c[1];
      const rad = scale * this.sizeFactor;

      // Gradiente azulado
      const gradient = starsCtx.createRadialGradient(x, y, 0, x, y, rad * 2);
      gradient.addColorStop(0, this.color);
      gradient.addColorStop(0.5, this.color.replace(/rgba\(([^,]+),([^,]+),([^,]+),([^)\s]+)\)/, 'rgba($1,$2,$3,0.2)'));
      gradient.addColorStop(1, 'rgba(0,0,0,0)');

      starsCtx.beginPath();
      starsCtx.fillStyle = gradient;
      starsCtx.arc(x, y, rad * 2, 0, Math.PI * 2);
      starsCtx.fill();

      // Destellos cruzados para estrellas grandes
      if (rad > 0.8) {
        starsCtx.strokeStyle = this.color.replace(/rgba\(([^,]+),([^,]+),([^,]+),([^)\s]+)\)/, 'rgba($1,$2,$3,0.4)');
        starsCtx.lineWidth = 0.5;

        starsCtx.beginPath();
        starsCtx.moveTo(x - rad * 3, y);
        starsCtx.lineTo(x + rad * 3, y);
        starsCtx.stroke();

        starsCtx.beginPath();
        starsCtx.moveTo(x, y - rad * 3);
        starsCtx.lineTo(x, y + rad * 3);
        starsCtx.stroke();
      }
    };
  }
}

// run stars
setupStars();
updateStars();

// update stars on resize to keep them centered
window.onresize = function () {
  cancelAnimationFrame(animationId);
  setupStars();
  updateStars();
};

// setup <canvas>, create all the stars
function setupStars() {
  screen = {
    w: window.innerWidth,
    h: window.innerHeight,
    c: [window.innerWidth * 0.5, window.innerHeight * 0.5]
  };

  stars.width = screen.w;
  stars.height = screen.h;

  if (screen.w <= 400) {
    starsParams.speed = 0.15;
    starsParams.number = 90;
  } else {
    starsParams.speed = 0.3;
    starsParams.number = 150;
  }

  starsElements = [];
  for (let i = 0; i < starsParams.number; i++) {
    starsElements[i] = new Star();
  }
}

function getStarBlueColor(opacity) {
  const blues = [
    `rgba(135,206,250,${opacity})`, // sky blue
    `rgba(173,216,230,${opacity})`, // light blue
    `rgba(70,130,180,${opacity})`, // steel blue
    `rgba(0,191,255,${opacity})`, // deep sky blue
    `rgba(25,25,112,${opacity})` // midnight blue
  ];
  return blues[Math.floor(Math.random() * blues.length)];
}

// redraw the frame
function updateStars() {
  frameCount++;
  if (frameCount % 2 === 0) {
    starsCtx.fillStyle = '#07061c';
    starsCtx.fillRect(0, 0, stars.width, stars.height);

    starsElements.forEach(function (s) {
      s.show();
      s.move();
    });
  }
  animationId = window.requestAnimationFrame(updateStars);
}
