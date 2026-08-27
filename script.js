// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const burger = document.getElementById('burger');
const links = document.querySelector('.nav__links');
if (burger && links) {
  burger.addEventListener('click', () => {
    const isOpen = links.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(isOpen));
  });
  links.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      links.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    })
  );
}

// Hero headline word-swap
const swapItems = document.querySelectorAll('.swap-item');
if (swapItems.length) {
  let idx = 0;
  setInterval(() => {
    swapItems[idx].classList.remove('is-active');
    idx = (idx + 1) % swapItems.length;
    swapItems[idx].classList.add('is-active');
  }, 2400);
}

// Reel-frame rotating hook captions, synced to the progress bar animation (3s)
const hooks = [
  'STOP scrolling →',
  'POV: your ad just converted',
  "This is why your CTR is low",
  '3 seconds to hook them',
  'Wait for it…',
  'Nobody tells you this about ads'
];
const captionEl = document.getElementById('reelCaption');
if (captionEl) {
  let hIdx = 0;
  setInterval(() => {
    hIdx = (hIdx + 1) % hooks.length;
    captionEl.textContent = hooks[hIdx];
  }, 3000);
}
