//
// Carousel controls
//
let carouselCurrentIndex = 0;
setInterval(() => {
  if (carouselCurrentIndex < 3) {
    carouselCurrentIndex++;
  } else {
    carouselCurrentIndex = 0;
  }
  const carouselContainer = document.querySelector("#carousel-container");
  if (carouselContainer) {
    const carouselItem = document.querySelector(
      "#carousel-" + carouselCurrentIndex
    );
    carouselContainer.scrollLeft =
      carouselItem.offsetLeft - carouselContainer.offsetLeft;
    const carouselIndicators = document.querySelectorAll(".carousel-indicator");
    carouselIndicators.forEach((indicator, index) => {
      if (index === carouselCurrentIndex) {
        indicator.classList.remove("opacity-25");
        indicator.classList.remove("w-2");
        indicator.classList.add("w-16");
      } else {
        indicator.classList.add("opacity-25");
        indicator.classList.add("w-2");
        indicator.classList.remove("w-16");
      }
    });
  }
}, 3000);
