window.addEventListener('load', () => {
  const earthImg = document.getElementById('earthImg');
  const experienceContent = document.getElementById('experienceContent');
  const experienceSection = document.getElementById('experienceSection');
  
  window.addEventListener('scroll', () => {

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const experienceHeight = experienceSection.offsetHeight;
    const windowHeight = window.innerHeight;

    const scrollableDistance = experienceHeight - windowHeight; 
    const rawProgress = scrollTop / scrollableDistance;

    const progress = Math.min(Math.max(rawProgress, 0), 1);

    const translateY = -350 * progress;
    const scale = 1 + 0.4 * progress;
    const rotationDeg = 135 * progress;

    earthImg.style.transform = `translateY(${translateY}px) rotate(${rotationDeg}deg) scale(${scale})`;

    experienceContent.style.opacity = progress;
  });
});