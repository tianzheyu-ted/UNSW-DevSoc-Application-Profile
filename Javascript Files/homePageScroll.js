window.addEventListener('load', () => {
  const earthImg = document.getElementById('earthImg');
  const homeContent = document.getElementById('homeContent');
  const homeSection = document.getElementById('homeSection');
  const scrollIndicator = document.getElementById('scrollIndicator');

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const homeHeight = homeSection.offsetHeight;
    const windowHeight = window.innerHeight;

    const scrollableDistance = homeHeight - windowHeight; 
    const rawProgress = scrollTop / scrollableDistance;

    const progress = Math.min(Math.max(rawProgress, 0), 1);

    const translateX = 300 * progress;
    const scale = 1 + 0.25 * progress;
    const rotationDeg = 100 * progress;

    earthImg.style.transform = `translateX(${translateX}px) rotate(${rotationDeg}deg) scale(${scale})`;

    homeContent.style.opacity = progress;
    scrollIndicator.style.opacity = 1 - progress;
  });
});