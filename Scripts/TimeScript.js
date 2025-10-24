// ========== TIMER FUNCTIONALITY ==========
const startDate = new Date("2023-05-22T18:30:00");

// Get the HTML elements
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

// Function to update the timer
function updateTimer() {
  const now = new Date();
  const diff = now - startDate; // Difference in milliseconds

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Update the HTML
  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
}

// Run timer every second
setInterval(updateTimer, 1000);
updateTimer();


// ========== MUSIC PLAY/PAUSE FUNCTIONALITY ==========
document.addEventListener('DOMContentLoaded', () => {
  const audio = document.querySelector('.audio');
  const tMainBackground = document.getElementById('tMainBackground');
  const backButton = document.getElementById('backButton');
  let isPlaying = false;

  // Toggle play/pause
  function toggleMusic() {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    isPlaying = !isPlaying;
  }

  // Click anywhere on background to toggle music
  tMainBackground.addEventListener('click', (event) => {
    // Ignore click if user clicked the back button
    if (!event.target.closest('#backButton')) {
      toggleMusic();
    }
  });

  // Prevent background click when back button is pressed
  backButton.addEventListener('click', (event) => {
    event.stopPropagation();
  });
});
