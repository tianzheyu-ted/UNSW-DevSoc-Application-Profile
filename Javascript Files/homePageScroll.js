window.addEventListener('load', () => {
  const earthImg = document.getElementById('earthImg');
  const homeContent = document.getElementById('homeContent');
  const homeSection = document.getElementById('homeSection');

  window.addEventListener('scroll', () => {
    // 1. 获取滚动距离和区块高度
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const homeHeight = homeSection.offsetHeight;       // home 区块总高度
    const windowHeight = window.innerHeight;           // 浏览器视窗高度

    // 2. 计算滚动进度(0 ~ 1)
    //   - 当滚动 top = 0 时，progress = 0
    //   - 当滚动到区块底部时，progress = 1
    const scrollableDistance = homeHeight - windowHeight; 
    const rawProgress = scrollTop / scrollableDistance;
    // 进度限制在 0~1 之间
    const progress = Math.min(Math.max(rawProgress, 0), 1);

    // 3. 计算地球的移动与放大
    //    这里假设：progress=0 时不移动也不放大；progress=1 时向右移 300px 并放大到 1.5倍
    const translateX = 300 * progress; // 往右移动 0~300 px
    const scale = 1 + 0.25 * progress;  // 放大 1~1.5倍

    // 注意：如果要让图片看起来是相对于自己中心点移动，
    // 最好先让其在CSS中本来就居中，然后再加上X平移。
    earthImg.style.transform = `translateX(${translateX}px) scale(${scale})`;

    // 4. 让文字渐显
    //    progress=0 时透明度=0；progress=1 时透明度=1
    homeContent.style.opacity = progress;
  });
});