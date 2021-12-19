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
  const mobileMenu = document.querySelector(".navbar-bottom");
  mobileMenu.classList.toggle("navbar-bottom--visible");

  if (mobileMenu.classList.contains("navbar-bottom--visible")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "";
  }
});

const bookingkBtn = document.querySelector(".booking__button");
const modalOverlay = document.querySelector(".modal__overlay");
const modalDiaglog = document.querySelector(".modal__dialog");
const closeBtnModal = document.querySelector(".button__close");
const cardBooks = document.querySelectorAll(".card__button");
const body = document.querySelector("body");
//Поиск
const searchBtn = document.querySelector(".search__button");
const searchValue = document.querySelector(".search__input");
//форма
const form = document.querySelector(".form");

for (let cardBook of cardBooks) {
  cardBook.addEventListener("click", (event) => {
    modalStyles("1", "visible");
  });
}

bookingkBtn.addEventListener("click", () => {
  modalStyles("1", "visible");
});

closeBtnModal.addEventListener("click", () => {
  modalStyles("0", "hidden");
  body.style.overflow = "";
});

function modalStyles(opasity, visibility) {
  modalOverlay.style.opacity = opasity;
  modalOverlay.style.visibility = visibility;
  modalDiaglog.style.opacity = opasity;
  modalDiaglog.style.visibility = visibility;
  body.style.overflow = "hidden";
}
//форма
searchBtn.addEventListener("click", (event) => {
  console.log(event);
  searchValue.value = "";
});
searchValue.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchValue.value = "";
  }
  console.log(event);
});
form.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchValue.value = "";
  }
  console.log(event);
});
