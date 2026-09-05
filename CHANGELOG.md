# Changelog

Every edit to this site gets a dated entry here before it is pushed.

## 2026-09-06

### Design: bold trade / signage
Rewrote `css/styles.css` and rebuilt every page on a structure taken from the HARP van
livery: black slabs, red flashes, heavy condensed capitals, hard edges.

- **Type:** Barlow Condensed for headings (heavy, uppercase), Barlow for body copy.
- **No icons, no cards, no rounded corners, no drop shadows** anywhere on the site.
- **Header:** solid black bar with a red underline, logo left, phone number right.
- **Hero:** full-bleed photo of the van with no text over it, followed by a solid black
  slab carrying the headline.
- **Services:** numbered rows, 01 to 08, separated by rules, inverting to black on hover.
- **Areas:** plain uppercase text links in columns with hairline rules.
- **Facts strip:** four hairline-divided cells on light grey.
- **Reviews:** plain quotes under a thick red rule.
- **Mobile:** full-width red call bar fixed to the bottom of the screen.
- Inner pages use a black slab header, prose with red tick marks on list items, and a
  black quote box in the sidebar.

Copy, page structure and schema were all unchanged. This was a visual change only.

## 2026-09-05

### Initial build
Built from scratch as a static HTML/CSS/JS site, no build step.

**Positioning.** Repositioned the business around **Amberley and the Hurunui**, where it
is actually based, then Waimakariri as a second tier. The previous site claimed a service
area stretching from Christchurch to Hanmer Springs, which split the local signal and put
the business up against established Christchurch firms while leaving Amberley and the
Hurunui towns with no page to rank at all.

**25 pages built:**
- Homepage: hero, facts strip, services, Mitsubishi Electric accreditation, areas,
  customer reviews, FAQ, contact form.
- **8 service pages:** heat pumps, ducted heat pumps, ventilation and heat transfer,
  new builds and renovations, switchboard upgrades, LED lighting, repairs and
  maintenance, security cameras.
- **14 area pages**, each with its own local copy rather than a template with the town
  name swapped in. Hurunui: Amberley, Waipara, Leithfield, Cheviot, Culverden, Waikari
  and Hawarden, Hanmer Springs, plus a district hub. Waimakariri: Rangiora, Kaiapoi,
  Woodend, Pegasus, Sefton and Ashley, plus a district hub.
- About and Finance pages. The finance page states the Q Card terms in full, including
  the standard rate that applies once the interest free period ends.

**SEO.** Electrician, Service, Review, AggregateRating and FAQPage schema throughout.
Unique title and meta description on every page, one H1 per page, canonical URLs,
descriptive image alt text, `sitemap.xml` and `robots.txt`.

### Outstanding
- Contact form `access_key` is a placeholder. The form will not deliver until a real
  Web3Forms key is added in `index.html`.
- Still to confirm with HARP: street address for the local business schema, electrical
  registration number, Google Business Profile link, years of experience, and job photos.
