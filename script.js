// Add project URLs here when they are ready.
const projectUrls = {
  "tiny-tales": "https://l05877962-tech.github.io/Tiny-Tales/",
  "cozy-loop": "https://l05877962-tech.github.io/Cozy-Loop/",
  "digital-world": "https://l05877962-tech.github.io/My-Digital-World/"
};

// Enter the full international number without "+" or spaces.
const whatsappNumber = "";

const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark" || savedTheme === "light") {
  root.dataset.theme = savedTheme;
}

function updateThemeButton() {
  const isDark = root.dataset.theme === "dark";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", isDark ? "تفعيل الوضع النهاري" : "تفعيل الوضع الليلي");
}

updateThemeButton();

themeToggle.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = nextTheme;
  localStorage.setItem("portfolio-theme", nextTheme);
  updateThemeButton();
});

document.querySelectorAll("[data-project-link]").forEach((link) => {
  const url = projectUrls[link.dataset.projectLink].trim();

  if (url) {
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.setAttribute("aria-disabled", "true");
    link.title = "أضيفي رابط المشروع في ملف script.js";
    link.addEventListener("click", (event) => event.preventDefault());
  }
});

const whatsappLink = document.querySelector(".whatsapp-link");
const normalizedWhatsAppNumber = whatsappNumber.replace(/\D/g, "");

if (normalizedWhatsAppNumber) {
  whatsappLink.href = `https://wa.me/${normalizedWhatsAppNumber}`;
  whatsappLink.removeAttribute("aria-disabled");
  whatsappLink.target = "_blank";
  whatsappLink.rel = "noopener noreferrer";
} else {
  whatsappLink.title = "أضيفي رقم الواتساب الدولي في ملف script.js";
  whatsappLink.addEventListener("click", (event) => event.preventDefault());
}

document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".site-nav a[aria-current='location']")?.removeAttribute("aria-current");
    link.setAttribute("aria-current", "location");
  });
});
