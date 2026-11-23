const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');

function setMenu(open) {
  toggle?.setAttribute('aria-expanded', String(open));
  toggle?.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  nav?.classList.toggle('open', open);
}

toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));

const facebookToggle = document.querySelector('#facebook-toggle');
const facebookFeed = document.querySelector('#facebook-feed');

if (facebookToggle && facebookFeed) {
  facebookToggle.hidden = false;

  facebookToggle.addEventListener('click', () => {
    const opening = facebookFeed.hidden;
    facebookFeed.hidden = !opening;
    facebookToggle.setAttribute('aria-expanded', String(opening));
    facebookToggle.textContent = opening ? 'Masquer le fil' : 'Afficher le fil ici';

    const frameHost = facebookFeed.querySelector('.facebook-frame');
    if (!opening || frameHost.firstElementChild) return;

    const width = Math.max(180, Math.min(500, Math.floor(frameHost.clientWidth)));
    const pluginUrl = new URL('https://www.facebook.com/plugins/page.php');
    pluginUrl.search = new URLSearchParams({
      href: document.querySelector('#club-facebook').href,
      tabs: 'timeline',
      width: String(width),
      height: '550',
      small_header: 'true',
      show_facepile: 'false',
      adapt_container_width: 'true',
      locale: 'fr_FR',
    });

    const frame = document.createElement('iframe');
    frame.src = pluginUrl.href;
    frame.title = 'Publications Facebook des Géants de Douai';
    frame.width = String(width);
    frame.height = '550';
    frameHost.append(frame);
  });
}
