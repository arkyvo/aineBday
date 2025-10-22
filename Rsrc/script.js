document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card-border');
  const dynamicBg = document.getElementById('card-background');
  let currentBg = '';

  function updateVisuals() {
    const viewportCenter = window.innerHeight / 2;
    let closestCard = null;
    let minDistance = Infinity;

    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.top + rect.height / 2;
      const distance = Math.abs(viewportCenter - cardCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestCard = card;
      }

      // Opacity fade logic
      const maxDistance = window.innerHeight * 0.6;
      const opacity = Math.max(1, 1 - distance / maxDistance);
      card.style.opacity = opacity;
      card.style.backgroundColor = `rgba(249, 236, 204, ${opacity * 1})`;
    });

      if (closestCard) {
    const photoDiv = closestCard.querySelector('.card-photo');
    const bgImage = window.getComputedStyle(photoDiv).backgroundImage; // ✅ use computed style

    // Only change if it's a different image
    if (bgImage !== currentBg) {
      currentBg = bgImage;
      dynamicBg.style.opacity = 0; // fade out current image first

      setTimeout(() => {
        dynamicBg.style.backgroundImage = bgImage;
        dynamicBg.style.opacity = 0.7; // fade new one in
      }, 300);
    }
  }
  }

  const content = document.getElementById('cContent');
content.addEventListener('scroll', updateVisuals);
});
