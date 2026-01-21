document.querySelectorAll(".card").forEach((card, i) => {
  card.style.animationDelay = `${i * 0.18}s`;
});

const glow = document.querySelector('.glow-bg');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    glow.style.left = x + 'px';
    glow.style.top = y + 'px';
});
