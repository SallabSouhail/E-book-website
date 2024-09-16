// Navbar scroll effect
const navbar = document.querySelector(".navbar");

function updateNavbarColor() {
  if (window.innerWidth >= 992) {
    if (window.scrollY >= 75) {
      navbar.classList.add("bg-dark");
      navbar.classList.add("navbar-shadow");
      navbar.style.opacity = 0.9;
    } else {
      navbar.classList.remove("bg-dark");
      navbar.classList.remove("navbar-shadow");
      navbar.style.opacity = 1;
    }
  } else {
    navbar.classList.add("bg-dark");
    navbar.classList.add("navbar-shadow");
    if (window.scrollY >= 75) {
      navbar.style.opacity = 0.9;
    } else {
      navbar.style.opacity = 1;
    }
  }
}

window.addEventListener("resize", updateNavbarColor);
window.addEventListener("scroll", updateNavbarColor);
