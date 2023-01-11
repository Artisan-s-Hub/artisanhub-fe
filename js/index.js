const nav = document.querySelector(".navigation");

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop >= 100) {
    nav.classList.add("bg-yellow");
  } else {
    nav.classList.remove("bg-yellow");
  }
});
