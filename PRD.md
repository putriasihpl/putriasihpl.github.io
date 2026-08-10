# Content PRD — Putri Asih Portfolio

Filling putriasihpl.github.io with content that actually gets callbacks.

A working spec for what each section of the portfolio needs to say, to whom, and in what order — plus the specific gaps found while reviewing the current build, prioritized so the highest-leverage edits happen first.

- **Owner:** Putri Asih Puji Lestari
- **Site:** putriasihpl.github.io
- **Status:** Draft v2 — revised
- **Date:** 2026-08-10

---

## 1. Purpose & goals

Why this site exists and what it needs to do before any content gets called "done."

The site's job is to move a recruiter or hiring manager from *"saw a CV/LinkedIn link"* to *"wants to talk"* in under two minutes — by proving, with numbers and artifacts, that Putri's dashboards and automations changed how a business made decisions. Secondary job: back up her credibility as a mentor (Dealls Super Mentor role) for aspiring analysts who land on the site.

This is not a brochure. Every section either **proves capability** (Experience, Projects, Skills) or **removes friction to contact** (Hero, Contact). Anything that does neither is a candidate to cut.

## 2. Audience

Four readers, four reading speeds. The page has to work for all of them without rewriting itself.

| Reader | Reads for | Time on page | What convinces them |
|---|---|---|---|
| Recruiter / HR screener | Keyword match: tools, titles, seniority | < 30 sec | Hero + Skills scan; one standout number |
| Hiring / BI manager | Depth: methodology, ownership, tool fluency | 2–5 min | Project write-ups, real dashboards or screenshots |
| Business owner / company (freelance client) | Proof she can be trusted with their data and budget, not just a résumé line | 2–4 min | Client logos, a named testimonial, a project with clear before/after business impact |
| Mentee / peer analyst | Credibility and learning path | 1–2 min | Mentor role, certifications, approachable tone |

**Implication:** The Hero and Skills sections are written for the 30-second reader. Projects, Experience, and the new Clients section are written for the 2–5 minute reader — the business-owner audience in particular decides on trust signals (logos, a real quote) more than on tool lists. Nothing should require any of the four to work harder than their attention budget allows.

## 3. Success metrics

The site currently has no analytics installed, so none of this is measurable yet — that's the first action item, not an afterthought.

- **CV download clicks** — the single clearest "I'm interested" signal.
- **Contact clicks** — mailto / phone / LinkedIn taps from the Contact panel.
- **Scroll depth to Projects** — proxy for whether Hero + About earn the scroll.
- **Outbound clicks per project** — once live dashboard/demo links exist, this shows which project actually lands.
- **Client retention rate** — of the freelance/consulting clients she's worked with, the % who came back for a second engagement. This is the strongest trust signal for the business-owner audience (§2) and isn't something the website can track on its own — it comes from her own engagement history, but the number belongs on the site once it exists.

**Action:** Add a lightweight, privacy-respecting analytics snippet (e.g. GoatCounter or Plausible) before investing further in copywriting — otherwise every future content decision is a guess. See §7, P1. Separately, once retention rate is known, consider surfacing it as a 5th stat tile in the Hero/About stats row alongside "15+ Dashboards" and "66% Faster Reporting" — it's the one stat aimed squarely at a client rather than a recruiter.

## 4. Section-by-section spec

What each section's job is, what it must contain to do that job, and where the current build stands.

| # | Section | Job | Must include | Status |
|---|---|---|---|---|
| 4.1 | Hero | Pass the 5-second test | Name, title, one proof number, primary + secondary CTA | P0 open |
| 4.2 | About | Position her distinctly from a generic "data analyst" | A narrative not identical to the Hero line, one differentiator | P1 open |
| 4.3 | Experience | Prove trajectory and quantified impact | Impact-first bullets, strongest 3 visible before "show more" | P1 open |
| 4.4 | Projects | Prove tool fluency and real-world results — the deepest section | Grouped into 3 categories (see below); each card: problem → approach → tools → impact, plus a visual, plus a full "Month Year" date | P0 open |
| 4.5 | Skills | Fast keyword match without diluting the top tools | A visible "core 6" distinct from the long tail | P1 open |
| 4.6 | Education / Certs | Quick credibility check, low reading effort | Degree, GPA, certification issuer | Good |
| 4.7 | Organizations | Soft-skill / leadership signal, secondary priority | Role, org, one outcome line | Good |
| 4.8 | Contact | Remove every last click of friction | Working email, phone, LinkedIn, GitHub or none at all | P0 open |
| 4.9 | Clients & Testimonials *(new)* | Win the business-owner audience (§2) on trust, not tools | Per client: logo, name, project + Month Year, one testimonial with author name/role | P0 open |

