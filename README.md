# Pouya Rezazadeh — Portfolio

A responsive portfolio presenting my software development, data engineering, and document-intelligence work.

**[View the live portfolio](https://pouyar81.github.io/)** · [Download my résumé](https://pouyar81.github.io/Pouya_Rezazadeh_Resume.pdf) · [LinkedIn](https://www.linkedin.com/in/pouya-r/)

## Explore the projects

| Project | Focus | Case study |
| --- | --- | --- |
| ShopSync | E-commerce team project with a public HTML/CSS/JavaScript frontend | [Read](https://pouyar81.github.io/case-study-shopsync.html) |
| Breaking Games through Extern | Six-source ETL, SQLite analytics, and a Chart.js dashboard | [Read](https://pouyar81.github.io/case-study-breaking-games.html) |
| Pfizer program through Extern | Ongoing Python OCR and retrieval experiments | [Read](https://pouyar81.github.io/case-study-pfizer.html) |
| Sales Management System | Client requirements, relational modeling, and MySQL | [Read](https://pouyar81.github.io/case-study-sales-management.html) |

This repository contains the portfolio website and case studies. Each case study explains the project context, my contribution, tools, and outcomes.

ShopSync's frontend code is available in the [team repository](https://github.com/Rachel-Emerald/Group-5-ShopSync).

## Website features

- Responsive layouts with projects presented one after another.
- Four case studies hosted within the portfolio.
- Downloadable résumé and a contact form delivered through FormSubmit.
- Static HTML, CSS, and JavaScript deployed through GitHub Pages.

## Run locally

From the repository root, start a static server:

```sh
python -m http.server 8765
```

Open [localhost:8765](http://localhost:8765/). No build dependencies or backend server are required. The contact form sends real messages, including during local preview.

## Files

- `index.html`: introduction, vertically stacked projects, skills, about, and contact.
- `case-study-*.html`: four complete case studies hosted on this site.
- `thanks.html`: return page after a successful contact-form submission.
- `assets/js/content.js`: project summaries, skills, and contact links.
- `assets/js/app.js`: project rendering, navigation, tabs, theme, and form feedback.
- `assets/css/styles.css`: shared site styles and the main page layout.
- `assets/css/case-study.css`: case-study layouts.
- `assets/images/project-case-studies.png`: approved project-concept artwork.
- `assets/images/pouya-portrait.webp`: portrait.
- `Pouya_Rezazadeh_Resume.pdf`: current résumé and public download filename.
- `resume.pdf`: identical current résumé retained for existing inbound links.
- `favicon.png`, `og.png`: browser icon and social-sharing image.

## Updating content

Edit project summaries and skills in `assets/js/content.js`. Keep each project ID
unique. Case-study URLs use `./case-study-<name>.html`; edit the corresponding HTML
page when changing detailed copy. External GitHub/live URLs must be full HTTPS
URLs, or empty when unavailable. Artwork uses a four-panel sheet: ShopSync at
`0% 0%`, Breaking Games at `100% 0%`, Pfizer at `0% 100%`, and Sales Management at
`100% 100%`. These are clearly labeled concept illustrations, not product screenshots.

Replace both PDF files with the same new résumé to keep old links current. All
visible download links use `Pouya_Rezazadeh_Resume.pdf` and its download attribute.

## Contact delivery

The form in `index.html` posts to FormSubmit for `pooyarezazadeh81@gmail.com`.
Visitors supply their email, interest, and message; name is optional. The email
field supplies the reply address. A honeypot and FormSubmit's default reCAPTCHA
are enabled. The form works without JavaScript; JavaScript only provides sending
feedback and limits duplicate clicks. Direct email remains available as a fallback.

The first real submission triggers a confirmation email from FormSubmit. The
recipient must click the activation link in that email before delivery can work.
Check Spam if it is missing, then send a test and verify receipt. After activation,
submissions return to `https://pouyar81.github.io/thanks.html`. Update `_next` in the
form if the domain changes. Do not put inbox passwords or mail-provider secrets
in the repository. See https://formsubmit.co/documentation for service settings.

## Local preview and publishing

Run a static server in the repository root, such as `python -m http.server 8765`,
and open `http://localhost:8765/`. The contact form is live even during local
preview, so submit only when intentionally testing delivery.

Push changes to `main`. Existing GitHub Pages settings publish the root directory.
Verify the Pages deployment succeeds, then inspect desktop/mobile layouts, the
four local case-study links, résumé download, and contact delivery. When changing
shared assets, update their query-string version in HTML and module imports to
avoid stale browser caches. Update canonical/Open Graph URLs and the form return
URL if moving to a different domain.
