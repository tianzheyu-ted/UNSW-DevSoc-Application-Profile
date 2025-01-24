window.addEventListener('load', () => {
  const earthImg = document.getElementById('earthImg');
  const educationContent = document.getElementById('educationContent');
  const educationSection = document.getElementById('educationSection');
  const scrollIndicator = document.getElementById('scrollIndicator');
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const educationHeight = educationSection.offsetHeight;
    const windowHeight = window.innerHeight;

    const scrollableDistance = educationHeight - windowHeight; 
    const rawProgress = scrollTop / scrollableDistance;

    const progress = Math.min(Math.max(rawProgress, 0), 1);

    const translateY = 500 * progress;
    const scale = 1 + 0.7 * progress;
    const rotationDeg = -155 * progress;

    earthImg.style.transform = `translateY(${translateY}px) rotate(${rotationDeg}deg) scale(${scale})`;

    educationContent.style.opacity = progress;
    scrollIndicator.style.opacity = 1 - progress;
  });
});