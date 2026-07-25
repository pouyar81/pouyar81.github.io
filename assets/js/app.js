import { projects, siteContent, skillCategories } from "./content.js";

const root = document.documentElement;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

const escapeHTML = (value = "") =>
  String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character]
  );

function safeExternalUrl(value) {
  if (!value) return "";
  try {
    const url = new URL(value);
    return ["https:", "http:"].includes(url.protocol) ? url.href : "";
  } catch {
    return "";
  }
}

function projectVisual(type) {
  if (type === "commerce") {
    return `
      <div class="project-visual visual-commerce" aria-hidden="true">
        <div class="visual-label"><span>commerce.flow</span><span>03 steps</span></div>
        <div class="commerce-flow">
          <span><i>01</i>Browse</span><b></b>
          <span><i>02</i>Cart</span><b></b>
          <span><i>03</i>Checkout</span>
        </div>
        <div class="commerce-data"><i></i><i></i><i></i><i></i><i></i></div>
      </div>`;
  }

  if (type === "pipeline") {
    return `
      <div class="project-visual visual-pipeline" aria-hidden="true">
        <div class="visual-label"><span>data.pipeline</span><span>processing</span></div>
        <div class="pipeline-flow">
          <div><span>CSV</span><span>6 sources</span></div>
          <i></i>
          <div><span>SQL</span><span>structured</span></div>
          <i></i>
          <div><span>Q4</span><span>insight</span></div>
        </div>
        <div class="pipeline-wave"><i></i><i></i><i></i><i></i><i></i><i></i></div>
      </div>`;
  }

  return `
    <div class="project-visual visual-schema" aria-hidden="true">
      <div class="visual-label"><span>relational.schema</span><span>normalized</span></div>
      <div class="schema-grid">
        <div><strong>customer</strong><span>customer_id</span><span>account</span></div>
        <i></i>
        <div><strong>order</strong><span>order_id</span><span>customer_id</span></div>
        <i></i>
        <div><strong>product</strong><span>product_id</span><span>inventory</span></div>
      </div>
    </div>`;
}

function projectLinks(project) {
  const links = [
    { label: "GitHub", url: safeExternalUrl(project.githubUrl) },
    { label: "Live site", url: safeExternalUrl(project.liveUrl) },
    { label: "Case study", url: safeExternalUrl(project.caseStudyUrl) },
  ].filter((item) => item.url);

  if (!links.length) return "";

  return `
    <div class="project-links">
      ${links
        .map(
          (link) => `
            <a href="${escapeHTML(link.url)}" target="_blank" rel="noopener noreferrer">
              ${escapeHTML(link.label)} <span aria-hidden="true">↗</span>
            </a>`
        )
        .join("")}
    </div>`;
}

export function renderProjects() {
  const grid = document.querySelector("[data-projects-grid]");
  if (!grid) return;

  grid.innerHTML = projects
    .map(
      (project, index) => `
        <article class="project-card ${project.featured ? "project-featured" : ""} reveal">
          <div class="project-topline">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <span>${escapeHTML(project.organization)}</span>
            <span class="project-status">${escapeHTML(project.status)}</span>
          </div>

          ${project.image ? `<img class="project-image" src="${escapeHTML(project.image)}" alt="" />` : projectVisual(project.visualType)}

          <div class="project-body">
            <p class="project-date">${escapeHTML(project.date)}</p>
            <h3>${escapeHTML(project.title)}</h3>
            <p class="project-summary">${escapeHTML(project.summary)}</p>

            <ul class="project-tags" aria-label="Technologies used">
              ${project.technologies.map((technology) => `<li>${escapeHTML(technology)}</li>`).join("")}
            </ul>

            <details class="project-details">
              <summary>
                <span>Explore the work</span>
                <span class="summary-icon" aria-hidden="true">+</span>
              </summary>
              <div class="project-detail-grid">
                <div>
                  <span>Problem</span>
                  <p>${escapeHTML(project.problem)}</p>
                </div>
                <div>
                  <span>Contribution</span>
                  <p>${escapeHTML(project.contribution)}</p>
                </div>
                <div>
                  <span>Outcome</span>
                  <p>${escapeHTML(project.outcome)}</p>
                </div>
              </div>
            </details>

            ${projectLinks(project)}
          </div>
        </article>`
    )
    .join("");
}

let activeSkillIndex = 0;

function renderSkillPanel(index) {
  const panel = document.querySelector("[data-skill-panel]");
  const tabs = [...document.querySelectorAll("[data-skill-tab]")];
  const category = skillCategories[index];
  if (!panel || !category) return;

  activeSkillIndex = index;
  tabs.forEach((tab, tabIndex) => {
    const selected = tabIndex === index;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });

  panel.setAttribute("aria-labelledby", `skill-tab-${category.id}`);
  panel.innerHTML = `
    <div class="skill-panel-heading">
      <p>${escapeHTML(category.description)}</p>
      <span>${String(category.skills.length).padStart(2, "0")} skills</span>
    </div>
    <div class="skill-grid">
      ${category.skills
        .map(
          (skill, skillIndex) => `
            <div class="skill-card" style="--delay: ${skillIndex * 45}ms">
              <span class="skill-mark">${escapeHTML(skill.mark)}</span>
              <strong>${escapeHTML(skill.name)}</strong>
              <span class="skill-index">${String(skillIndex + 1).padStart(2, "0")}</span>
            </div>`
        )
        .join("")}
    </div>`;
}

