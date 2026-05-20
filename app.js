const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('#navMenu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('open');
  });
}

const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}
