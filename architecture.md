# Portfolio Website Architecture (Next.js + TypeScript + Shadcn/UI)

## Overview

A modern portfolio website built with:

* **Framework**: Next.js (App Router)
* **Language**: TypeScript
* **UI Library**: React + Shadcn/UI
* **Styling**: Tailwind CSS
* **State Management**: React Context or Zustand (optional)
* **Animation**: Framer Motion
* **Hosting**: Vercel / AWS / Netlify

---

## 1. File & Folder Structure

```
/portfolio
├── app/
│   ├── layout.tsx             # Root layout wrapper
│   ├── page.tsx               # Landing Page
│   ├── resume/page.tsx        # Resume Page
│   ├── projects/page.tsx      # Project List Page
│   ├── contact/page.tsx       # Contact Form Page
│   └── api/
│       └── contact/route.ts   # API route for contact form submission
│
├── components/
│   ├── Navbar.tsx             # Navigation bar
│   ├── Footer.tsx             # Footer
│   ├── ProjectCard.tsx        # Card to show individual project (links to GitHub)
│   ├── SectionHeader.tsx      # Reusable section titles
│   └── ThemeToggle.tsx        # Dark/light mode toggle
│
├── lib/
│   └── utils.ts               # Utility functions (e.g. form validation)
│
├── styles/
│   └── globals.css            # Tailwind base styles
│
├── public/
│   └── assets/                # Static images and logos
│
├── types/
│   └── index.ts               # Shared TypeScript types
│
├── content/
│   └── projects.ts            # List of projects with title, short description, and GitHub URL
│
├── context/
│   └── theme-context.tsx      # Optional global theme context
│
├── .env.local                 # Environment variables (e.g., API keys)
├── tailwind.config.ts         # Tailwind customization
├── tsconfig.json              # TypeScript configuration
├── next.config.js             # Next.js configuration
└── README.md
```

---

## 2. Features & Function

### `/app`

* Implements App Router with layouts and route-based pages.
* Pages include: Landing, Resume, Projects, Contact.
* API route handles form submission securely.

### `/components`

* Encapsulates reusable UI parts.
* Keeps layout clean and DRY (Don’t Repeat Yourself).
* Animations for transitions and hover effects using Framer Motion.

### `/lib`

* Utility functions and third-party integration logic.

### `/styles`

* Global styles via Tailwind and custom CSS (if needed).

### `/public`

* Stores static assets such as profile image, logos, favicons.

### `/types`

* Central location for TypeScript interfaces and types.

### `/content`

* Project list includes:

  * `title`: project name
  * `description`: short summary
  * `githubUrl`: external link to GitHub repo

### `/context`

* Optional: manage global theme or layout preferences.

---

## 3. State Storage & Server Communication

### Local State

* Handled via React `useState` / `useContext`.
* Global theme, modal toggles, form data.

### Remote State

* Contact form submission via `app/api/contact/route.ts` (POST method).
* Future enhancements can include CMS (e.g., Notion, Sanity, or MDX).

---

## 4. Deployment & Hosting

* **Vercel**: Recommended for Next.js (auto-deploy on git push).
* **Netlify/AWS**: Alternative options.

---

## 5. Optional Enhancements

* Blog page using MDX.
* Add animations via Framer Motion for section entrance, hover effects, page transitions.
* Integrate analytics (e.g., Plausible, Google Analytics).
* Admin panel to manage project content.

---

## Final Notes

Use `shadcn/ui` to style components with pre-built themes. Configure Tailwind with `tailwind.config.ts` and wrap components in theme providers for better UX. Integrate Framer Motion for polished animations.

To run:

```bash
npm install
npm run dev
```

To build:

```bash
npm run build
```