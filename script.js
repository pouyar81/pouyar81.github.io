"use strict";

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const themeToggle = document.querySelector(".theme-toggle");
const typingText = document.querySelector("#typing-text");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function closeMenu() {
  if (!menuToggle || !navLinks) return;
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
}

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  navLinks?.classList.toggle("open", !isOpen);
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Open navigation menu" : "Close navigation menu"
  );
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 720) closeMenu();
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    const target = targetId ? document.querySelector(targetId) : null;
    if (!target) return;

    event.preventDefault();
    closeMenu();
    target.scrollIntoView({
      behavior: reducedMotion.matches ? "auto" : "smooth",
      block: "start",
    });
    history.pushState(null, "", targetId);
  });
});

const preferredTheme = localStorage.getItem("portfolio-theme");
if (preferredTheme) {
  document.documentElement.dataset.theme = preferredTheme;
} else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
  document.documentElement.dataset.theme = "light";
}

themeToggle?.addEventListener("click", () => {
  const nextTheme =
    document.documentElement.dataset.theme === "light" ? "dark" : "light";
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("portfolio-theme", nextTheme);
  themeToggle.setAttribute(
    "aria-label",
    `Switch to ${nextTheme === "light" ? "dark" : "light"} theme`
  );
});

const roles = ["software developer", "database builder", "problem solver"];
let roleIndex = 0;
let characterIndex = roles[0].length;
let deleting = true;

function typeRole() {
  if (!typingText || reducedMotion.matches) return;

  const role = roles[roleIndex];
  characterIndex += deleting ? -1 : 1;
  typingText.textContent = role.slice(0, characterIndex);

  let delay = deleting ? 42 : 78;
  if (!deleting && characterIndex === role.length) {
    deleting = true;
    delay = 1450;
  } else if (deleting && characterIndex === 0) {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 280;
  }
  window.setTimeout(typeRole, delay);
}

if (!reducedMotion.matches) window.setTimeout(typeRole, 1200);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());
