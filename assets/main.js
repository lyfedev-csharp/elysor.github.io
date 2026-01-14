// Existing card animation code
document.querySelectorAll(".card").forEach((card, i) => {
  card.style.animationDelay = `${i * 0.18}s`;
});

// --- NEW: LOGIC FOR REVIEW SLIDER ---
const track = document.querySelector('.slider-track');
const container = document.querySelector('.slider-container');

if (track && container) {
  const cards = track.querySelectorAll('.review-card');
  const cardCount = cards.length;

  if (cardCount > 5) {
    // MORE THAN 5: Duplicate contents for infinite scroll
    cards.forEach(card => {
      let clone = card.cloneNode(true);
      track.appendChild(clone);
    });
    // Add class to trigger CSS animation
    track.classList.add('scroll-active');
  } else {
    // 5 OR LESS: Center them and allow manual scroll
    track.classList.add('scroll-static');
    container.style.overflowX = 'auto'; // Enable swipe/scroll
    container.style.justifyContent = 'center';
    
    // Remove the fade masks on the sides since it's not infinite
    container.classList.add('no-mask');
  }
}
