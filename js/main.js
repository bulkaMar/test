const body = document.querySelector("body");
const header = document.querySelector(".header");
const btnSub = document.querySelector(".header__menu-btn");
const navLinks = document.querySelector(".header__nav-menu");

btnSub.addEventListener("click", () => {
  body.classList.toggle("overflow-hidden");
  header.classList.toggle("nav-visible");
});

navLinks.addEventListener("click", () => {
  body.classList.remove("overflow-hidden");
  header.classList.remove("nav-visible");
});

const items = document.querySelectorAll(".live-events__item");

items.forEach((item) => {
  item.addEventListener("click", () => {
    items.forEach((el) =>
      el.classList.remove("live-events__item--highlighted")
    );
    item.classList.add("live-events__item--highlighted");
  });
});
const featureItems = document.querySelectorAll(".features__item");

featureItems.forEach((item) => {
  item.addEventListener("click", () => {
    featureItems.forEach((el) => el.classList.remove("features__item--active"));
    item.classList.add("features__item--active");
  });
});

const languageSelect = document.querySelector(".header__language-select");
const selectedLanguage = document.querySelector(".header__language-selected");
const languageOptions = document.querySelectorAll(".header__language-option");

selectedLanguage.addEventListener("click", () => {
  languageSelect.classList.toggle("open");
});

languageOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const imgSrc = option.querySelector("img").src;
    const langCode = option.textContent.trim();

    selectedLanguage.querySelector("img").src = imgSrc;
    selectedLanguage.querySelector("span").textContent = langCode;

    languageSelect.classList.remove("open");
  });
});

document.addEventListener("click", (event) => {
  if (!languageSelect.contains(event.target)) {
    languageSelect.classList.remove("open");
  }
});

document.querySelectorAll(".faq__question").forEach((button) => {
  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    document.querySelectorAll(".faq__question").forEach((btn) => {
      btn.setAttribute("aria-expanded", "false");
    });

    button.setAttribute("aria-expanded", !isExpanded);
    if (!isExpanded) {
      button.parentElement.style.borderRadius = "0px 0px 6px 6px";
    }
  });
});
