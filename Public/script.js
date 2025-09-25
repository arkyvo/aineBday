document.addEventListener('DOMContentLoaded', () => {
      const slides = document.querySelectorAll('.slide');
      let currentIndex = 0;
      const fadeDuration = 800; // ms
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
      document.getElementById('mainBackground').addEventListener('click', nextSlide);
    });
document.addEventListener('DOMContentLoaded', () => {
      const slides = document.querySelectorAll('.slide');
      let currentIndex = 0;
      const fadeDuration = 800; // ms
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
      document.getElementById('mainBackground').addEventListener('click', nextSlide);
    });