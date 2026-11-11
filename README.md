# Jerry Andrew F. Famanila — Portfolio Foundation

A personal student portfolio built with React, Vite, and React Router. This is the starting version for a BSIT portfolio and includes a shared header/footer layout, four working routes, personalized first-draft content, and responsive starter styling.

## About

Jerry Andrew F. Famanila is a BSIT student interested in computer hardware, PC building, hardware troubleshooting, basic printer repair, and UI/UX design. Backend development is an area of ongoing learning.

## Pages and routes

- `/` — Home
- `/about` — Introduction and skills
- `/projects` — Photography Gallery Website and SOS Emergency Alert System
- `/contact` — Contact introduction and current contact placeholders

All pages are rendered inside the shared `Layout` component using React Router's `Outlet`.

## Projects included

1. **Photography Gallery Website** — A personal gallery/portfolio for displaying photography work and helping potential clients inquire about event coverage such as weddings, debuts, and other occasions.
2. **SOS Emergency Alert System** — A school project with a PHP backend that lets students report emergencies from upper floors, notifies faculty and the clinic, and helps responders identify the alert location.

## Run locally

1. Install [Node.js](https://nodejs.org/) if it isn't installed.
2. Open a terminal in this project folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed in the terminal (usually `http://localhost:5173`).

To check the production build:

```bash
npm run build
```

## Before submitting

Add your preferred email address and GitHub profile link to `src/pages/Contact.jsx` when you're ready to share them. You can also add screenshots and more project details later in the term.

## Publish to a public GitHub repository

Create a **new public repository** on GitHub (for example, `famanila-portfolio`). Do not initialize it with a README, license, or `.gitignore` because this project already contains those files. Then run these commands in this folder, replacing the URL with your GitHub username:

```bash
git init
git add .
git commit -m "Personalize React portfolio foundation"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/famanila-portfolio.git
git push -u origin main
```

The repository is not published automatically by downloading this project; the GitHub steps above require you to sign in to your own account.
