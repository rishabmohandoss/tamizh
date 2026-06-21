# Image specifications for tamizh.

Drop your photography into this folder using the exact filenames below.
The site references these paths directly — no build step needed.

---

## Hero images

| Filename | Target size | Aspect ratio | Notes |
|---|---|---|---|
| `hero-home.jpg` | 2400 × 1500 px | 16 : 10 | Wide landscape. Co-op interior, weavers at looms, or a landscape of Tamil Nadu textile districts. Avoid busy skies — the top edge sits below the nav bar. |
| `hero-story.jpg` | 2400 × 1500 px | 16 : 10 | Wide landscape. A single weaver's hands on the loom, or an intimate co-op shed interior at warm light. |

Both heroes are displayed full-width on desktop with `border-radius: 14px`. Leave a little breathing room at the edges of the frame — the rounded corners clip roughly 14 px on each side.

---

## Product images

Each product has two images: a **front** (full garment) and a **detail** (close-up of fabric/weave).
The card uses a 4 : 5 (portrait) aspect ratio. Shoot against a plain, near-white or very light neutral background for consistency.

| Filename | Product | Target size | Shot description |
|---|---|---|---|
| `product-shirt.jpg` | Madras check shirt | 1200 × 1500 px | Full garment, flat lay or ghost mannequin. Show the check pattern clearly. |
| `product-shirt-detail.jpg` | Madras check shirt — detail | 1200 × 1500 px | Extreme close-up of the check weave. Fill the frame with texture. |
| `product-kurta.jpg` | Block-print kurta | 1200 × 1500 px | Full garment showing the block-print pattern front and centre. |
| `product-kurta-detail.jpg` | Block-print kurta — detail | 1200 × 1500 px | Close-up of a printed motif, showing hand-stamp edges and fabric grain. |
| `product-saree.jpg` | Handloom saree | 1200 × 1500 px | Loosely draped or folded to show the body colour and border together. |
| `product-saree-detail.jpg` | Handloom saree — detail | 1200 × 1500 px | Close-up at the zari border — show where the border meets the body fabric. |
| `product-veshti.jpg` | Veshti, gold border | 1200 × 1500 px | Folded or flat lay showing full length and the gold border. |
| `product-veshti-detail.jpg` | Veshti, gold border — detail | 1200 × 1500 px | Close-up of the gold zari border stitching and cotton body. |
| `product-stole.jpg` | Zari-border stole | 1200 × 1500 px | Draped loosely to show colour and fall of the fabric. |
| `product-stole-detail.jpg` | Zari-border stole — detail | 1200 × 1500 px | Close-up of the gold zari border against the silk ground. |
| `product-tote.jpg` | Handwoven tote | 1200 × 1500 px | Tote upright, handles up, woven stripe pattern facing front. |
| `product-tote-detail.jpg` | Handwoven tote — detail | 1200 × 1500 px | Close-up of the stripe weave, showing individual cotton threads. |

---

## Format & export notes

- **Format:** JPEG, quality 85–90. WebP is fine if you update the `src` paths in the HTML.
- **Colour space:** sRGB.
- **No transparency needed** — all images are rectangular.
- While the image files are absent the site renders a light gray placeholder at the correct aspect ratio, so the layout doesn't break.
