
// Highlight active nav link
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a => {
    const href = a.getAttribute('href');
    if ((path === '' && href === 'index.html') || href === path) a.classList.add('active');
  });
})();

// Simple language toggle placeholder
document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-toggle-lang]');
  if(!el) return;
  alert('Language toggle placeholder. We can wire EN/AR routing to paired pages.');
});
