# Putri Asih Puji Lestari — Data Analyst Portfolio

Static portfolio site built with plain HTML, CSS, and a small amount of vanilla
JavaScript. No build step, no framework, no dependencies to install.

## Structure

```
index.html        Page skeleton only (empty containers, no content to edit here)
css/style.css      All styling
js/data.js         ALL editable content lives here (profile, experience, projects, skills, education, certifications, organizations)
js/main.js         Renders js/data.js into index.html — you shouldn't need to touch this for normal updates
assets/            Put your profile photo and resume PDF here
```

## Updating content

Open **`js/data.js`** — every section of the site is a plain JavaScript object/array there.

- **Add a new project** → copy one object inside the `projects` array, edit it, place it at the top (newest first).
- **Add a new job** → same idea, inside the `experience` array.
- **Update skills / certifications / education / organizations** → edit the matching array.
- **Update contact info, summary, or stat numbers** → edit `profile` and `stats`.

Save the file, refresh the page — no build/compile step needed.

## Adding your photo and CV file

Drop these files into the `assets/` folder:

- `assets/profile.jpg` — then in `index.html`, inside `.hero-photo`, replace the
  placeholder `<span class="placeholder-initials">PA</span>` with
  `<img src="assets/profile.jpg" alt="Putri Asih Puji Lestari">`.
- `assets/Putri_Asih_Puji_Lestari_Resume.pdf` — the "Download CV" buttons already
  point at this path via `profile.resumeFile` in `js/data.js`. Rename the file to
  match, or update that path.

## Links to fill in

In `js/data.js`, under `profile.links`, replace the `"#"` placeholders with your
real LinkedIn and GitHub URLs.

## Preview locally

Just double-click `index.html` — it works with `file://`. Or, for a proper local
server (recommended, especially if you add more pages later):

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

Then open `http://localhost:8000`.

## Deploy to GitHub Pages (username.github.io)

1. Create a GitHub repository named exactly `<your-username>.github.io`.
2. Push this folder's contents to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```
3. GitHub Pages serves the repo root automatically for this repo name — no extra
   config needed. The site will be live at `https://<your-username>.github.io/`
   within a minute or two.
4. Every time you edit `js/data.js` (e.g. add a new project), commit and push
   again to update the live site.
