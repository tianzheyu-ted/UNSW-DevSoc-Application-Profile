window.addEventListener('load', () => {
  const earthImg = document.getElementById('earthImg');
  const skillContent = document.getElementById('skillContent');
  const skillSection = document.getElementById('skillSection');
  const scrollIndicator = document.getElementById('scrollIndicator');
  
  window.addEventListener('scroll', () => {

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const skillHeight = skillSection.offsetHeight;
    const windowHeight = window.innerHeight;

    const scrollableDistance = skillHeight - windowHeight; 
    const rawProgress = scrollTop / scrollableDistance;

    const progress = Math.min(Math.max(rawProgress, 0), 1);

    const translateX = -400 * progress;
    const scale = 1 + 0.3 * progress;
    const rotationDeg = 120 * progress;

    earthImg.style.transform = `translateX(${translateX}px) rotate(${rotationDeg}deg) scale(${scale})`;

    skillContent.style.opacity = progress;
    scrollIndicator.style.opacity = 1 - progress;
  });
});