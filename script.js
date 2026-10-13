'use strict';
// WEBSITE CONFIGURATION: change only this address when Microsoft 365 mail for myais.ae is ready.
const WEBSITE_CONTACT_EMAIL = 'contact@myais.me';

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