function renderSkills() {
  const tabList = document.querySelector("[data-skill-tabs]");
  if (!tabList) return;

  tabList.innerHTML = skillCategories
    .map(
      (category, index) => `
        <button
          id="skill-tab-${escapeHTML(category.id)}"
          type="button"
          role="tab"
          data-skill-tab
          data-index="${index}"
          aria-controls="skill-panel"
          aria-selected="${index === 0}"
          tabindex="${index === 0 ? "0" : "-1"}"
        >
          <span>${String(index + 1).padStart(2, "0")}</span>
          ${escapeHTML(category.label)}
        </button>`
    )
    .join("");

  const panel = document.querySelector("[data-skill-panel]");
  panel?.setAttribute("id", "skill-panel");

  tabList.addEventListener("click", (event) => {
    const tab = event.target.closest("[data-skill-tab]");
    if (!tab) return;
    renderSkillPanel(Number(tab.dataset.index));
  });

  tabList.addEventListener("keydown", (event) => {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
    event.preventDefault();

    if (event.key === "Home") activeSkillIndex = 0;
    else if (event.key === "End") activeSkillIndex = skillCategories.length - 1;
    else {
      const direction = event.key === "ArrowRight" ? 1 : -1;
      activeSkillIndex =
        (activeSkillIndex + direction + skillCategories.length) % skillCategories.length;
    }

    renderSkillPanel(activeSkillIndex);
    document.querySelectorAll("[data-skill-tab]")[activeSkillIndex]?.focus();
  });

  renderSkillPanel(0);
}

function initTheme() {
  const toggle = document.querySelector("[data-theme-toggle]");
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  if (!toggle) return;

  const updateThemeControl = () => {
    const isLight = root.dataset.theme === "light";
    toggle.setAttribute("aria-label", `Switch to ${isLight ? "dark" : "light"} theme`);
    themeMeta?.setAttribute("content", isLight ? "#F5F7FF" : "#070913");
  };

  updateThemeControl();
  toggle.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
    localStorage.setItem("portfolio-theme", root.dataset.theme);
    updateThemeControl();
  });
}

function initNavigation() {
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const navLinks = document.querySelector("[data-nav-links]");

  const closeMenu = () => {
    navLinks?.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open navigation menu");
  };

  menuToggle?.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    navLinks?.classList.toggle("is-open", !isOpen);
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || menuToggle?.getAttribute("aria-expanded") !== "true") return;
    closeMenu();
    menuToggle.focus();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) closeMenu();
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      closeMenu();
      target.scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth" });
      history.pushState(null, "", link.getAttribute("href"));
    });
  });
}

function initContactLinks() {
  const emailLink = document.querySelector("[data-contact-email]");
  if (emailLink && siteContent.contact.email) {
    emailLink.href = `mailto:${siteContent.contact.email}`;
    const label = emailLink.querySelector("span");
    if (label) label.textContent = siteContent.contact.email;
  }

  const externalContacts = [
    ["[data-contact-github]", siteContent.contact.github],
    ["[data-contact-linkedin]", siteContent.contact.linkedin],
  ];

  externalContacts.forEach(([selector, value]) => {
    const link = document.querySelector(selector);
    const safeUrl = safeExternalUrl(value);
    if (link && safeUrl) link.href = safeUrl;
  });

  document.querySelectorAll("[data-resume-link]").forEach((link) => {
    if (siteContent.contact.resume) link.href = siteContent.contact.resume;
  });
}

function initRoleRotation() {
  const roleText = document.querySelector("[data-role-text]");
  if (!roleText || reducedMotion.matches) return;

  let index = 0;
  window.setInterval(() => {
    roleText.classList.add("is-changing");
    window.setTimeout(() => {
      index = (index + 1) % siteContent.roles.length;
      roleText.textContent = siteContent.roles[index];
      roleText.classList.remove("is-changing");
    }, 260);
  }, 2600);
}

function initRevealAnimations() {
  const elements = document.querySelectorAll(".reveal");
  if (reducedMotion.matches || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach((element) => observer.observe(element));
}

function initActiveNavigation() {
  const links = [...document.querySelectorAll("[data-nav-link]")];
  const sections = [...document.querySelectorAll("[data-section]")];
  const linkMap = new Map(links.map((link) => [link.getAttribute("href").slice(1), link]));
  let frame;

  const update = () => {
    const marker = window.innerHeight * 0.3 + 76;
    const activeSection = sections.find((section) => {
      const bounds = section.getBoundingClientRect();
      return bounds.top <= marker && bounds.bottom > marker;
    });

    frame = undefined;
    if (!activeSection) return;
    const activeLink = linkMap.get(activeSection.id);
    if (activeLink?.getAttribute("aria-current") === "page") return;

    links.forEach((link) => link.removeAttribute("aria-current"));
    activeLink?.setAttribute("aria-current", "page");
  };

  const scheduleUpdate = () => {
    if (frame) return;
    frame = window.requestAnimationFrame(update);
  };

  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
  update();
}

function initHeroParallax() {
  const stage = document.querySelector("[data-hero-stage]");
  if (!stage || reducedMotion.matches || !finePointer.matches) return;

  let frame;
  stage.addEventListener("pointermove", (event) => {
    const bounds = stage.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      stage.querySelectorAll("[data-depth]").forEach((element) => {
        const depth = Number(element.dataset.depth);
        element.style.setProperty("--pointer-x", `${x * depth * 5}px`);
        element.style.setProperty("--pointer-y", `${y * depth * 5}px`);
      });
    });
  });

  stage.addEventListener("pointerleave", () => {
    stage.querySelectorAll("[data-depth]").forEach((element) => {
      element.style.setProperty("--pointer-x", "0px");
      element.style.setProperty("--pointer-y", "0px");
    });
  });
}

function init() {
  renderProjects();
  renderSkills();
  initContactLinks();
  initTheme();
  initNavigation();
  initRoleRotation();
  initRevealAnimations();
  initActiveNavigation();
  initHeroParallax();

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
}

init();
