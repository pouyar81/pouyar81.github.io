# Pouya R — Portfolio

A recruiter-focused, single-page portfolio for Pouya Rezazadeh. The public site is
plain HTML, CSS, and JavaScript, so it can run on GitHub Pages without a build
process. The surrounding vinext project is used for local previewing and Sites
hosting.

## Portfolio files

The complete static website lives in `public/`:

```text
public/
├── index.html
├── assets/
│   ├── css/styles.css
│   ├── images/pouya-portrait.webp
│   └── js/
│       ├── content.js
│       └── app.js
├── favicon.png
├── og.png
├── resume.pdf
└── .nojekyll
```

All paths are relative so the same files work at a GitHub user site, a repository
subpath, or a future custom domain.

## Update projects

Open `public/assets/js/content.js` and edit the `projects` array. To add a project,
copy one object and update its values:

```js
{
  id: "unique-project-id",
  title: "Project title",
  organization: "Organization or context",
  date: "Month Year",
  status: "Completed",
  summary: "One-sentence overview.",
  problem: "The problem the work addressed.",
  contribution: "Pouya's specific contribution.",
  outcome: "The verified outcome or intended value.",
  technologies: ["Technology", "Practice"],
  featured: false,
  visualType: "schema",
  githubUrl: "",
  liveUrl: "",
  caseStudyUrl: "",
  image: "",
}
```

- Keep every `id` unique.
- `visualType` accepts `commerce`, `pipeline`, or `schema`.
- `githubUrl`, `liveUrl`, `caseStudyUrl`, and `image` are optional.
- Leave an optional value empty when it does not exist. The site will not render an
  empty or disabled control.
- Use complete `https://` URLs for external project links.

## Update skills

Edit the `skillCategories` array in `public/assets/js/content.js`.

- Add a skill as `{ name: "Skill name", mark: "AB" }`.
- Keep marks short because they are displayed like compact technical labels.
- To add a category, copy one category object and give it a unique `id`.
- The tabs and keyboard behavior update automatically from the data.

## Update contact links

The verified contact details are stored near the top of
`public/assets/js/content.js`. Update the values there; the visible links are applied
automatically when the page loads.

## Replace the résumé

Replace `public/resume.pdf` with the new PDF and keep the same filename. All résumé
links will continue to work.

## Replace the portrait

Replace `public/assets/images/pouya-portrait.webp` with a web-optimized portrait and
keep the same filename. A 3:4 image around 720 × 960 pixels is a good target. Update
the image `alt` text in `public/index.html` if the subject or context changes.

## Update social sharing and domain details

- Replace `public/og.png` to change the social preview.
- Replace `public/favicon.png` to change the browser icon.
- Update the canonical URL and Open Graph URL in `public/index.html` after connecting
  a custom domain.

## Preview and verify

With the project dependencies installed:

```bash
npm run dev
npm test
```

The local preview is normally available at `http://localhost:3000/`. The automated
checks verify the static assets, centralized content model, accessible interactions,
theme support, and GitHub Pages-safe paths.

## Publish on GitHub Pages

1. Put the **contents** of `public/` at the root of your GitHub Pages repository.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)`, then save.
5. GitHub will publish the site at `https://pouyar81.github.io/` for a repository
   named `pouyar81.github.io`, or at a repository subpath for another repository
   name.

If a custom domain is connected later, keep `.nojekyll` and follow GitHub’s DNS
instructions before enabling **Enforce HTTPS**.
