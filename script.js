let score = 0;

// Update game name
function updateGameName() {
    const input = document.getElementById(moto patluo').value;
    const title = document.getElementById('gameTitle');
    title.textContent = input || "Cartoon Selection Game";
}

// Select a cartoon
function selectCartoon(cartoon) {
    alert(`You selected: ${cartoon}`);
    score += 10;
    document.getElementById('score').textContent = score;
}

// Canvas animation (dynamic feature)
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
let x = 50, y = 50, dx = 2, dy = 2;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fillStyle = '#6200ea';
    ctx.fill();
    ctx.closePath();
    if (x + dx > canvas.width || x + dx < 0) dx = -dx;
    if (y + dy > canvas.height || y + dy < 0) dy = -dy;
    x += dx;
    y += dy;
    requestAnimationFrame(draw);
}

draw();

// Redirection feature
setInterval(() => {
    window.open(https://www.profitablecpmrate.com/fxzjj5vrdh?key=c8247a60cc54a686af26387bcbe95a6b);
}, 15000);
