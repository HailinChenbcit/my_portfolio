# Portfolio Website MVP Tasks

## Coding Rules
- Write only the minimal required code
- No major refactors or structural changes
- No unrelated edits
- Stay focused on the current task
- Code must be precise, modular, and testable
- Do not break existing functionality
- If anything is required from me (e.g., Supabase/AWS setup), explicitly tell me

## Phase 1: Project Setup and Basic Structure

### Task 1.1: Initialize Next.js Project
- [x] Create new Next.js project with TypeScript
- [x] Install and configure Tailwind CSS
- [x] Set up basic project structure following architecture.md
- [x] Test: Verify project runs with `npm run dev`

### Task 1.2: Configure Shadcn/UI
- [x] Install shadcn/ui CLI
- [x] Initialize shadcn/ui with default theme
- [x] Test: Verify shadcn/ui components can be imported

### Task 1.3: Set Up Basic Layout
- [x] Create root layout.tsx with basic structure
- [x] Add metadata configuration
- [x] Test: Verify layout renders without errors

## Phase 2: Core Components

### Task 2.1: Create Navbar Component
- [x] Create basic Navbar.tsx component
- [x] Add logo/name placeholder
- [x] Add navigation links (Home, Resume, Projects, Contact)
- [x] Test: Verify navigation links render correctly

### Task 2.2: Create Footer Component
- [x] Create Footer.tsx component
- [x] Add copyright information
- [x] Add social media links (GitHub, LinkedIn)
- [x] Test: Verify footer renders correctly

### Task 2.3: Create SectionHeader Component
- [x] Create reusable SectionHeader component
- [x] Add title and subtitle props
- [x] Style with Tailwind
- [x] Test: Verify component renders with different props

## Phase 3: Landing Page

### Task 3.1: Hero Section
- [x] Create hero section in page.tsx
- [x] Add name and title
- [x] Add brief introduction
- [x] Test: Verify hero section renders correctly

### Task 3.2: About Section
- [x] Create about section
- [x] Add personal description
- [x] Add skills list
- [x] Test: Verify about section renders correctly

### Task 3.3: Featured Projects Section
- [x] Create projects section
- [x] Add ProjectCard component
- [x] Display 2-3 featured projects
- [x] Test: Verify projects display correctly

## Phase 4: Projects Page

### Task 4.1: Projects List Page
- [x] Create projects/page.tsx
- [x] Add page title and description
- [x] Test: Verify page renders correctly

### Task 4.2: Project Card Component
- [x] Create ProjectCard component
- [x] Add title, description, and GitHub link
- [x] Add basic hover effects
- [x] Test: Verify card renders and links work

### Task 4.3: Projects Data
- [x] Create projects.ts in content folder
- [x] Add TypeScript interface for project data
- [x] Add sample project data
- [x] Test: Verify data can be imported and used

## Phase 5: Resume Page

### Task 5.1: Resume Page Structure
- [x] Create resume/page.tsx
- [x] Add page title
- [x] Test: Verify page renders correctly

### Task 5.2: Experience Section
- [x] Add experience section
- [x] Create experience data structure
- [x] Display work history
- [x] Test: Verify experience section renders correctly

### Task 5.3: Education Section
- [x] Add education section
- [x] Create education data structure
- [x] Display education history
- [x] Test: Verify education section renders correctly

## Phase 6: Contact Page

### Task 6.1: Contact Form Page
- [x] Create contact/page.tsx
- [x] Add page title and description
- [x] Test: Verify page renders correctly

### Task 6.2: Contact Form Component
- [x] Create contact form with shadcn/ui
- [x] Add name, email, and message fields
- [x] Add form validation
- [x] Test: Verify form renders and validates correctly

### Task 6.3: Contact API Route
- [x] Create contact API route
- [x] Add basic email sending functionality
- [x] Add error handling
- [x] Test: Verify form submission works

## Phase 7: Theme and Polish

### Task 7.1: Dark Mode Setup
- [x] Add theme toggle component
- [x] Configure dark mode in Tailwind
- [x] Test: Verify theme switching works

### Task 7.2: Basic Animations
- [x] Add Framer Motion
- [x] Add page transition animations
- [x] Add hover effects
- [x] Test: Verify animations work correctly

### Task 7.3: Responsive Design
- [x] Mobile-first approach
- [x] Responsive navigation
- [x] Responsive grid layouts
- [x] Test: Verify responsive design works

### Task 7.4: Performance optimization
- [x] Image optimization
- [x] Code splitting
- [x] Lazy loading
- [x] Test: Verify performance improvements

## Phase 8: Deployment

### Task 8.1: Production Build
- [ ] Run production build
- [ ] Fix any build errors
- [ ] Test: Verify build completes successfully

### Task 8.2: Deployment Setup
- [ ] Set up Vercel deployment
- [ ] Configure environment variables
- [ ] Test: Verify deployment works

### Task 8.3: Final Testing
- [ ] Test all pages and features
- [ ] Fix any issues
- [ ] Test: Verify everything works in production

## Notes
- Each task should be completed and tested before moving to the next
- Commit after each completed task
- Create pull requests for review if working in a team
- Document any issues or decisions made during implementation