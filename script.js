// Search functionality
document.getElementById('search-bar').addEventListener('input', function() {
  const query = this.value.toLowerCase();
  document.querySelectorAll('.game-card').forEach(card => {
    const title = card.querySelector('h2').textContent.toLowerCase();
    card.style.display = title.includes(query) ? 'block' : 'none';
  });
});

// Form submission handling
document.querySelector('form[action="/submit-game"]').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('شكراً لك! تم إرسال اقتراح اللعبة بنجاح.');
  this.reset();
});

// Rating system
document.querySelectorAll('.rating i').forEach((star, index, stars) => {
  star.addEventListener('click', () => {
    stars.forEach((s, i) => {
      s.classList.toggle('text-yellow-500', i <= index);
      s.classList.toggle('text-gray-300', i > index);
    });
  });
});

// Dark mode toggle
document.getElementById('toggle-darkmode').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  const icon = this.querySelector('i');
  if (document.body.classList.contains('dark-mode')) {
    icon.classList.replace('fa-moon', 'fa-sun');
    this.textContent = ' تبديل الوضع النهاري';
  } else {
    icon.classList.replace('fa-sun', 'fa-moon');
    this.textContent = ' تبديل الوضع الليلي';
  }
});

// Alert function for download buttons
function showAlert(game) {
  alert(`سيبدأ تحميل ${game}... (هذا مثال فقط)`);
}