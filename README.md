# 23IT304 Database Management Systems

Course portal for **23IT304 Database Management Systems**, B.Tech. Computer Science and Engineering, IV Semester, GMRIT Deemed to be University, Academic Year 2026–27 (Academic Regulation 2023).

The syllabus, session plan, course outcomes, articulation matrix, and assessment scheme come from the department handout dated 20 June 2026. The printed syllabus has four units (48 hours, 47 numbered sessions). `public/materials/unit-5/` holds the handout’s supplementary topics (domain relational calculus, query optimization, Codd’s rules, domain dependency). It is not a fifth official unit.

Laboratory scripts and the seminar-series project are practice for the SQL sessions and the open-book assignment. The credit structure is 3–0–0–3. This site does not collect submissions and does not announce assessment dates.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints. `npm run build` writes the static site to `dist/`.

## Layout

```
public/materials/   unit notes, assignments, SQL scripts, project brief, official files
public/images/      site mark
src/components/     header, footer, markdown and SQL viewers
src/pages/          one page per section of the portal
src/data/           course facts, syllabus, sessions, assignments, labs, notices
src/styles/         global.css
```

Edit names, the consultation hour, or outcomes in `src/data/course.js`. Edit a session title in `src/data/lectures.js`. Study notes are markdown under `public/materials/`; the study page renders those files.

## Deploy

`render.yaml` builds the Vite app and publishes `dist` as a static site, with a rewrite so client-side routes such as `/lectures/session-01` load `index.html`.
