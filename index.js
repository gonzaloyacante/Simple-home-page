const toggleTheme = () =>
  document.querySelector("html").toggleAttribute("data-dark-mode");

const toggleMenu = () => {
  document.body.classList.toggle("open");
  document.querySelector(".buttonNavMobile").classList.toggle("openMenu");
};
