const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

// Glassmorphism nav on scroll
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Active nav link highlighting on scroll
const sections = document.querySelectorAll("section[id], header .header__container");
const navLinkAnchors = document.querySelectorAll(".nav__links .link a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinkAnchors.forEach((link) => {
    link.classList.remove("active-link");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active-link");
    }
  });
});

const mixer = mixitup(".project__grid", {
  animation: {
    duration: 400,
    effects: "fade translateY(20px)",
    easing: "ease-in-out",
  },
});

const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 800,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  reset: false,
};

// header container
ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
  distance: "60px",
  delay: 300,
});

ScrollReveal().reveal(".header__content h4", {
  ...scrollRevealOption,
  delay: 400,
});

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 600,
});

ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 800,
});

ScrollReveal().reveal(".header__content .btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
  distance: "60px",
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 300,
});

ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content h4", {
  ...scrollRevealOption,
  delay: 700,
});

ScrollReveal().reveal(".about__btns", {
  ...scrollRevealOption,
  delay: 900,
});

// banner container
ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 200,
});

// project container
ScrollReveal().reveal(".project__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".project__card", {
  ...scrollRevealOption,
  interval: 150,
});

// service container
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 150,
});

// client container
ScrollReveal().reveal(".client__container .section__subheader", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".client__container .section__header", {
  ...scrollRevealOption,
  delay: 200,
});

// contact container
ScrollReveal().reveal(".contact__container .section__subheader", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".contact__container .section__header", {
  ...scrollRevealOption,
  delay: 200,
});

ScrollReveal().reveal(".contact__form", {
  ...scrollRevealOption,
  delay: 400,
});

// footer
ScrollReveal().reveal(".footer__col", {
  ...scrollRevealOption,
  interval: 200,
});