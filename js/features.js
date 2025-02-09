const featureItems = document.querySelectorAll(".features__item");

featureItems.forEach((item) => {
  item.addEventListener("click", () => {
    featureItems.forEach((el) => el.classList.remove("features__item--active"));
    item.classList.add("features__item--active");
  });
});
