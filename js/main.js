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
    document.getElementById("heroRole").textContent =
      profile.title + " · " + profile.tagline;
    document.getElementById("heroSummary").textContent = profile.summary;

    const resumeHref = profile.resumeFile || "#";
    document.getElementById("resumeBtnNav").href = resumeHref;
    document.getElementById("resumeBtnHero").href = resumeHref;

    const contacts = document.getElementById("heroContacts");
    contacts.innerHTML = "";
    contacts.appendChild(
      el(`<a href="mailto:${escapeHTML(profile.email)}">${ICONS.email}${escapeHTML(profile.email)}</a>`)
    );
    contacts.appendChild(
      el(`<a href="tel:${escapeHTML(profile.phoneHref)}">${ICONS.phone}${escapeHTML(profile.phone)}</a>`)
    );
    contacts.appendChild(
      el(`<span>${ICONS.location}${escapeHTML(profile.location)}</span>`)
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
      eduList.appendChild(
        el(`
          <div class="info-card" data-animate>
            <h3>${escapeHTML(edu.school)}</h3>
            <div class="info-meta">${escapeHTML(edu.degree)} — ${escapeHTML(edu.location)}</div>
            <div class="info-period">${escapeHTML(edu.period)}${edu.detail ? " · " + escapeHTML(edu.detail) : ""}</div>
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
