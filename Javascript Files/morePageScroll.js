const sections = document.querySelectorAll('.page');
const dots = document.querySelectorAll('.dot');

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
});

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        sections[i].scrollIntoView({ behavior: 'smooth' });
    });
});