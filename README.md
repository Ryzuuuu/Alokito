# 🌅 Alokito

A responsive, single-page website for a fictional non-profit organisation, built with plain **HTML, CSS and Bootstrap 5.3**: no framework and no build step. *Alokito* means "illuminated" in Bengali.

The site presents the organisation's mission, programmes and team, and lets visitors donate, volunteer or subscribe to updates. It is a front-end showcase: the forms run entirely in the browser and nothing is sent to a server.

## Features

- **Hero and About carousels** (Bootstrap) with captioned photos
- **Core causes, process and team** sections with hover effects and a responsive card grid
- **Donation tiers** call to action and a photo gallery
- **Volunteer sign-up overlay** (a custom dialog, not a Bootstrap modal) with:
  - input filtering (letters only for the name, digits only for the phone number)
  - pattern validation for the 10-digit phone number and the PAN format (`ABCDE1234F`)
  - a date-of-birth picker that rejects future dates
  - close on <kbd>Esc</kbd>, backdrop click or the close button, with focus returned to the opener
- **Newsletter** sign-up with email validation and a confirmation message
- **Accessibility basics**: alt text on content images, labelled form fields, a labelled dialog, visible focus states
- **Optimised assets**: photos are resized to the sizes the page uses (about 6 MB in total) and lazy-loaded below the fold

## Sections

| Section | Content |
|---|---|
| Hero | Full-width image carousel with the large "Alokito" wordmark |
| About | Mission text with an image carousel |
| Our Core Causes | Learning for Every Child · Health is a Human Right · Sustainable Livelihoods |
| How We Create Change | Four-step approach: Identify → Engage → Implement → Sustain |
| Meet Our Team | Team cards (placeholder names and roles, e.g. "Founder Name") |
| Donate | Donation tiers and call to action |
| Voices from the Community | Testimonials |
| Moments of Light | Photo gallery |
| Newsletter / Contact Us | Newsletter sign-up and contact details |
| Join Our Initiative | Volunteer sign-up overlay |

## Tech stack

- HTML5 and CSS3 (inline styles plus a small `<style>` block)
- [Bootstrap 5.3.8](https://getbootstrap.com/) for layout, navbar, carousels and dropdowns (loaded from jsDelivr)
- Google Fonts: Kristi, Playfair Display and DM Sans
- A few lines of vanilla JavaScript for the overlay and form handling
- Node's built-in test runner for the sanity checks (no dependencies)

## Getting started

No install is needed. Bootstrap and the fonts load from CDNs, so an internet connection is required.

```bash
git clone https://github.com/Ryzuuuu/Alokito.git
cd Alokito
```

Then either open `alokito.html` in your browser, or serve the folder locally:

```bash
python -m http.server 8000
```

and visit <http://localhost:8000/alokito.html>.

## Tests

The checks need Node.js 20 or newer and have no dependencies:

```bash
npm test
```

They verify that every local image and link target exists, that ids are unique and every `#anchor` resolves, that every `<img>` has alt text and none is hot-linked from another site, and that the volunteer-form validation patterns accept and reject the right values.

## Project structure

```
alokito.html        the whole site: markup, styles and a small script
images/             banners, carousel and gallery photos, logo and icons
tests/              sanity checks (node --test)
package.json        defines `npm test`
```

## Notes

- Front-end only: the volunteer and newsletter forms show a confirmation message but do not store or transmit anything.
- The team members, testimonials and impact statistics are placeholder content.
- Several links (for example "Foundation Policy", "Impact Reports" and the social icons) are placeholders that point to `#`.
