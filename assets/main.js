document.querySelectorAll(".card").forEach((card, i) => {
  card.style.animationDelay = `${i * 0.18}s`;
});

document.addEventListener('mousemove', (e) => {
    const glow = document.querySelector('.glow-bg');
    if (glow) {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
    }
});
