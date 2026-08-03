# Yuva Group Website — Folder & File Guide

A plain-English map of the whole project, so you can explain it to anyone —
what every folder is for, what's inside it, and what each file does.

**The project in one line:** a Next.js (React + TypeScript + Tailwind) website
for Yuva Structures Pvt. Ltd. that shows the company's projects, amenities,
team, testimonials, and lets visitors book a site visit.

**Live site:** https://yuvagroupow.netlify.app — updates automatically when code
is pushed to the `main` branch on GitHub.

---

## 1. Top-level files (the root of the project)

| File name | What it is | What it does |
|---|---|---|
| `package.json` | The project's "ID card" | Lists the project name, the commands (dev/build/start/lint/typecheck), and every software library used (Next.js, React, Tailwind, etc.). |
| `pnpm-lock.yaml` | Dependency lockfile | Records the exact versions of every library so every computer installs the same thing. |
| `next.config.js` | Next.js settings | Images are served as-is (no re-optimisation) and ESLint is skipped during builds. |
| `tailwind.config.ts` | Styling configuration | Defines the design system: brand colors (charcoal, accent red, ivory…), fonts, and custom Tailwind tokens used in class names. |
| `postcss.config.js` | CSS processing setup | Tells the build how to process Tailwind CSS and add browser prefixes. |
| `tsconfig.json` | TypeScript settings | Configures strict type-checking and path aliases (`@/` points to the project root). |
| `.eslintrc.json` | Code-quality rules | Uses Next.js's recommended lint rules (`next/core-web-vitals`). |
| `components.json` | shadcn/ui settings | Configuration for the reusable UI component library. |
| `netlify.toml` | Hosting configuration | Tells Netlify how to build and publish the site. |
| `README.md` | Project overview | The human-readable intro: tech stack, how to run, how the site is organised. |
| `next-env.d.ts` | TypeScript helper | Auto-generated file that makes Next.js types work. |

---

## 2. `app/` — the pages of the website

This is the most important folder. In Next.js, **every file inside `app/` that
is named `page.tsx` becomes a real page on the website** (its folder = the URL).

| Folder / File | What it is | What it does |
|---|---|---|
| `layout.tsx` | The main template | Wraps every page with the fonts, global styles, navbar, footer, WhatsApp/Contact buttons, scroll-progress bar, SEO metadata, and the company info used by Google. |
| `globals.css` | Global stylesheet | Defines the color palette, fonts, and base styles for the entire site. |
| `page.tsx` | Home page (`/`) | The landing page: full-screen hero video, company stats, featured projects, amenities, philosophy, locations, testimonials, and final call-to-action. |
| `loading.tsx` | Loading screen | Shown briefly while a page loads. |
| `not-found.tsx` | 404 page | Shown when someone visits a URL that doesn't exist. |
| `robots.ts` | SEO helper | Generates `robots.txt` so search engines know how to crawl the site. |
| `sitemap.ts` | SEO helper | Generates `sitemap.xml` — the list of every page and project for Google. |
| `about/page.tsx` | About page (`/about`) | Founder's story, the team grid, company values, and history. |
| `amenities/page.tsx` | Amenities page (`/amenities`) | Photo gallery of community amenities plus the "also included" list. |
| `careers/page.tsx` | Careers page (`/careers`) | Why-work points, open roles, and the "life at site" image. |
| `contact/page.tsx` | Contact page (`/contact`) | Contact cards (call/email/WhatsApp/office), enquiry form with validation, and a Google map. |
| `gallery/page.tsx` | Gallery page (`/gallery`) | Visual archive of project photos. |
| `privacy/page.tsx` | Privacy Policy page (`/privacy`) | The full legal privacy policy. |
| `terms/page.tsx` | Terms page (`/terms`) | Terms & Conditions. |
| `schedule-visit/page.tsx` | Site-visit page (`/schedule-visit`) | What to expect on a visit plus the booking form. |
| `projects/page.tsx` | All projects page (`/projects`) | Map-style hero plus the filterable project explorer. |
| `projects/[slug]/page.tsx` | One project page (`/projects/yuva-sunrise` etc.) | The `[slug]` means one page that works for every project — photos, highlights, specs, floor plans, location, FAQs. |
| `completed-projects/page.tsx` | Completed projects (`/completed-projects`) | Lists ready-to-move / delivered homes. |
| `ongoing-projects/page.tsx` | Ongoing projects (`/ongoing-projects`) | Lists communities still under construction. |