### 4.4a — Project categories

Projects split into three categories so a reader can jump straight to the kind of work they care about — a BI manager scanning for dashboard craft doesn't have to wade through analysis-methodology writeups to find it, and vice versa.

| Category | Project | Date |
|---|---|---|
| Dashboard | Operational Monthly Report Dashboard — PT Jasa Angkasa Semesta | June 2026 |
| Dashboard | Retail Superstore Performance Dashboard | April 2024 |
| Research Analyst | Customer Profiling & Collection Strategy Optimization — Astra Welab Digital Arta | March 2026 |
| Automation & Data Engineering | Budget Control and Realization Monitoring Dashboard — Bank Indonesia Purwokerto | January 2026 |
| Automation & Data Engineering | Assignment Automation For Desk Collection — Astra Welab Digital Arta | April 2025 |

**Implementation note:** In `js/data.js`, each object in the `projects` array has a `category` field (one of `"Dashboard"`, `"Research Analyst"`, `"Automation & Data Engineering"`) and a spelled-out `date` (e.g. `"June 2026"`). The Projects section renders with category filter chips over a flat grid.

## 5. Priority gaps, in detail

The five gaps that most affect whether someone reaches out — with what "good" looks like for each.

**4.1 / 4.8 — Dead links and missing photo `P0`**
Every link in the Hero and Contact panel needs to resolve somewhere real. `js/data.js → profile.links.linkedin` and `.github` are still `"#"`. A recruiter clicking a dead social link mid-scan is the fastest way to lose them. If there's no GitHub worth linking, remove the icon entirely rather than leave it dead — a missing link reads as "not on GitHub"; a dead one reads as broken.

**4.4 — Projects have no visuals `P0`**
Every project needs one screenshot or short GIF, matched to what its category actually shows — a **Dashboard** project shows the dashboard itself; a **Research Analyst** project (the DMAIC/segmentation work) shows a chart, model output, or the decision framework, since there's no dashboard to screenshot; an **Automation & Data Engineering** project shows a pipeline diagram or a snippet of the notebook/schedule, since the "product" is a process, not a visual. For a BI portfolio, a project without a visual is a claim without evidence. Where company data is confidential (JAS, Astra Welab, Bank Indonesia work), use a blurred/anonymized screenshot with a visible caption — *"Screenshot anonymized for client confidentiality"* — rather than showing nothing. The Retail Superstore project uses public data, so that one should link to the live published Tableau viz, not just describe it.

**4.9 — Clients & Testimonials section doesn't exist yet `P0`**
Right now nothing on the site tells a business-owner reader (§2) that Putri has taken on clients directly, only that she's been an employee. Each client entry needs, at minimum: a **logo**, the **client/company name**, the **project** and its **Month Year**, and **one testimonial quote** from a named person who was actually involved in that project — a testimonial without an attributed name and role reads as invented, even when it isn't. Until real client names, logos, and quotes are supplied, keep this section out of the live build rather than shipping it with placeholders.

