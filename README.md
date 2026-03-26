# Ayushi Dhimmar — Portfolio Website

A clean, responsive personal portfolio for a Data Analyst student. Built with plain HTML, CSS, and JavaScript — no frameworks, no build step.

---

## 📁 Folder Structure

```
portfolio/
├── index.html        ← Main page (don't need to edit for new projects)
├── style.css         ← All styles
├── script.js         ← Navbar, scroll effects, renders project cards
├── projects.js       ← ✅ ADD NEW PROJECTS HERE
└── assets/
    └── resume.pdf    ← Drop your resume PDF here
```

---

## ➕ How to Add a New Project

Open `projects.js` and add a new object inside the `projects` array:

```js
{
  title: "Your Project Title",
  description: "A short description of what the project does.",
  tools: ["Python", "SQL", "Tableau"],
  insights: [
    "Key result or finding #1.",
    "Key result or finding #2.",
  ],
  github: "https://github.com/yourusername/repo-name",
},
```

Save the file — that's it! The card will appear automatically on the website.

---

## 📄 Adding Your Resume

1. Export your resume as a PDF
2. Name it `resume.pdf`
3. Place it in the `assets/` folder

The download buttons on the page will work automatically.

---

## 🌐 Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `ayushidhimmar.github.io`)
2. Push all files to the `main` branch
3. Go to **Settings → Pages → Source → main branch → / (root)**
4. Your site will be live at `https://yourusername.github.io`

---

## 🔗 Update Your Links

Search for `ayushidhimmar` in the following files and replace with your actual URLs:

| File | What to update |
|---|---|
| `index.html` | LinkedIn URL, GitHub URL |
| `projects.js` | Individual project GitHub repo links |

---

## 🎨 Customisation

| What | Where |
|---|---|
| Accent color | `style.css` → `--accent` variable (line ~14) |
| Fonts | `style.css` → Google Fonts import + `--font` variables |
| Skills | `index.html` → Skills section |
| Certifications | `index.html` → Certifications list |
