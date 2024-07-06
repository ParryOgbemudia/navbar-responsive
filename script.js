const hamburger = document.querySelector(".nav__hamburger");
const linkContainer = document.querySelector(".nav__menu");
const links = document.querySelectorAll(".nav__menu__link");

// Define the function before using it
const closeMedia = function () {
  links.forEach((link) => {
    link.addEventListener("click", () => {
      linkContainer.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });
};

hamburger.addEventListener("click", function (e) {
  e.target.classList.contains("nav__hamburger__line");
  linkContainer.classList.toggle("active");
  hamburger.classList.toggle("active");
});

const mediaQuery = window.matchMedia("(max-width: 550px)");

const handleMediaChange = (e) => {
  if (e.matches) {
    closeMedia();
  } else {
    // Optionally handle larger screens
  }
};

mediaQuery.addEventListener("change", handleMediaChange);

// Initial check
handleMediaChange(mediaQuery);
