const body = document.body;
const lightIcon = document.getElementById("lightModeIcon");
const darkIcon = document.getElementById("darkModeIcon");

// Toggle dark mode
lightIcon.addEventListener("click", () => {
  body.classList.remove("dark");
  body.classList.add("light");
});

darkIcon.addEventListener("click", () => {
  body.classList.remove("light");
  body.classList.add("dark");
});
