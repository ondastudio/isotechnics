const section = document.querySelector(".book-call-modal");
const bookBtn = document.querySelectorAll(".blue-button_wrap");
const cal = document.querySelector(".calendly-inline-widget");
const calContainer = document.querySelector(".calendly-container");

bookBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    cal.style.display = "none";
    calContainer.style.maxHeight = "100%";
    setTimeout(() => {
      const maxH = calContainer.getBoundingClientRect().height;
      calContainer.style.maxHeight = maxH + "px";
      cal.style.display = "block";
    }, 100);
  });
});

window.addEventListener("resize", () => {
  if (section.style.display !== "none") {
    cal.style.display = "none";
    calContainer.style.maxHeight = "100%";
    setTimeout(() => {
      const maxH = calContainer.getBoundingClientRect().height;
      calContainer.style.maxHeight = maxH + "px";
      cal.style.display = "block";
    }, 100);
  }
});
