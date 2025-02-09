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
