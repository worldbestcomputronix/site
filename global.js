document.addEventListener("DOMContentLoaded", () => {

  // DARK / LIGHT MODE
  const toggle = document.getElementById("toggle");
  if (toggle) {
    toggle.onclick = () => {
      document.body.classList.toggle("light");
      localStorage.setItem(
        "theme",
        document.body.classList.contains("light") ? "light" : "dark"
      );
    };
  }

  // LOAD SAVED THEME
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
  }

  // CURSOR GLOW (SITE-WIDE)
  const cursor = document.querySelector(".cursor");
  if (cursor) {
    document.addEventListener("mousemove", e => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });
  }

});