---

## 3. `components/` — reusable pieces of the UI

This folder holds all the building blocks. Once a component is made here, any
page can use it.

### `components/layout/` — the parts that appear on every page

| File name | What it is | What it does |
|---|---|---|
| `Navbar.tsx` | Top navigation bar | Sticky menu with the logo, page links, Projects dropdown, and a mobile menu. |
| `Footer.tsx` | Bottom of every page | Logo, company description, contact details (phone, 3 emails, address), social media links, project/company/resource link columns. |
| `PageHero.tsx` | Page banner | Reusable large hero header (eyebrow + title + description + optional photo) used at the top of inner pages. |
| `StickyCTA.tsx` | Floating buttons | The round WhatsApp + Contact Us buttons pinned to the bottom-right on desktop, full-width bar on mobile. |

### `components/projects/` — project-related cards and lists

| File name | What it is | What it does |
|---|---|---|
| `ProjectCard.tsx` | Standard project card | Used in grids and lists — photo, name, status, and a tilt-on-hover effect; the whole card links to the project page. |
| `FeaturedProjectCard.tsx` | Bigger featured card | Larger card used on the homepage for featured projects. |
| `ProjectsExplorer.tsx` | Filterable grid | Lets visitors filter projects by status (ongoing/ready/completed) and type. |
| `ProjectsMapHero.tsx` | Map-style header | The header of the projects page — a graphic with project pins plus intro text. |

### `components/motion/` — animations

| File name | What it is | What it does |
|---|---|---|
| `ScrollReveal.tsx` | Scroll-in animation | Makes content fade/slide in once when it enters the viewport. |
| `AnimatedCounter.tsx` | Counting numbers | Animates stats (like "10+ years") from 0 to the target value. |
| `AnimatedStats.tsx` | Stats strip | Runs all the counters together with one shared observer. |
| `ScrollProgress.tsx` | Reading progress bar | The thin red bar at the very top that fills as you scroll. |

### `components/forms/`

| File name | What it is | What it does |
|---|---|---|
| `SiteVisitForm.tsx` | Booking form | Checks name, phone, email, project and date, then shows a success message. |

### `components/testimonials/`

| File name | What it is | What it does |
|---|---|---|
| `TestimonialCard.tsx` | Customer review card | Shows a customer quote, name, and photo with a premium hover effect. |

### `components/three/` — 3D graphics (kept for the future)

| File name | What it is | What it does |
|---|---|---|
| `HeroScene.tsx` | 3D city-block scene | A 3D graphic built with react-three-fiber. Currently not used on any page — kept as a reusable hero graphic. |
| `FeaturedScene.tsx` | 3D tower scene | Same idea — a 3D tower graphic, kept for reuse. |

### `components/ui/` — the design-system building blocks

These come from **shadcn/ui** — ready-made, reusable components (buttons,
dialogs, forms, etc.). Only a few are used today, but the whole library is
installed so new pages can be built quickly without writing components from
scratch.

