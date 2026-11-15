# Harshit Verma — Video Editor Portfolio

A responsive React + Vite portfolio website with a dark editorial look, animated 3D-inspired visuals, motion effects and contact links.

## Run locally

1. Install Node.js (LTS).
2. Extract this ZIP.
3. Open a terminal in this project folder.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Build check

```bash
npm run build
```

The production website is generated in the `dist` folder.

## Upload to GitHub

1. Create a new empty GitHub repository (for example `harshit-verma-portfolio`).
2. Extract this ZIP on your computer.
3. Open the extracted folder and upload its contents to the repository's root. Make sure `package.json`, `index.html`, `src/` and `README.md` are at the root—not inside an extra nested folder.
4. Commit the files.

## Deploy on Vercel

1. Sign in to Vercel and choose **Add New → Project**.
2. Import the GitHub repository you just created.
3. Vercel should detect **Vite** automatically.
4. Use these settings if asked:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. Click **Deploy**. No environment variables are required.

## Personal details included

- Name: Harshit Verma
- Email: harshitvermagurwan@gmail.com
- Instagram: https://www.instagram.com/harshiteditz04

## Easy edits

- Main page content and contact links: `src/main.jsx`
- Colors, layout and effects: `src/styles.css`
- Page title and description: `index.html`

## Notes

- This portfolio intentionally does not include a fake client list, fake testimonials, invented statistics or fabricated editing projects.
- The site introduces the editor and explains services, workflow and contact details without requiring public video samples.
- Google Fonts are loaded online; the site still works if they are unavailable, using fallback fonts.
