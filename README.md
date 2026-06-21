# tamizh.

A static two-page website for tamizh., a clothing brand sourcing garments directly from weaving and tailoring co-ops across Tamil Nadu.

**No build step. No framework. No dependencies.** Plain HTML, CSS, and a small amount of vanilla JS.

---

## Pages

| File | Description |
|---|---|
| `index.html` | Home — hero, bilingual headline, product grid with 3-D flip cards |
| `our-story.html` | Brand story — body copy, process steps, commitment statements |

Shared styles live in `styles.css`. `script.js` handles card-flip toggling on touch devices.

---

## Adding photography

Drop your images into the `images/` folder using the exact filenames listed in [`images/README.md`](images/README.md). The `<img>` tags already point to those paths. Until the files exist, the site renders light gray placeholders at the correct aspect ratios.

---

## Preview locally

**Option 1 — open directly in a browser:**

Double-click `index.html`. Relative paths are used throughout, so the site works straight from the filesystem.

**Option 2 — run a static server (recommended, avoids any browser file:// restrictions):**

```bash
python3 -m http.server
```

Then open `http://localhost:8000` in your browser.

---

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under "Build and deployment", choose **Deploy from a branch**.
4. Select your branch (e.g. `main`) and set the folder to **/ (root)**.
5. Save. GitHub Pages will serve the site in a minute or two.

The `.nojekyll` file at the repo root tells GitHub Pages to skip the Jekyll build step and serve the files as-is.

No GitHub Actions workflow is needed.