| File name | What it does |
|---|---|
| `section-heading.tsx` | **Used on every page** — the eyebrow + title + description heading, with the Playfair italic accent style. |
| `animated-underline.tsx` | **Used site-wide** — the red accent line under section headings that draws itself in. |
| `accordion.tsx`, `alert-dialog.tsx`, `alert.tsx`, `aspect-ratio.tsx`, `avatar.tsx`, `badge.tsx`, `breadcrumb.tsx`, `button.tsx`, `calendar.tsx`, `card.tsx`, `carousel.tsx`, `chart.tsx`, `checkbox.tsx`, `collapsible.tsx`, `command.tsx`, `context-menu.tsx`, `dialog.tsx`, `drawer.tsx`, `dropdown-menu.tsx`, `form.tsx`, `hover-card.tsx`, `input-otp.tsx`, `input.tsx`, `label.tsx`, `menubar.tsx`, `navigation-menu.tsx`, `pagination.tsx`, `popover.tsx`, `progress.tsx`, `radio-group.tsx`, `resizable.tsx`, `scroll-area.tsx`, `select.tsx`, `separator.tsx`, `sheet.tsx`, `skeleton.tsx`, `slider.tsx`, `sonner.tsx`, `switch.tsx`, `table.tsx`, `tabs.tsx`, `textarea.tsx`, `toast.tsx`, `toaster.tsx`, `toggle-group.tsx`, `toggle.tsx`, `tooltip.tsx` | The full shadcn/ui component library — buttons, inputs, dialogs, dropdowns, tables, toasts, etc. Installed and ready for future use. |

---

## 4. `data/` — the content of the website

This is where all the text and content lives, separate from the code. Want to
change a phone number, add a project, or update a stat? You edit these files.

| File name | What it is | What it does |
|---|---|---|
| `projects.ts` | **The site's content database** | All 6 projects (photos, specs, floor plans, FAQs), testimonials, the 8-member team, company stats, and the full amenities list. Also provides helper functions: find a project, get featured projects, filter by status. |
| `navigation.ts` | Menu & contact data | Main menu links, footer links, company contact info (phone, 3 emails, address, RERA link), social media links, and the WhatsApp number + pre-filled message. |

---

## 5. `public/` — files served to visitors as-is

Anything in here is directly reachable on the website (e.g. `/logo.png`,
`/videos/hero.mp4`).

| Folder / File | What it is | What it does |
|---|---|---|
| `logo.png` | Company logo | Used in the navbar and footer. |
| `videos/hero.mp4` | The home-page hero video | Yuva Group's own footage, shown full-screen behind the headline on the home page (sharpened with a CSS brightness/contrast/saturation filter). |
| `favicon/` | Browser icons | The small brand icon shown in the browser tab (32px, 192px, and Apple touch icon). |
| `photos/hero/` | Page banner photos | The large photos at the top of the About, Careers, Amenities, Gallery, Contact, Schedule-visit, and Home pages. |
| `photos/about/` | Team member photos | Photos of the CEO, Managing Director, and team members. |
| `photos/amenities/` | Amenity photos | Photos of the clubhouse, pool, gym, gardens, walking track, indoor games, etc. (a `README.md` inside lists which photos are needed and their specs). |
| `photos/careers/` | Careers photos | The "life at site" image on the Careers page. |
| `photos/testimonials/` | Customer photos | The avatar photos shown next to customer reviews. |

---

## 6. Supporting folders

| Folder | What it is | What it does |
|---|---|---|
| `lib/` | Shared helpers | `utils.ts` provides the small `cn()` function that merges CSS class names (used all over the components). |
| `hooks/` | Custom React hooks | `use-toast.ts` is the toast-notification helper used by the UI toast components. |
| `types/` | Shared TypeScript types | `index.ts` defines the shapes used across the project — `Project`, `TeamMember`, `Testimonial`, `NavItem`, etc. — so the data and the pages always agree on the format. |

---

## How it all fits together (30-second explanation)

1. **`data/`** holds the content (projects, team, contacts, phone numbers).
2. **`types/`** defines the format that content follows.
3. **`components/`** holds the building blocks (navbar, cards, forms, animations).
4. **`app/`** assembles those blocks into the actual pages (one folder per URL).
5. **`public/`** serves the images, video, and logo.
6. **Netlify** watches the `main` branch on GitHub, builds the project, and publishes it to https://yuvagroupow.netlify.app.

Want to change a phone number? → `data/navigation.ts`
Want to add a project? → `data/projects.ts` (the new page appears automatically)
Want to change a color? → `app/globals.css`
Want to reword a section on the home page? → `app/page.tsx`
