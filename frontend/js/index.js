// Hamburger-Menu

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.querySelector(".hamburger-button");
  const mobileMenu = document.querySelector(".mobile-menu");
  const body = document.querySelector("body");
  const button = document.querySelector("button");
  const icon = button.firstElementChild;
  console.log(icon);

  hamburgerMenu.addEventListener("click", (e) => {
    mobileMenu.classList.toggle("active");
    body.classList.toggle("overflow");
    icon.classList.toggle("bi-toggle-on");
  });
});

// Navbar

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("nav");
  const container = document.querySelector(".container");
  document.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      navbar.classList.remove("p-3");
      navbar.classList.add("px-3");
      navbar.classList.add("nav-col");
      container.classList.add("vh0");
    } else {
      navbar.classList.remove("nav-col");
      navbar.classList.add("p-3");
    }
  });
});
