const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');

function setMenu(open) {
  toggle?.setAttribute('aria-expanded', String(open));
  toggle?.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  nav?.classList.toggle('open', open);
}

toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
