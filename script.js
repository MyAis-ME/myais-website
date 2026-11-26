'use strict';
// WEBSITE CONFIGURATION: change only this address when Microsoft 365 mail for myais.ae is ready.
const WEBSITE_CONTACT_EMAIL = 'contact@myais.ae';

// Contact destinations derive from one configuration value. No backend or tracking required.
for (const el of document.querySelectorAll('.email-address')) {
  el.textContent = WEBSITE_CONTACT_EMAIL;
  el.href = `mailto:${WEBSITE_CONTACT_EMAIL}`;
}
for (const el of document.querySelectorAll('.email-link')) {
  const subject = el.dataset.subject || 'MyAiS enquiry';
  el.href = `mailto:${WEBSITE_CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}
const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());

const menu = document.querySelector('.menu-button');
const nav = document.querySelector('#primary-navigation');
if (menu && nav) {
  const setOpen = (open) => {
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    nav.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
  };
  menu.addEventListener('click', () => setOpen(menu.getAttribute('aria-expanded') !== 'true'));
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
  window.addEventListener('resize', () => { if (window.innerWidth > 920) setOpen(false); });
}

/* R005 — accessible modal image viewer; ordinary image links remain as fallback. */
function installImageViewer(){
  const viewer = document.querySelector('#image-viewer');
  if (!viewer || typeof viewer.showModal !== 'function') return;
  const picture = viewer.querySelector('.image-viewer-picture');
  const close = viewer.querySelector('.image-viewer-close');
  let opener = null;
  for (const link of document.querySelectorAll('a.image-enlarge')) {
    const thumb = link.querySelector('img');
    if (!thumb) continue;
    link.setAttribute('aria-haspopup','dialog');
    link.setAttribute('aria-label','Enlarge image: ' + thumb.alt);
    link.addEventListener('click', (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || viewer.open) return;
      picture.alt = thumb.alt;
      picture.src = link.href;
      opener = link;
      try { viewer.showModal(); } catch (_) { opener = null; picture.removeAttribute('src'); return; }
      event.preventDefault();
      document.documentElement.classList.add('image-viewer-open');
      close.focus({preventScroll:true});
    });
  }
  close.addEventListener('click', () => viewer.close());
  viewer.addEventListener('click', (event) => {
    if (event.target === viewer) viewer.close();
  });
  viewer.addEventListener('close', () => {
    document.documentElement.classList.remove('image-viewer-open');
    picture.removeAttribute('src');
    picture.alt = '';
    if (opener) opener.focus({preventScroll:true});
    opener = null;
  });
}
installImageViewer();

/* Site-wide suppression of the normal browser context menu. */
document.addEventListener('contextmenu', (event) => event.preventDefault(), {capture:true});
