const sections = document.querySelectorAll('.page');
const dots = document.querySelectorAll('.dot');
const logo = document.querySelector('.logo');
const navLinks = document.querySelectorAll('nav a');

const colors = [
  'rgb(40, 65, 140)',
  'rgb(155, 39, 20)',
  'rgb(239, 124, 163)',
  'rgb(240, 220, 160)',
  'rgb(220, 100, 75)',
  'rgb(247, 230, 77)',
];

document.querySelector('.page-container').addEventListener('scroll', () => {
  let index = 0;
  sections.forEach((section, i) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
      index = i;
    }
  });

  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');

  logo.style.color = colors[index];
  document.documentElement.style.setProperty('--nav-color', colors[index]);
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    sections[i].scrollIntoView({ behavior: 'smooth' });
  });
});