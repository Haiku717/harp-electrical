# Changelog

Every edit to this site gets a dated entry here before it is pushed.

## 2026-09-06 (later)

### Fix: service row titles ran into their descriptions
The title and description in each numbered service row were both inline spans, so they
flowed together as one line instead of stacking, and the title margin had no effect.
Set both to `display: block`, gave the title a 9px gap underneath, and set the
description line-height to 1.5.

### Service rows: made the stacking robust and busted the CSS cache
The previous fix was correct in the file but browsers were still showing the old
stylesheet, so the title and description still looked joined. Two changes:

- Wrapped the title and description in a `.row__c` flex column, so they stack because
  of the parent rather than relying on a `display` rule on each child. Flex containers
  blockify their children, so this holds even if a child rule is overridden.
- Added `?v=2` to the stylesheet link on all 25 pages, so browsers and the CDN fetch
  the new CSS instead of serving a cached copy.

### Mobile pass
Audited every page at 320, 360, 375, 414, 480, 600 and 768px in a real browser viewport.

- **Fixed invisible bold text on the black slabs.** Bold text inside a dark block was
  inheriting the near-black body colour, so "Amuri Heat Pumps" on the homepage was
  effectively unreadable. Bold text in dark blocks is now white.
- **Enlarged tap targets.** The header phone number, the contact phone and email, the
  area links, the footer links, the breadcrumbs and the related-page tags were all under
  40px tall on a phone. The homepage went from 27 undersized targets to 2, and both of
  those are ordinary inline links inside paragraphs.
- Header logo raised from 38px to 46px on phones, where it was too small to read.
- Buttons given a 52px minimum height on touch screens.

**Checked and already correct:** no horizontal overflow on any page at any width, 17px
body text so iOS will not zoom the form fields, form inputs at 17px, the menu, call bar
and accordions all working at phone widths.

### Removed the 7 days a week availability claim
The previous site claimed the business was always switched on, 7 days a week, and that
had been carried across into this build. It is not accurate, so it has been removed everywhere: the header label,
the facts strip, the contact block hours, the sidebar note on every inner page, the
homepage FAQ, the repairs page, several meta descriptions, and the opening hours in the
schema (now Monday to Friday).

The homepage FAQ question about weekends was replaced with one about getting a price
before work starts. **Hours are currently listed as Monday to Friday and still need
confirming.**

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
