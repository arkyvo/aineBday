document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const audio = document.querySelector('.audio');
  const mainBackground = document.getElementById('mainBackground');
  const card = document.getElementById('card');
  const time = document.getElementById('time');
  let currentIndex = 0;
  const fadeDuration = 800; // ms

  // --- SLIDE CHANGING FUNCTION ---
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    slides[currentIndex].classList.remove('active');
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].classList.add('active');
    }, fadeDuration);
  }

  // --- MUSIC PLAY/PAUSE TOGGLE ---
  let isPlaying = false;
  function toggleMusic() {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    isPlaying = !isPlaying;
  }

  // --- MAIN CLICK EVENT ---
  mainBackground.addEventListener('click', (event) => {
    // Only run nextSlide() if the click is NOT on interactive elements
    if (!event.target.closest('#card') && !event.target.closest('#time')) {
      nextSlide();
      toggleMusic(); // Play or pause when background is clicked
    }
  });

  // --- CARD AND TIME CLICK EVENTS ---
  card.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent triggering mainBackground click
    window.location.href = '../Rsrc/card.html';
  });

  time.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent triggering mainBackground click
    window.location.href = '../Rsrc/time.html';
  });
});
