// main.js

// Atualiza automaticamente o ano no rodapé
document.addEventListener("DOMContentLoaded", () => {
  const ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();

  // Carregar preferência de tema salva
  const savedTheme = localStorage.getItem("theme");
  const darkToggle = document.getElementById("darkToggle");

  if (savedTheme === "light") {
    document.body.classList.add("light");
    if (darkToggle) darkToggle.textContent = "🌙 Dark";
  } else {
    if (darkToggle) darkToggle.textContent = "☀️ Light";
  }
});

// Menu mobile toggle
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-list");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("open");
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", !expanded);
  });
}

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Dark mode toggle
const darkToggle = document.getElementById("darkToggle");

if (darkToggle) {
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
      darkToggle.textContent = "🌙 Dark";
      localStorage.setItem("theme", "light");
    } else {
      darkToggle.textContent = "☀️ Light";
      localStorage.setItem("theme", "dark");
    }
  });
}
