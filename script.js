// === Handle Theme Toggle & localStorage ===
const themeToggleBtn = document.getElementById('themeToggleBtn');

// Apply stored theme on load
window.addEventListener('DOMContentLoaded', () => {
  const storedTheme = localStorage.getItem('theme') || 'light';
  document.body.classList.add(storedTheme);
});

// Toggle and store theme preference
themeToggleBtn.addEventListener('click', () => {
  const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.body.classList.remove(currentTheme);
  document.body.classList.add(newTheme);
  localStorage.setItem('theme', newTheme);
});

// === Trigger Animation ===
const box = document.getElementById('animateMe');
const triggerAnimationBtn = document.getElementById('triggerAnimation');

triggerAnimationBtn.addEventListener('click', () => {
  box.classList.add('animate-jump');

  // Remove the animation class after it runs to allow re-trigger
  setTimeout(() => {
    box.classList.remove('animate-jump');
  }, 500);
});
