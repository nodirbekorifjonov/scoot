const navAnim = () => {
  const burger = document.querySelector(".burger");
  const toggleWrapper = document.querySelector(".toggle-wrapper");
  const cover = document.querySelector(".cover");

  burger.addEventListener("click", () => {
    toggleWrapper.classList.toggle("show-nav");

    burger.classList.toggle("toggle");

    cover.classList.toggle("show-cover");
  });
};
navAnim();
