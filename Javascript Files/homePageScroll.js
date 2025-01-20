document.addEventListener("scroll", function () {
  const homeImage = document.querySelector(".home-img");
  const homeContent = document.querySelector(".home-content");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    homeImage.style.width = "50%";
    homeImage.style.height = "50vh";
    homeImage.style.transform = "translateX(-50%)";

    homeContent.style.opacity = "1";
    homeContent.style.transform = "translateX(0)";
  } else {
    homeImage.style.width = "100%";
    homeImage.style.height = "100vh";
    homeImage.style.transform = "translateX(0)";

    homeContent.style.opacity = "0";
    homeContent.style.transform = "translateX(100%)";
  }
});