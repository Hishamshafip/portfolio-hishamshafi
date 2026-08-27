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

// Hero headline word-swap — fades the single element out, swaps its text, fades back in
const titleSwap = document.getElementById('titleSwap');
if (titleSwap) {
  const words = titleSwap.dataset.words.split(',');
  let idx = 0;
  setInterval(() => {
    titleSwap.classList.add('is-swapping');
    setTimeout(() => {
      idx = (idx + 1) % words.length;
      titleSwap.textContent = words[idx];
      titleSwap.classList.remove('is-swapping');
    }, 300);
  }, 2600);
}

// Reel-frame rotating hook captions, synced to the progress bar animation (3s)
const hooks = [
  'STOP scrolling →',
  'POV: your ad just converted',
  "This is why your CTR is low",
  '3 seconds to hook them. Go.',
  'Wait for it…',
  'Nobody tells you this about ads',
  "Your competitors don't want you to see this",
  'Made you look. That\'s the job.'
];
const captionEl = document.getElementById('reelCaption');
if (captionEl) {
  let hIdx = 0;
  setInterval(() => {
    hIdx = (hIdx + 1) % hooks.length;
    captionEl.textContent = hooks[hIdx];
  }, 3000);
}
