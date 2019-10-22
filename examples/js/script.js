const root = document.querySelector(":root");
const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
  root.style.getPropertyValue("--background-color") === "black"
    ? root.style.setProperty("--background-color", "white")
    : root.style.setProperty("--background-color", "black");

  root.style.getPropertyValue("--text-color") === "white"
    ? root.style.setProperty("--text-color", "black")
    : root.style.setProperty("--text-color", "white");
});
