# 🌅 Alokito

A responsive, single-page website for a non-governmental organisation, built with **HTML, CSS and Bootstrap 5.3 only** (no framework, no build step). "Alokito" means "illuminated" in Bengali.

## Sections

| Section | Content |
|---|---|
| Hero | Full-width image carousel with the large "Alokito" wordmark |
| About | Mission text with an image carousel |
| Our Core Causes | Learning for Every Child · Health is a Human Right · Sustainable Livelihoods |
| How We Create Change | Four-step approach: Identify → Engage → Implement → Sustain |
| Meet Our Team | Team cards (placeholder names/roles, e.g. "Founder Name") |
| Donate | Donation call to action |
| Voices from the Community | Testimonials |
| Moments of Light | Photo gallery |
| Join our newsletter / Contact Us | Newsletter sign-up and contact details |
| Join Our Initiative | Volunteer sign-up modal |

## Run it

No install needed. Bootstrap and fonts load from CDNs, so an internet connection is required.

```bash
git clone https://github.com/Ryzuuuu/Alokito.git
cd Alokito
# open alokito.html in your browser, or:
python -m http.server 8000   # then visit http://localhost:8000/alokito.html
```

## Files

- `alokito.html`: the entire site (markup and inline styles)
- `banner*.jpg`, `carousel*.jpg`: hero and about carousel images
- `logo.png`, `me.png`, `Profile pic.jpg`, `search.png`, `donate (1).jpg`: logo and supporting images

## Notes

Front-end only: forms are not connected to a backend, and the team and testimonial content is placeholder text.
