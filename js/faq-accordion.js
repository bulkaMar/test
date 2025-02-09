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
