const navbar = document.querySelector(".navbar"),
  menuBtn = document.querySelector("#menu-btn"),
  userBtn = document.querySelector("#user-btn"),
  profile = document.querySelector(".profile");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
  profile.classList.remove("active");
});

userBtn.addEventListener("click", () => {
  profile.classList.toggle("active");
  navbar.classList.remove("active");
});

window.onscroll = () => {
  navbar.classList.remove("active");
  profile.classList.remove("active");
};
