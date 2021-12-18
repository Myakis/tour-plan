const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: "horizontal",
  loop: true,

  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },

  // And if we need scrollbar
});

const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", () => {
  document
    .querySelector(".navbar-bottom")
    .classList.toggle("navbar-bottom--visible");
});
