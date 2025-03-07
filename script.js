document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('active');
});
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function createConfetti() {
    const x = Math.random() * canvas.width;
    const y = 0;
    const size = Math.random() * 10 + 5;
    const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    const speed = Math.random() * 3 + 1;
    confetti.push({ x, y, size, color, speed });
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach((c, index) => {
        ctx.fillStyle = c.color;
        ctx.fillRect(c.x, c.y, c.size, c.size);
        c.y += c.speed;
        if (c.y > canvas.height) {
            confetti.splice(index, 1);
        }
    });
    requestAnimationFrame(drawConfetti);
}

drawConfetti();

function startConfetti() {
  for (let i = 0; i < 100; i++) {
    createConfetti();
  }
}

// Example: Trigger confetti when audio starts playing
const audio = document.querySelector('audio');
audio.addEventListener('play', () => {
    startConfetti();
});

setInterval(createConfetti, 25);

window.addEventListener('resize', () =>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
