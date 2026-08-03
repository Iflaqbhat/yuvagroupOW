# Yuva Group Website

The official website for **Yuva Group (Yuva Structures Pvt. Ltd.)** — a Bengaluru
real-estate developer. The site shows the company's projects, amenities,
locations, testimonials, and lets visitors book a site visit.

> Every source file also has a short "File purpose:" comment at the top of the
> file that explains in plain English what that file does.

---

## Tech stack

| Tool | What it does for us |
|---|---|
| **Next.js 13** (React) | The framework that builds the site. Each file in `app/` is a page. |
| **TypeScript** | Adds types so code is safer and easier to understand. |
| **Tailwind CSS** | Styling — classes like `bg-white` and `py-24` are written directly in the markup. |
| **shadcn/ui** | Ready-made UI building blocks (buttons, dialogs, forms, etc.) in `components/ui/`. |
| **framer-motion** | Animations — scroll reveals, page transitions, and card effects. |
| **react-three-fiber** | 3D graphics (kept for future use on the homepage). |
| **Netlify** | Hosting — pushes to `main` on GitHub automatically rebuild the live site. |

---

## How to run it

```bash
# 1. Go to the project folder
cd /Users/iflaqkhurshid/Projects/yuvagroupp2-next

# 2. Install dependencies (first time only)
pnpm install

# 3. Start the dev server (hot reload)
pnpm dev            # opens at http://localhost:3000
pnpm dev -p 3002    # or on port 3002

# 4. Check for type errors
pnpm typecheck

# 5. Build + preview the production version
pnpm build
pnpm start -p 3002
```

Live site: **https://yuvagroupow.netlify.app** (updates when you push to `main`).

---

## How the site is organised

```
app/                 The pages of the website (one folder per page)
components/          Reusable pieces of the UI
  layout/            Navbar, footer, page banners, contact buttons
  projects/          Project cards, filters, map header
  motion/            Scroll animations
  forms/             The site-visit booking form
  three/             3D scenes (not used on pages right now)
  ui/                shadcn/ui building blocks (buttons, forms, dialogs…)
data/                All the website's content (projects, contact info…)
types/               Shared TypeScript types
hooks/               Small React helpers (toast notifications)
lib/                 Tiny helpers (class-name merging)
public/              Images, videos, and other static files
```

---

## What each file does

### Pages — `app/`

| File | What it does |
|---|---|
| `page.tsx` | **Homepage.** Hero with full-bleed video, company stats, featured projects, amenities preview, philosophy, locations, testimonials, and call-to-action. |
| `layout.tsx` | **Root layout.** Loads fonts + global CSS, sets SEO info, and wraps every page with the navbar, footer, sticky contact buttons, and scroll progress bar. |
| `about/page.tsx` | About page — company story and values. |
| `amenities/page.tsx` | Amenities page — photo gallery of community amenities plus an "also included" list. |
| `careers/page.tsx` | Careers page — how to join and send a profile. |
| `contact/page.tsx` | Contact page — address, phone, email, enquiry form. |
| `gallery/page.tsx` | Gallery page — a photo archive of projects. |
| `privacy/page.tsx` | Privacy Policy page (legal). |
| `terms/page.tsx` | Terms & Conditions page (legal). |
| `projects/page.tsx` | All projects page — map-style header plus the filterable explorer. |
| `projects/[slug]/page.tsx` | Individual project page — photos, highlights, specs, floor plans, location, FAQs. |
| `ongoing-projects/page.tsx` | Lists projects still under construction. |
| `completed-projects/page.tsx` | Lists ready-to-move and delivered homes. |
| `schedule-visit/page.tsx` | "Schedule a Site Visit" page — what to expect and the booking form. |
| `robots.ts` | Generates `robots.txt` so search engines can crawl the site. |
| `sitemap.ts` | Generates `sitemap.xml` with every page and project URL. |
| `loading.tsx` | Small spinner shown while a page loads. |
| `not-found.tsx` | 404 page for missing URLs. |
| `globals.css` | Global styles — design tokens (colors, fonts) and base element styles. |

### Reusable components — `components/`

| File | What it does |
|---|---|
| `layout/Navbar.tsx` | Sticky top navigation — logo, menu, Projects dropdown, mobile menu. |
| `layout/Footer.tsx` | Footer — logo, description, contact details, link columns. |
| `layout/PageHero.tsx` | Reusable banner at the top of inner pages. |
| `layout/StickyCTA.tsx` | Floating "Contact Us" buttons (bottom-right on desktop, full-width bar on mobile). |
| `motion/ScrollProgress.tsx` | Thin accent bar at the top showing reading progress. |
| `motion/ScrollReveal.tsx` | Scroll animations — content fades/slides in once when it enters the viewport. |
| `projects/ProjectCard.tsx` | Standard project card with a 3D tilt and glow on hover. |
| `projects/FeaturedProjectCard.tsx` | Larger featured project card for the homepage. |
| `projects/ProjectsExplorer.tsx` | Filterable project grid (filter by status and type). |
| `projects/ProjectsMapHero.tsx` | Projects page header — map-style graphic with project pins. |
| `forms/SiteVisitForm.tsx` | Site-visit booking form — validates inputs and shows a success message. |
| `three/HeroScene.tsx` | 3D city-block scene. Not used on any page yet — kept for future use. |
| `three/FeaturedScene.tsx` | 3D tower scene. Not used on any page yet — kept for future use. |
| `ui/section-heading.tsx` | Reusable section heading (eyebrow + title + description). |
| `ui/*` (46 files) | Standard **shadcn/ui** building blocks (buttons, dialogs, forms, tabs, toasts…). Each file has a "File purpose:" comment. |

### Data, types, helpers — `data/`, `types/`, `hooks/`, `lib/`

| File | What it does |
|---|---|
| `data/navigation.ts` | Menu links, footer links, and company contact details. |
| `data/projects.ts` | All site content — projects, amenities, company stats, testimonials. |
| `types/index.ts` | Shared TypeScript types (Project, Testimonial, NavItem…). |
| `hooks/use-toast.ts` | Toast notification helper. |
| `lib/utils.ts` | `cn()` — merges CSS class names. |

### Configuration

| File | What it does |
|---|---|
| `tailwind.config.ts` | Tailwind theme — colors, fonts, animations. |
| `next.config.js` | Next.js settings — images unoptimized, eslint skipped at build. |
| `postcss.config.js` | Processes Tailwind + autoprefixer. |
| `components.json` | shadcn/ui settings (how components are added). |
| `tsconfig.json` | TypeScript settings. |
| `.eslintrc.json` | Code-linting rules. |
| `public/` | Static files — photos (`photos/amenities/`), the hero video (`videos/hero.mp4`), and the logo. |

### Editing content

Almost all website text and photos live in one place:

- **Project/amenity data** → `data/projects.ts`
- **Menu + contact info** → `data/navigation.ts`
- **Amenity photos** → `public/photos/amenities/` (see its `README.md` for the required photo names and sizes)
- **Hero background video** → `public/videos/hero.mp4`

So most day-to-day edits (adding a project, changing a phone number) are
changes to a data file — no need to touch the page code.