**4.2 — About duplicates the Hero summary word-for-word `P1`**
`profile.summary` used to be reused verbatim in both the Hero and the About section — a reader who continued past the Hero got no new information. Hero stays a punchy one-liner; About carries the fuller story: what kind of problems she's drawn to, what makes her BI work different from a typical analyst's (e.g. the process-improvement angle — cutting the monthly report cycle by 66% wasn't just a dashboard, it was a workflow redesign).

**4.5 — Skills list treats 30+ tools as equally important `P1`**
A recruiter scanning for "Power BI, SQL, Python" shouldn't have to find them inside a 15-tag wall. Visually separate a "core toolkit" (the 5–6 tools she actually wants to be hired for — Power BI, DAX, SQL/T-SQL, Python, Tableau, BigQuery) from the supporting long tail. The long tail stays, just visually secondary.

## 6. Content style rules

Rules to apply whenever new content is added to `js/data.js`, so future edits don't quietly drift from what's already working.

**Bullet formula**
`[Action verb] + [what/method] + [quantified outcome]` — one line, under ~24 words. The existing Experience bullets already mostly follow this ("Implemented process improvement... to cut... report preparation time by 66%"); keep every new bullet to that shape rather than reverting to duty-description language ("Responsible for...").

**No invented numbers**
Every percentage or count on the site must trace back to something real (the résumé, an actual project outcome). If a new project doesn't have a clean metric yet, describe the mechanism instead of guessing a number — a vague truth beats a precise-looking fabrication.

**One language, one date format — always spelled out**
Standardize on English month names throughout ("May 2024", "August 2023" — not "Mei 2024", "Agustus 2023"). This applies to Projects and Clients too: dates are spelled out as "June 2026", never "06/2026" — a reader should never have to decode which number is the month.

**Confidentiality by default**
For any employer-owned dashboard or dataset, default to anonymized/blurred visuals and rounded or relative metrics ("reduced by ~90%") rather than exact internal figures, unless the employer has explicitly cleared it for public sharing.

## 7. Action backlog

Same gaps as §5, organized as a to-do list in the order they should get done.

### P0 — blocks credibility (fix before sharing the link further)
- [ ] Add real LinkedIn URL to `profile.links.linkedin`
- [ ] Add real GitHub URL, or remove the GitHub icon if none exists
- [ ] Add profile photo to `assets/profile.jpg`, swap the placeholder initials
- [ ] Add the actual résumé PDF to `assets/` so "Download CV" works
- [ ] Add at least one screenshot to each flagship project card
- [ ] Collect real client names, logos, and one testimonial (with attributed name + role) each, for the Clients & Testimonials section
- [ ] Confirm whether there are certifications beyond the current five (Power BI–Coursera, BI Professional–Google, Data Analyst Essential–CISCO, Data Administrator–BNSP, HackerRank Advance SQL)

### P1 — conversion & differentiation (do next)
- [x] Rewrite the About paragraph so it doesn't repeat the Hero summary
- [ ] Reorder each job's bullets so the strongest, most quantified points show before "Show more"
- [x] Visually separate a "core 6" skill set from the long tail
- [x] Standardize all dates to one language, spelled out (English month names, "June 2026" not "06/2026")
- [x] Tag each project with its category — Dashboard, Research Analyst, or Automation & Data Engineering — in `js/data.js`
- [ ] Install lightweight, privacy-respecting analytics
- [ ] Once client retention rate is known, add it as a 5th stat tile in the Hero/About stats row

### P2 — polish (nice to have)
- [ ] Add a short testimonial/recommendation quote if one exists (manager or mentee)
- [ ] Add a one-line "currently exploring" note for a growth signal
- [ ] Consider a deeper case-study writeup for the DMAIC collection-strategy project — it's the most sophisticated methodology story on the site and currently gets the same three lines as everything else

## 8. Pre-publish checklist

Run through this before calling any content update "done."

- [ ] No link on the page points to `"#"`
- [ ] Every project card has: problem, tools used, quantified impact, and a visual (or a stated confidentiality reason for skipping one)
- [ ] Every number on the page can be traced back to the résumé or a real project outcome
- [ ] Dates and language are consistent site-wide, spelled out as "Month Year" everywhere including Projects and Clients
- [ ] Every project has a category tag (Dashboard / Research Analyst / Automation & Data Engineering)
- [ ] Every client entry has a logo, name, project date, and one attributed testimonial — no placeholders live
- [ ] Checked on a phone-width screen — nav menu, stat tiles, and project grid all still read cleanly

---

Living document — update this alongside `js/data.js` as content changes. Section numbers are stable references (e.g. "see §4.4") even as content underneath is revised.
