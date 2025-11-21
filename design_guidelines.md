# Design Guidelines: Premium IT Solutions Website

## Design Approach

**Reference-Based Approach**: Draw inspiration from Vercel, Stripe, and Apple for a premium tech aesthetic combined with modern glassmorphism trends.

**Core Design Principles**:
- Futuristic premium tech aesthetic with glassmorphism effects
- Dark-to-light gradient backgrounds with strategic neon accents
- Clean, spacious layouts with subtle depth
- Professional trust-building through polished components

## Typography

**Font Stack**: 
- Primary: 'Inter' for UI elements and body text
- Accent: 'Space Grotesk' or 'Outfit' for headlines and hero sections

**Hierarchy**:
- Hero Headlines: 3xl-6xl, bold/extrabold, tight leading
- Section Headers: 2xl-4xl, semibold
- Subheadings: xl-2xl, medium
- Body: base-lg, normal weight, relaxed leading
- Captions/Labels: sm-base, medium

## Layout System

**Spacing Units**: Consistently use Tailwind units of 4, 8, 12, 16, 20, 24, 32 (e.g., p-4, gap-8, py-20, mt-32)

**Container Strategy**:
- Full-width sections with inner max-w-7xl containers
- Content-focused sections: max-w-6xl
- Text blocks: max-w-3xl for readability

**Grid Patterns**:
- Service cards: 3-column on desktop (lg:grid-cols-3), 2-column tablet (md:grid-cols-2), single mobile
- Portfolio: Masonry-style 3-column grid
- Team members: 4-column grid scaling to 2 and 1

## Component Library

### Hero Sections
**Home Hero**: Full-viewport (min-h-screen) with glassmorphic card overlay, gradient background, 3D-style illustration/image on right side, headline + subheadline + dual CTA buttons (primary + secondary)

**Secondary Heroes** (Services/About/Contact): 50-60vh height, centered content with tech background pattern/gradient

### Glassmorphism Cards
- Semi-transparent backgrounds (bg-white/10 or bg-black/10)
- Backdrop blur (backdrop-blur-lg)
- Subtle borders with neon glow (border-white/20 with blue glow)
- Rounded corners (rounded-2xl)

### Service Cards
Icon container with gradient background (circular, 60-80px), service title (xl font), 2-3 line description, subtle hover lift effect (translate-y-1), neon border glow on hover

### Stats/Achievement Counters
Large numbers (4xl-5xl, bold), animated count-up effect, descriptive label below, arranged in 4-column grid with dividers

### Testimonial Slider
Card-based carousel with client photo (rounded-full, 60px), 5-star rating display, quote text, client name + company, navigation dots, auto-play with manual controls

### Portfolio Grid
Staggered masonry layout, project cards with image overlay, hover reveals title + category + "View Project" link, subtle scale and glow effects

### Timeline (About Page)
Vertical timeline with year markers on left, milestone cards on right, connecting line with animated dots, alternating layout on larger screens

### Team Member Cards
Square profile images (rounded-lg), name + role, social links, subtle hover scale effect, arranged in responsive grid

### FAQ Accordion
Clean question headers with expand icons, smooth height transitions, answer content with comfortable padding, one-open-at-a-time behavior

### Contact Form
Floating label inputs, glassmorphic input fields with subtle borders, textarea for message (min 4 rows), prominent submit button with loading state, form validation indicators

### Trust Badges
Icon + text combination, semi-transparent containers, arranged horizontally, includes certifications/partnerships

### Footer
Multi-column layout (4 columns desktop, stacked mobile): Company info + Quick Links + Services + Contact details, social media icons, copyright text, newsletter signup option

## Page-Specific Specifications

**Home Page** (8 sections):
1. Hero with 3D illustration/futuristic image
2. Service Overview (6 cards grid)
3. About Snippet (2-column: text + achievements)
4. Why Choose Us (stats + benefits)
5. Portfolio Preview (6-9 projects, masonry)
6. Testimonials Slider
7. CTA Section (glassmorphic banner)
8. Footer

**Services Page** (3 sections):
1. Hero banner
2. Service Blocks (6 detailed cards with icons, descriptions, feature lists, CTAs)
3. Footer

**About Us Page** (7 sections):
1. Hero with team illustration
2. Mission/Vision/Values (3-column)
3. Timeline (company growth)
4. What Makes Us Different (badge/feature cards)
5. Team Grid (8-12 members)
6. Client Logos (6-12 logos, grayscale with hover color)
7. Footer

**Contact Page** (5 sections):
1. Hero
2. Contact Form + Info (2-column split)
3. Location Map (embedded iframe)
4. FAQ Accordion (6-8 questions)
5. Footer with trust badges

## Images

**Hero Images Required**:
- **Home**: Futuristic 3D tech illustration (abstract geometric shapes, holographic elements, tech workspace, or AI visualization) - full-screen positioning on right side
- **Services**: Abstract tech pattern background (circuit boards, data streams, or geometric tech shapes) - subtle, low opacity
- **About**: Team collaboration illustration or modern office environment - positioned as background or side element
- **Contact**: Abstract communication/connection visualization - background element

**Additional Images**:
- Portfolio: 6-9 project screenshots/mockups showcasing diverse work
- Testimonials: Client headshots (circular, professional)
- Team: Professional team member photos (8-12 members)
- Client logos: 6-12 recognizable brand logos

**Treatment**: All hero images should have subtle gradient overlays for text legibility, portfolio images with hover darkening effect, team photos with subtle grayscale-to-color on hover

## Visual Treatments

**Neon Accents**: Electric blue (#0EA5E9, #3B82F6) used for CTAs, borders, glows, and interactive elements

**Gradients**: 
- Dark backgrounds: slate-900 to slate-800 with blue tints
- Card overlays: transparent to subtle blue/purple
- Button gradients: blue-600 to cyan-500

**Glow Effects**: box-shadow with blue/cyan spread on hover states for cards, buttons, and interactive elements

**Animations**: Minimal and purposeful - subtle hover lifts, fade-ins on scroll, smooth transitions (300ms ease), number counters on stats