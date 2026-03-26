// ============================================================
//  script.js — Main JavaScript for portfolio interactions
// ============================================================

/* ---------- Navbar: highlight active section on scroll ---------- */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const observerOptions = {
  root: null,
  rootMargin: "-40% 0px -55% 0px",
  threshold: 0,
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => link.classList.remove("active"));
      const activeLink = document.querySelector(
        `.nav-link[href="#${entry.target.id}"]`
      );
      if (activeLink) activeLink.classList.add("active");
    }
  });
}, observerOptions);

sections.forEach((section) => sectionObserver.observe(section));

/* ---------- Mobile hamburger menu ---------- */
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  hamburger.classList.toggle("open");
});

// Close menu when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    hamburger.classList.remove("open");
  });
});

/* ---------- Render project cards from projects.js ---------- */
function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  grid.innerHTML = ""; // clear placeholder if any

  projects.forEach((project, index) => {
    const card = document.createElement("article");
    card.classList.add("project-card");
    card.style.animationDelay = `${index * 0.1}s`;

    const toolsHTML = project.tools
      .map((tool) => `<span class="tag">${tool}</span>`)
      .join("");

    const insightsHTML = project.insights
      .map((insight) => `<li>${insight}</li>`)
      .join("");

    card.innerHTML = `
      <div class="card-top">
        <span class="card-icon">📊</span>
        <h3 class="card-title">${project.title}</h3>
      </div>
      <p class="card-desc">${project.description}</p>
      <div class="card-tools">${toolsHTML}</div>
      <ul class="card-insights">${insightsHTML}</ul>
      <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="card-btn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
        View on GitHub
      </a>
    `;

    grid.appendChild(card);
  });
}

/* ---------- Animate elements on scroll (fade-in) ---------- */
const fadeEls = document.querySelectorAll(".fade-in");

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();

  // Re-query after render for fade-in on cards
  document.querySelectorAll(".fade-in").forEach((el) => fadeObserver.observe(el));
  document.querySelectorAll(".project-card").forEach((el) => fadeObserver.observe(el));
});

/* ---------- Smooth active nav on page load ---------- */
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
