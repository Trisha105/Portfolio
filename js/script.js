// =========================
// Portfolio interactions
// =========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const currentYear = document.getElementById("currentYear");

// Mobile navigation
if (menuToggle && navLinks) {
  function setMenuState(isOpen) {
    navLinks.classList.toggle("open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
    menuToggle.textContent = isOpen ? "✕" : "☰";
  }

  menuToggle.addEventListener("click", () => {
    setMenuState(!navLinks.classList.contains("open"));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      setMenuState(false);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navLinks.classList.contains("open")) {
      setMenuState(false);
      menuToggle.focus();
    }
  });
}

// Light / dark theme
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
}

function updateThemeIcon() {
  if (!themeToggle) return;
  themeToggle.textContent = document.body.classList.contains("dark-theme")
    ? "☀️"
    : "🌙";
}

updateThemeIcon();

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";

    localStorage.setItem("portfolio-theme", theme);
    updateThemeIcon();
  });
}

// Active navigation link on scroll
const sections = document.querySelectorAll("main section[id]");
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

function setActiveLink() {
  let currentSection = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 140;
    if (window.scrollY >= sectionTop) {
      currentSection = section.id;
    }
  });

  navAnchors.forEach((link) => {
    const isCurrent = link.getAttribute("href") === "#" + currentSection;

    link.classList.toggle("active", isCurrent);

    if (isCurrent) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

window.addEventListener("scroll", setActiveLink, { passive: true });
setActiveLink();

// Simple client-side form validation
if (contactForm && formMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
      formMessage.textContent = "Please complete all fields before submitting.";
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      formMessage.textContent = "Please enter a valid email address.";
      return;
    }

    const emailSubject = encodeURIComponent(subject);
    const emailBody = encodeURIComponent(
      "Name: " + name + "\n" +
      "Email: " + email + "\n\n" +
      message
    );

    formMessage.textContent =
      "Opening your email app with the message ready to send...";

    window.location.href =
      "mailto:jannattrisha018@gmail.com?subject=" +
      emailSubject +
      "&body=" +
      emailBody;

    contactForm.reset();
  });
}

// Footer year
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}


// Reveal selected content as it enters the viewport
const revealItems = document.querySelectorAll(
  ".section-heading, .info-card, .skill-card, .project-card, .research-card, .contact-form"
);

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion && "IntersectionObserver" in window) {
  revealItems.forEach((item) => item.classList.add("reveal-item"));

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
