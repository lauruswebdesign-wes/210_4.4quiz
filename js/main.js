const body = document.body;
const lightIcon = document.getElementById("lightModeIcon");
const darkIcon = document.getElementById("darkModeIcon");
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

// Dark/light mode
lightIcon.addEventListener("click", () => {
  body.classList.remove("dark");
  body.classList.add("light");
});

darkIcon.addEventListener("click", () => {
  body.classList.remove("light");
  body.classList.add("dark");
});

// Sidebar toggle on mobile
menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});
