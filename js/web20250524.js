document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menuToggle');
  const nav = document.getElementById('fullNav');
  const closeBtn = document.getElementById('menuClose');
  const header = document.querySelector('.top-nav');

  menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.add('active');
  });

  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.remove('active');
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
    } else {
      header.style.backgroundColor = 'rgba(0, 0, 0, 0.85)'; // 항상 검정색 유지
    }
  });
});
