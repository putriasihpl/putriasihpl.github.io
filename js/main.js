/**
 * Rendering + light interactivity for the portfolio.
 * Reads everything from PORTFOLIO_DATA (js/data.js) — no content lives here.
 */
(function () {
  "use strict";

  const ICONS = {
    email:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"/><path d="M3.5 6.5l8.5 6 8.5-6"/></svg>',
    phone:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 3h3l2 5-2.5 1.5a11 11 0 0 0 5.5 5.5L14 12.5l5 2v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 2.5 5a2 2 0 0 1 2-2z"/></svg>',
    location:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
    linkedin:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h3v11H4zM5.5 3A1.75 1.75 0 1 1 5.5 6.5 1.75 1.75 0 0 1 5.5 3z"/><path d="M11 9h3v1.7c.6-1 1.7-2 3.5-2 3 0 4.5 1.9 4.5 5.4V20h-3v-5.4c0-1.6-.6-2.7-2.1-2.7-1.2 0-1.9.8-2.2 1.6-.1.3-.1.6-.1 1V20h-3z"/></svg>',
    github:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.4c0-.9.3-1.5.7-1.9-2.4-.3-4.9-1.2-4.9-5.4A4.2 4.2 0 0 1 12 7.1a3.9 3.9 0 0 1 .1-2.9s1.3-.4 3.9 1.5a13.7 13.7 0 0 1 6.9 0c2.6-1.9 3.9-1.5 3.9-1.5a3.9 3.9 0 0 1 .1 2.9 4.2 4.2 0 0 1 1.2 3.2c0 4.2-2.5 5.1-4.9 5.4.4.4.7 1.1.7 2.1V21"/></svg>',
    link:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 14a4 4 0 0 0 5.5 1.3l3-3a4 4 0 0 0-5.6-5.6l-1.4 1.3"/><path d="M14 10a4 4 0 0 0-5.5-1.3l-3 3a4 4 0 0 0 5.6 5.6l1.3-1.3"/></svg>',
    certificate:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5.5"/><path d="M9 12.5 7.5 21l4.5-2.5 4.5 2.5-1.5-8.5"/></svg>',
    graduationCap:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 8l10-5 10 5-10 5-10-5z"/><path d="M6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5"/><path d="M22 8v6"/></svg>',
    trend:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/></svg>',
    whatsapp:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.42 1.27 4.86L2 22l5.32-1.31a9.9 9.9 0 0 0 4.72 1.2h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2zm5.8 14.2c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.79-4.16-4.93-4.35-.14-.19-1.19-1.58-1.19-3.01 0-1.43.75-2.13 1.02-2.42.27-.29.58-.36.78-.36h.56c.18 0 .42-.07.65.5.24.58.82 2 .89 2.15.07.15.12.32.02.51-.1.19-.15.31-.3.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.77 1.27 1.65 2.06 1.14 1.02 2.1 1.34 2.4 1.49.3.15.47.13.65-.05.18-.18.72-.84.91-1.13.19-.29.38-.24.63-.15.26.1 1.66.78 1.94.92.28.14.47.21.54.33.07.12.07.68-.17 1.35z"/></svg>',
    linkedinBadge:
      '<svg viewBox="0 0 448 512" fill="currentColor"><path d="M100.28 448H7.4V148.9h92.88zm-46.44-338a53.34 53.34 0 1 1 53.33-53.33A53.34 53.34 0 0 1 53.84 110zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.28 61.9 111.28 142.3z"/></svg>',
  };

  function el(html) {
    const t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  function escapeHTML(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  // ---------------------------------------------------------------------
  // Hero
  // ---------------------------------------------------------------------
  function renderHero(data) {
    const { profile } = data;
    document.getElementById("heroBadge").innerHTML = `${ICONS.trend}<span>${escapeHTML(profile.badge)}</span>`;
    document.getElementById("heroName").textContent = profile.headline;
    document.getElementById("heroSummary").textContent = profile.heroLine || profile.summary;
    document.getElementById("heroCardName").textContent = profile.name;
    document.getElementById("heroCardExperience").textContent = profile.experienceBadge;
    document.getElementById("heroCardLocation").innerHTML =
      `${ICONS.location}<span>${escapeHTML(profile.location)} Based</span>`;

    const resumeHref = profile.resumeFile || "#";
    document.getElementById("resumeBtnNav").href = resumeHref;
    document.getElementById("resumeBtnHero").href = resumeHref;

    const social = document.getElementById("heroSocial");
    social.innerHTML = "";
    if (profile.links.linkedin && profile.links.linkedin !== "#") {
      social.appendChild(
        el(`<a class="linkedin-badge" href="${escapeHTML(profile.links.linkedin)}" target="_blank" rel="noopener" aria-label="LinkedIn">${ICONS.linkedinBadge}</a>`)
      );
    }
    social.appendChild(
      el(`<a href="mailto:${escapeHTML(profile.email)}" aria-label="Email">${ICONS.email}</a>`)
    );
    social.appendChild(
      el(`<a href="https://wa.me/${escapeHTML(profile.phoneHref.replace("+", ""))}" target="_blank" rel="noopener" aria-label="WhatsApp">${ICONS.whatsapp}</a>`)
    );
  }

  // ---------------------------------------------------------------------
  // About / Stats
  // ---------------------------------------------------------------------
  function renderAbout(data) {
    document.getElementById("aboutSummary").textContent = data.profile.about || data.profile.summary;

    const statsRow = document.getElementById("statsRow");
    statsRow.innerHTML = "";
    data.stats.forEach((stat) => {
      statsRow.appendChild(
        el(`
          <div class="stat-tile">
            <div class="stat-value">${escapeHTML(stat.value)}</div>
            <div class="stat-label">${escapeHTML(stat.label)}</div>
          </div>
        `)
      );
    });
  }

  // ---------------------------------------------------------------------
  // Experience timeline
  // ---------------------------------------------------------------------
  function renderExperience(data) {
    const timeline = document.getElementById("timeline");
    timeline.innerHTML = "";

    data.experience.forEach((job) => {
      const bulletsHTML = job.bullets
        .map((b) => `<li>${escapeHTML(b)}</li>`)
        .join("");
      const needsToggle = job.bullets.length > 3;

      const item = el(`
        <div class="timeline-item ${job.current ? "current" : ""}" data-animate>
          <span class="timeline-dot"></span>
          <div class="timeline-card">
            <div class="timeline-head">
              <span class="timeline-role">${escapeHTML(job.role)}</span>
              <span class="timeline-period">${escapeHTML(job.period)}</span>
            </div>
            <div class="timeline-meta">${escapeHTML(job.company)}<span class="dot-sep">•</span>${escapeHTML(job.location)}</div>
            <ul class="timeline-bullets ${needsToggle ? "collapsed" : ""}">${bulletsHTML}</ul>
            ${needsToggle ? '<button class="timeline-toggle" type="button">Show more</button>' : ""}
          </div>
        </div>
      `);

      if (needsToggle) {
        const btn = item.querySelector(".timeline-toggle");
        const list = item.querySelector(".timeline-bullets");
        btn.addEventListener("click", () => {
          const collapsed = list.classList.toggle("collapsed");
          btn.textContent = collapsed ? "Show more" : "Show less";
        });
      }

      timeline.appendChild(item);
    });
  }

  // ---------------------------------------------------------------------
  // Projects
  // ---------------------------------------------------------------------
  function renderProjects(data) {
    const grid = document.getElementById("projectGrid");
    const filters = document.getElementById("projectFilters");
    grid.innerHTML = "";
    filters.innerHTML = "";

    const categories = ["All", ...new Set(data.projects.map((p) => p.category).filter(Boolean))];

    categories.forEach((cat, i) => {
      const btn = el(
        `<button type="button" class="filter-chip ${i === 0 ? "active" : ""}" data-filter="${escapeHTML(cat)}">${escapeHTML(cat)}</button>`
      );
      btn.addEventListener("click", () => {
        filters.querySelectorAll(".filter-chip").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        grid.querySelectorAll(".project-card").forEach((card) => {
          const show = cat === "All" || card.dataset.category === cat;
          card.style.display = show ? "" : "none";
        });
      });
      filters.appendChild(btn);
    });

    data.projects.forEach((project) => {
      const tagsHTML = project.tags
        .map((t) => `<span class="tag">${escapeHTML(t)}</span>`)
        .join("");

      const card = el(`
        <div class="project-card" data-animate data-category="${escapeHTML(project.category || "")}">
          <div class="project-card-head">
            <span class="project-title">${escapeHTML(project.title)}</span>
            <span class="project-date">${escapeHTML(project.date)}</span>
          </div>
          <div class="project-org">${escapeHTML(project.org)}</div>
          ${project.category ? `<span class="category-badge">${escapeHTML(project.category)}</span>` : ""}
          <p class="project-desc">${escapeHTML(project.description)}</p>
          <div class="tag-row">${tagsHTML}</div>
        </div>
      `);

      grid.appendChild(card);
    });
  }

  // ---------------------------------------------------------------------
  // Skills
  // ---------------------------------------------------------------------
  function renderCoreSkills(data) {
    const row = document.getElementById("coreSkillsRow");
    row.innerHTML = "";
    (data.coreSkills || []).forEach((skill) => {
      row.appendChild(el(`<span class="pill pill-core">${escapeHTML(skill)}</span>`));
    });
  }

  function renderSkills(data) {
    const grid = document.getElementById("skillsGrid");
    grid.innerHTML = "";

    data.skills.forEach((group) => {
      const pillsHTML = group.items
        .map((item) => `<span class="pill">${escapeHTML(item)}</span>`)
        .join("");

      grid.appendChild(
        el(`
          <div class="skill-card" data-animate>
            <h3>${escapeHTML(group.category)}</h3>
            <div class="pill-row">${pillsHTML}</div>
          </div>
        `)
      );
    });
  }

  // ---------------------------------------------------------------------
  // Education / Certifications / Organizations
  // ---------------------------------------------------------------------
  function renderEducation(data) {
    const eduList = document.getElementById("educationList");
    eduList.innerHTML = "";
    data.education.forEach((edu) => {
      const logo = edu.logo
        ? `<img src="${escapeHTML(edu.logo)}" alt="${escapeHTML(edu.school)} logo">`
        : ICONS.graduationCap;

      eduList.appendChild(
        el(`
          <div class="edu-card" data-animate>
            <span class="edu-logo">${logo}</span>
            <div class="edu-body">
              <div class="edu-period">${escapeHTML(edu.period)}</div>
              <div class="edu-degree">${escapeHTML(edu.degree)}</div>
              <div class="edu-school">${escapeHTML(edu.school)}</div>
              ${edu.detail ? `<div class="edu-detail">${escapeHTML(edu.detail)}</div>` : ""}
            </div>
          </div>
        `)
      );
    });

    const orgList = document.getElementById("organizationsList");
    orgList.innerHTML = "";
    data.organizations.forEach((org) => {
      const bulletsHTML = org.bullets.map((b) => `<li>${escapeHTML(b)}</li>`).join("");
      orgList.appendChild(
        el(`
          <div class="info-card" data-animate>
            <h3>${escapeHTML(org.role)}</h3>
            <div class="info-meta">${escapeHTML(org.org)}</div>
            <div class="info-period" style="margin-bottom:10px;">${escapeHTML(org.period)}</div>
            <ul class="timeline-bullets">${bulletsHTML}</ul>
          </div>
        `)
      );
    });
  }

  function renderCertifications(data) {
    const grid = document.getElementById("certGrid");
    grid.innerHTML = "";
    data.certifications.forEach((cert) => {
      const badge = cert.image
        ? `<img src="${escapeHTML(cert.image)}" alt="${escapeHTML(cert.name)} badge">`
        : ICONS.certificate;

      grid.appendChild(
        el(`
          <div class="cert-card" data-animate>
            <div class="cert-badge">${badge}</div>
            <div class="cert-name">${escapeHTML(cert.name)}</div>
            <div class="cert-issuer">${escapeHTML(cert.issuer)}</div>
          </div>
        `)
      );
    });
  }

  // ---------------------------------------------------------------------
  // Clients & Testimonials — section stays hidden until real data exists
  // ---------------------------------------------------------------------
  function renderClients(data) {
    const clients = data.clients || [];
    const section = document.getElementById("clients");
    const navItem = document.getElementById("navClientsItem");
    if (!clients.length) {
      section.hidden = true;
      navItem.hidden = true;
      return;
    }

    const grid = document.getElementById("clientGrid");
    grid.innerHTML = "";
    clients.forEach((client) => {
      grid.appendChild(
        el(`
          <div class="client-card" data-animate>
            <div class="client-card-head">
              <img class="client-logo" src="${escapeHTML(client.logo)}" alt="${escapeHTML(client.name)} logo">
              <div>
                <div class="client-name">${escapeHTML(client.name)}</div>
                <div class="client-meta">${escapeHTML(client.project)} · ${escapeHTML(client.date)}</div>
              </div>
            </div>
            <p class="client-quote">“${escapeHTML(client.quote)}”</p>
            <div class="client-author">${escapeHTML(client.author)} <span>— ${escapeHTML(client.role)}</span></div>
          </div>
        `)
      );
    });

    section.hidden = false;
    navItem.hidden = false;
  }

  // ---------------------------------------------------------------------
  // Contact
  // ---------------------------------------------------------------------
  function renderContact(data) {
    const { profile } = data;
    const links = document.getElementById("contactLinks");
    links.innerHTML = "";

    links.appendChild(
      el(`<a href="mailto:${escapeHTML(profile.email)}">${ICONS.email}${escapeHTML(profile.email)}</a>`)
    );
    links.appendChild(
      el(`<a href="tel:${escapeHTML(profile.phoneHref)}">${ICONS.phone}${escapeHTML(profile.phone)}</a>`)
    );
    if (profile.links.linkedin && profile.links.linkedin !== "#") {
      links.appendChild(
        el(`<a href="${escapeHTML(profile.links.linkedin)}" target="_blank" rel="noopener">${ICONS.linkedin}LinkedIn</a>`)
      );
    }
    if (profile.links.github && profile.links.github !== "#") {
      links.appendChild(
        el(`<a href="${escapeHTML(profile.links.github)}" target="_blank" rel="noopener">${ICONS.github}GitHub</a>`)
      );
    }
    if (profile.links.portfolioShowcase) {
      links.appendChild(
        el(`<a href="${escapeHTML(profile.links.portfolioShowcase)}" target="_blank" rel="noopener">${ICONS.link}Portfolio Showcase</a>`)
      );
    }
  }

  // ---------------------------------------------------------------------
  // Footer
  // ---------------------------------------------------------------------
  function renderFooter(data) {
    const year = new Date().getFullYear();
    document.getElementById("footerText").textContent =
      `© ${year} ${data.profile.name}. Built with HTML & CSS.`;
  }

  // ---------------------------------------------------------------------
  // Nav interactions: mobile toggle, active-link highlight on scroll
  // ---------------------------------------------------------------------
  function setupNav() {
    const toggle = document.getElementById("navToggle");
    const links = document.getElementById("navLinks");

    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    links.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    const sections = Array.from(document.querySelectorAll("main section[id]"));
    const navAnchors = Array.from(links.querySelectorAll("a"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navAnchors.forEach((a) => a.classList.remove("active"));
          const match = navAnchors.find((a) => a.getAttribute("href") === "#" + entry.target.id);
          if (match) match.classList.add("active");
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
  }

  // ---------------------------------------------------------------------
  // Scroll-in animation for [data-animate] elements
  // ---------------------------------------------------------------------
  function setupAnimations() {
    const targets = document.querySelectorAll("[data-animate]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    targets.forEach((t) => observer.observe(t));
  }

  // ---------------------------------------------------------------------
  // Init
  // ---------------------------------------------------------------------
  function init() {
    const data = window.PORTFOLIO_DATA;
    if (!data) {
      console.error("PORTFOLIO_DATA not found — make sure js/data.js loads before js/main.js");
      return;
    }

    renderHero(data);
    renderAbout(data);
    renderExperience(data);
    renderProjects(data);
    renderCoreSkills(data);
    renderSkills(data);
    renderEducation(data);
    renderCertifications(data);
    renderClients(data);
    renderContact(data);
    renderFooter(data);

    setupNav();
    // Re-run animation setup after dynamic content is in the DOM.
    setupAnimations();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
