# Vistar City --- Landing Page Design & Development Specification

> **Product:** Vistar City\
> **Brand:** Vistar City --- Dream Home Maker\
> **Page:** `/`\
> **Purpose:** Premium public-facing real-estate marketing website for
> residential plots in Bihar\
> **Primary conversion:** Book a Site Visit\
> **Secondary conversion:** Explore Projects / Contact Us\
> **Implementation target:** Next.js 15 App Router + React 19 +
> TypeScript + Tailwind CSS 4 + Motion + GSAP only where justified

------------------------------------------------------------------------

## 1. Product Context

Vistar City is a premium public marketing website for residential plots
and plotted developments in Bihar.

This website is **not**:

-   a booking engine
-   a live plot inventory system
-   a property-management application
-   an ERP
-   a CRM
-   a payment platform
-   a customer login portal

The website exists to move a visitor through:

**Dream → Understand → Trust → Explore → Validate → Visit / Enquire**

The website should feel like a modern premium real-estate brand, not a
property portal and not a SaaS dashboard.

### Business reality

The current project catalogue is static and lives in `lib/projects.ts`.

Known projects include:

-   **Vistar Green City** --- Patna, Bihar
-   **Vistar Enclave** --- Muzaffarpur, Bihar
-   **Vistar Growth Corridor** --- Raxaul, Bihar

Prices, if displayed anywhere, are marketing copy only and must never be
presented as live quotations.

The `/plots` route is not a public inventory page and should redirect to
`/contact`.

Lead APIs exist for:

-   `/api/leads/site-visit`
-   `/api/leads/enquiry`
-   `/api/leads/partner`

At present these validate requests but persistence is not implemented.
Do not represent form submission as a completed booking.

------------------------------------------------------------------------

# 2. Core Design Idea

## "Dream Home Maker"

The slogan should influence the entire experience.

Do not make the website about plots first.

Make it about what the plot enables:

-   a future home
-   family memories
-   belonging
-   stability
-   a better tomorrow
-   long-term ownership

The visitor should not feel:

> "I am browsing a real-estate catalogue."

The visitor should feel:

> "I am exploring where my future home could begin."

### Design principle

**Dream visually. Prove rationally. Convert clearly.**

The visual storytelling creates aspiration.

The project, location, documentation and planning sections provide
rational confidence.

The CTA then asks for the simplest realistic next step:

**Book a Site Visit.**

------------------------------------------------------------------------

# 3. Consumer Journey

The homepage must follow this psychological sequence:

``` text
1. DREAM
   ↓
   "I can imagine a future here."

2. ORIENT
   ↓
   "I understand what Vistar City does."

3. TRUST
   ↓
   "The brand appears transparent and thoughtfully planned."

4. EXPLORE
   ↓
   "I can see the actual projects."

5. JUSTIFY
   ↓
   "I understand why these Bihar locations matter."

6. IMAGINE
   ↓
   "I can picture my family / future here."

7. VALIDATE
   ↓
   "Other people have trusted the brand."

8. ACT
   ↓
   Book a Site Visit / Contact Us
```

Every section should have a reason to exist in this journey.

------------------------------------------------------------------------

# 4. Visual Direction

## Overall aesthetic

The design should be:

-   premium
-   modern
-   editorial
-   calm
-   warm
-   spacious
-   cinematic
-   trustworthy
-   human
-   sophisticated

Avoid:

-   old-school real-estate layouts
-   excessive gradients
-   generic glassmorphism
-   giant rounded SaaS cards
-   loud badges
-   fake urgency
-   countdown timers
-   "SALE" labels
-   red/orange sales aesthetics
-   excessive shadows
-   excessive animation
-   dense text
-   stock-photo collage overload

------------------------------------------------------------------------

# 5. Visual Language

## Color palette

Use a restrained palette.

``` css
:root {
  --vc-forest-950: #06251E;
  --vc-forest-900: #08352B;
  --vc-forest-800: #0D4437;
  --vc-forest-700: #185647;

  --vc-ivory-50: #FCFAF4;
  --vc-ivory-100: #F7F3E8;
  --vc-ivory-200: #EEE8D9;

  --vc-gold-400: #C7A75B;
  --vc-gold-500: #B6923E;
  --vc-gold-600: #9D7B31;

  --vc-charcoal: #18221F;
  --vc-muted: #66716B;
  --vc-line: rgba(24, 34, 31, 0.14);

  --vc-white: #FFFFFF;
}
```

### Color usage

-   Ivory: primary page background
-   Forest: brand depth, CTA sections, footer
-   Gold: small accents and primary CTA emphasis
-   Charcoal: primary body text
-   White: cards and overlays
-   Never use gold as the dominant page color

Gold should feel like an accent, not decoration.

------------------------------------------------------------------------

# 6. Typography

## Display font

**Cormorant Garamond**

Use for:

-   hero headline
-   section headings
-   major statements
-   large editorial pull quotes

Recommended weights:

-   400
-   500
-   600

## UI / body font

**Source Sans 3**

Use for:

-   navigation
-   body copy
-   labels
-   buttons
-   metadata
-   project information

### Type scale

Desktop:

``` text
Hero display: 80–104px
Hero supporting heading: 24–32px
Section display: 56–72px
Section heading: 44–56px
Card title: 26–32px
Body large: 18–20px
Body: 16–17px
Small: 13–14px
Eyebrow: 11–12px
```

Mobile:

``` text
Hero display: 48–62px
Section display: 40–48px
Section heading: 34–42px
Card title: 24–28px
Body: 16px
Small: 13–14px
```

Do not make every heading huge.

Typography hierarchy should create rhythm.

------------------------------------------------------------------------

# 7. Layout System

## Desktop

Max content width:

``` text
1280px–1360px
```

Page side padding:

``` text
32px minimum
48–64px preferred on desktop
```

Use a 12-column grid for complex sections.

## Tablet

Use:

``` text
24–40px side padding
```

## Mobile

Use:

``` text
16–20px side padding
```

Cards should stack naturally.

Never force desktop layouts onto mobile.

------------------------------------------------------------------------

# 8. Hero Section

## Concept

Do NOT use a conventional 50/50 split hero.

Use a **cinematic immersive hero**.

The hero should feel like the visitor has entered the world Vistar City
is selling.

### Structure

``` text
┌───────────────────────────────────────────────┐
│ Transparent navigation over image             │
│                                               │
│  eyebrow                                      │
│  DREAM HOME MAKER                             │
│  A Brighter Tomorrow                          │
│                                               │
│  supporting copy                              │
│                                               │
│  [Book a Site Visit] [Explore Projects]       │
│                                               │
│                         family / landscape    │
│                                               │
│ bottom trust stats                            │
└───────────────────────────────────────────────┘
```

### Hero image

Use the provided inspiration image:

`/mnt/data/vistaar-hero-image.png`

The image should feel like:

-   family
-   modern home
-   open land
-   golden hour
-   aspiration
-   future

The image should occupy almost the entire viewport.

### Hero height

Desktop:

``` text
min-height: 760px;
height: 92vh;
max-height: 900px;
```

Mobile:

``` text
min-height: 720px;
```

### Hero copy

Eyebrow:

> LAND TODAY. A BRIGHTER TOMORROW.

Main headline:

> Dream Home Maker

Alternative supporting line:

> Where your dream of home begins.

Primary description:

> Thoughtfully planned residential plots in Bihar's growth corridors ---
> for your family, your future, and a more fulfilling life.

Primary CTA:

> Book a Site Visit →

Secondary CTA:

> Explore Projects →

### Hero supporting metrics

Only use factual/approved numbers.

If the project does not have verified numbers, do not fabricate them.

Preferred structure:

``` text
3+          Prime Locations
1000+       Happy Families
Clear       Documentation
```

If those numbers are not approved by the client, replace them with
non-numeric value statements.

### Hero micro-navigation

At the bottom:

``` text
01  Dream
02  Explore
03  Visit
```

This is decorative storytelling navigation, not a fake carousel if no
carousel exists.

### Hero secondary action

Small circular play control:

> Watch Our Story

Only show it if an actual video/story experience exists.

If no video exists, remove it.

------------------------------------------------------------------------

# 9. Navigation

Navigation should float over the hero.

### Desktop

Left:

**VISTAR CITY**

Tagline:

**DREAM HOME MAKER**

Center:

-   Home
-   About
-   Projects
-   Locations
-   Become a Partner
-   Contact

Right:

**Book a Site Visit →**

### Behavior

At page top:

-   transparent background
-   white/dark adaptive text depending on hero contrast

After scrolling:

-   ivory/white background
-   forest text
-   subtle bottom border
-   slight backdrop blur
-   compact height

Use Motion for:

-   navbar background transition
-   logo scale/position
-   mobile menu reveal

Do not overanimate the navigation.

------------------------------------------------------------------------

# 10. Section 02 --- Trust / Value Bar

Immediately after the hero, use a clean ivory section.

Four columns:

### Strategic Locations

> In high-growth corridors

### Clear Documentation

> Transparent and hassle-free

### Future-Ready Communities

> Designed for modern living

### Long-Term Value

> A brighter tomorrow

Each item:

-   simple Lucide icon
-   small heading
-   one-line description

Avoid boxed cards.

The section should feel like a refined editorial information rail.

------------------------------------------------------------------------

# 11. Section 03 --- Brand Story

## Goal

Move the visitor from aspiration to understanding.

### Layout

Asymmetrical editorial layout.

Left:

``` text
MORE THAN LAND

A Place for
Your Next Chapter
```

Body:

> At Vistar City, we believe a home begins with a dream. We bring you
> well-located, legally clear, and thoughtfully planned projects in
> Bihar's most promising corridors --- so you can build a future that
> truly feels like home.

CTA:

> Our Story →

Right:

Large lifestyle image with an organic / architectural crop.

Preferred imagery:

-   child in open landscape
-   family
-   future home
-   greenery
-   sunlight

### Decorative language

Use subtle botanical line art.

Do not fill the section with illustrations.

### Animation

On scroll:

-   image reveals with a soft clip-path expansion
-   heading moves 20--30px upward
-   body fades in
-   decorative leaf has very subtle parallax

------------------------------------------------------------------------

# 12. Section 04 --- Featured Projects

## Purpose

Now answer:

> "What does Vistar City actually offer?"

Eyebrow:

> OUR PROJECTS

Heading:

> Thoughtfully Planned. Beautifully Located.

Supporting copy:

> From Patna to Muzaffarpur to Raxaul, our projects are located in
> growth corridors with strong connectivity, modern infrastructure and
> long-term potential.

Right-side link:

> View All Projects →

### Project cards

Three cards on desktop.

#### Vistar Green City

Location:

> Patna, Bihar

Description:

> A serene, well-planned plotted development in Patna's growing
> corridor.

CTA:

> Explore Project →

#### Vistar Enclave

Location:

> Muzaffarpur, Bihar

Description:

> A well-connected community designed for modern living.

CTA:

> Explore Project →

#### Vistar Growth Corridor

Location:

> Raxaul, Bihar

Description:

> Be part of a high-potential growth zone with strong regional
> connectivity.

CTA:

> Explore Project →

### Card design

Image:

16:9

Below image:

-   project name
-   location
-   concise description
-   small metadata row
-   text link

Avoid:

-   huge shadows
-   fake availability badges
-   "Only 3 left"
-   fake discounts
-   fake price tags

If a project has a verified marketing label, it may be shown subtly.

### Interaction

Desktop hover:

-   image scale: 1.03
-   arrow moves 4px
-   card border slightly strengthens

Mobile:

No hover dependency.

------------------------------------------------------------------------

# 13. Section 05 --- Why Bihar / Location Opportunity

This section should visually change the pace.

Use a deep forest background with a photographic Bihar landscape.

## Headline

> A Region on the Rise.

Supporting line:

> From Patna to Muzaffarpur to Raxaul, Bihar is witnessing
> transformation through better infrastructure, stronger connectivity
> and emerging opportunities.

CTA:

> Explore Locations →

### Visual

Right side:

Stylized Bihar map.

Show only approved project/location markers:

-   Patna
-   Muzaffarpur
-   Raxaul

Do not invent additional locations.

### Supporting points

``` text
Better Connectivity
Growing Infrastructure
More Opportunities
```

### Important

Do not make unsupported claims such as:

-   guaranteed appreciation
-   guaranteed returns
-   "fastest growing"
-   "best investment"
-   "100% appreciation"
-   guaranteed government projects

All location claims should be factual and defensible.

### Map design

Map should be elegant and minimal.

Use:

-   thin ivory/gold outline
-   small gold location markers
-   subtle animated route line

Do not make it look like Google Maps.

------------------------------------------------------------------------

# 14. Section 06 --- Lifestyle / Dream Realization

## Purpose

Reconnect emotionally after the rational location section.

Use a wide lifestyle image.

Suggested scene:

-   family
-   child
-   open field
-   golden hour
-   feeling of possibility

### Copy

Eyebrow:

> FOR FAMILIES. FOR GENERATIONS.

Headline:

> Where Dreams Grow Together.

Body:

> Whether you're planning a home for your family or an investment for
> the future, Vistar City offers spaces where families thrive,
> communities grow, and dreams take root.

CTA:

> Book a Site Visit →

### Side words

Use a quiet vertical typographic stack:

``` text
LIVE
INVEST
GROW
BELONG
```

This is a brand device.

Do not make it look like a menu.

------------------------------------------------------------------------

# 15. Section 07 --- Customer Trust

## Purpose

Provide social proof immediately before conversion.

Eyebrow:

> WHAT PEOPLE SAY

Heading:

> Growing Trust, Together.

Testimonial card:

> "Vistar City gave us the confidence to invest in our future. The
> location, clarity and entire experience felt right from day one."

Attribution:

> --- A Vistar City Customer

### Critical rule

This is placeholder content until a real customer testimonial is
supplied.

Do not publish a fabricated customer identity, photo or quote.

### Design

Use:

-   ivory background
-   large quote mark
-   subtle family image
-   carousel controls if multiple real testimonials exist

If only one real testimonial exists, do not create fake carousel
pagination.

------------------------------------------------------------------------

# 16. Section 08 --- Final Conversion CTA

This is the strongest conversion section.

Use deep forest background.

Optional subtle background:

-   aerial landscape
-   leaf macro
-   mountain/road
-   sunset landscape

Do not use a busy background behind the text.

### Eyebrow

> READY TO TAKE THE FIRST STEP?

### Heading

> Let's Turn Your Dream Into an Address.

Alternative:

> Let's Build a Brighter Tomorrow.

### Supporting copy

> Book a site visit, ask a question, or simply start a conversation. Our
> team is here to help you take the next step.

### Primary CTA

> Book a Site Visit →

### Secondary CTA

> Contact Us

### Right-side brand phrase

``` text
Dream
Plan
Build
Belong
```

This creates the final emotional signature.

------------------------------------------------------------------------

# 17. Footer

Dark forest footer.

### Column 01 --- Brand

Vistar City logo.

Tagline:

> DREAM HOME MAKER

Short statement:

> Thoughtfully planned residential plots in Bihar's growth corridors,
> for a brighter tomorrow.

Social icons:

-   Facebook
-   Instagram
-   YouTube
-   LinkedIn

Use Lucide or simple brand icons only where available.

### Column 02 --- Quick Links

-   Home
-   About
-   Projects
-   Locations
-   Become a Partner
-   Contact

### Column 03 --- Projects

-   Vistar Green City
-   Vistar Enclave
-   Vistar Growth Corridor
-   View All Projects

### Column 04 --- Get in Touch

Use only verified client information.

Potential structure:

``` text
Phone
Email
Office Address
```

Do not publish "Placeholder Address" in production.

### Footer CTA

> Book a Site Visit →

### Bottom bar

``` text
© 2026 Vistar City. All rights reserved.

Privacy Policy
Terms of Use
```

Use current year dynamically.

------------------------------------------------------------------------

# 18. Complete Homepage Order

The final page order should be:

``` text
01  Floating Navigation
02  Cinematic Hero
03  Trust / Value Rail
04  Brand Story
05  Featured Projects
06  Bihar / Strategic Locations
07  Lifestyle / Dream Realization
08  Customer Trust
09  Final Conversion CTA
10  Footer
```

This order is intentional.

Do not move projects above the initial trust/value section unless
conversion testing proves it better.

------------------------------------------------------------------------

# 19. CTA Strategy

There should be one dominant conversion action:

## Primary

**Book a Site Visit →**

Secondary:

**Explore Projects →**

Tertiary:

**Contact Us**

### CTA hierarchy

``` text
Hero:
[Book a Site Visit] [Explore Projects]

Projects:
Explore Project →

Locations:
Explore Locations →

Lifestyle:
Book a Site Visit →

Final:
[Book a Site Visit] [Contact Us]

Footer:
Book a Site Visit →
```

Do not introduce competing actions such as:

-   Buy Now
-   Reserve Now
-   Check Inventory
-   Pay Now
-   Get Instant Price
-   Download Brochure

unless the product/business actually supports them.

------------------------------------------------------------------------

# 20. Mobile UX

Mobile is not a compressed desktop.

### Header

Mobile:

``` text
[Logo]                    [Menu]
```

Inside menu:

-   Home
-   About
-   Projects
-   Locations
-   Become a Partner
-   Contact
-   Book a Site Visit

### Hero

Stack:

``` text
eyebrow
headline
description
CTA
secondary CTA
image/family composition
stats
```

The headline must remain readable without covering faces.

### Project cards

One card per row.

Use horizontal swipe only if it materially improves browsing; otherwise
vertical cards are simpler and more accessible.

### Location section

Map should simplify.

Avoid trying to preserve every desktop detail.

### Sticky mobile CTA

Consider a bottom mobile action bar:

``` text
Book a Site Visit
```

This should appear after the user scrolls past the hero.

Do not show a permanent four-button action bar.

------------------------------------------------------------------------

# 21. Animation System

The experience should feel alive, not animated for the sake of
animation.

## Use Motion for

-   navbar transitions
-   mobile menu
-   card hover
-   reveal transitions
-   buttons
-   image clipping
-   small decorative movement

## Use GSAP only for

The existing home hero cinematic sequence.

Suggested sequence:

``` text
0ms       page begins
0–700ms   mountain/logo preloader
700–1200  logo settles
1200–1700 hero image reveal
1500–2100 eyebrow reveal
1650–2300 headline reveal
1900–2450 description reveal
2050–2550 CTA reveal
2300–2800 stats reveal
```

Do not block the visitor with a long animation.

The preloader should be skippable or automatically resolve quickly.

## Scroll reveals

Default:

``` text
opacity: 0 → 1
translateY: 24px → 0
duration: 0.6–0.8s
ease: easeOut
```

Stagger:

``` text
0.06–0.12s
```

Avoid:

-   every element flying from different directions
-   excessive parallax
-   spinning icons
-   text scrambling
-   scroll hijacking

------------------------------------------------------------------------

# 22. Image Direction

Photography is a major part of the design.

## Hero

Family + aspirational home + landscape.

## Brand story

Child / family / open space.

## Projects

Actual project images whenever possible.

If project images are not available:

-   use clearly labeled temporary imagery during development
-   do not misrepresent generic imagery as actual project photography

## Bihar section

Use aerial / landscape / infrastructure imagery.

## Lifestyle

Use family-oriented imagery.

### Image treatment

Avoid:

-   heavy filters
-   fake HDR
-   excessive saturation
-   generic stock-photo poses

Prefer:

-   warm natural light
-   realistic Indian families
-   Bihar-relevant environments where possible
-   cinematic depth
-   authentic emotion

------------------------------------------------------------------------

# 23. Organic Shape System

To make the page modern without becoming trendy for the sake of
trendiness:

Use a restrained set of organic shapes:

-   large soft image crops
-   subtle curved section separators
-   occasional botanical line-art
-   thin contour lines
-   asymmetric image frames

Do not make every section wave-shaped.

A maximum of 2--3 major organic transitions across the entire page is
enough.

------------------------------------------------------------------------

# 24. Icons

Use Lucide React.

Preferred:

-   MapPin
-   FileCheck
-   Users
-   TrendingUp
-   Leaf
-   ArrowUpRight
-   ArrowRight
-   Play
-   Menu
-   X
-   Phone
-   Mail
-   MapPinned

Icon style:

``` text
stroke-width: 1.5–1.75
```

Avoid mixed icon libraries.

------------------------------------------------------------------------

# 25. Component Architecture

Recommended structure:

``` text
app/
├── page.tsx
├── about/
├── projects/
├── locations/
├── site-visit/
├── contact/
├── become-a-partner/
├── plots/
└── api/
    └── leads/
        ├── site-visit/
        ├── enquiry/
        └── partner/

components/
├── home/
│   ├── HomeHero.tsx
│   ├── TrustRail.tsx
│   ├── BrandStory.tsx
│   ├── FeaturedProjects.tsx
│   ├── BiharOpportunity.tsx
│   ├── LifestyleStory.tsx
│   ├── Testimonials.tsx
│   ├── FinalCTA.tsx
│   └── HomeFooter.tsx
│
├── navigation/
│   ├── Navbar.tsx
│   ├── MobileMenu.tsx
│   └── MobileCTA.tsx
│
├── projects/
│   ├── ProjectCard.tsx
│   ├── ProjectGrid.tsx
│   └── ProjectModal.tsx
│
├── ui/
│   ├── Button.tsx
│   ├── SectionEyebrow.tsx
│   ├── SectionHeading.tsx
│   ├── Reveal.tsx
│   └── ImageFrame.tsx
│
└── forms/
    ├── SiteVisitForm.tsx
    ├── EnquiryForm.tsx
    └── PartnerForm.tsx
```

------------------------------------------------------------------------

# 26. Data Architecture

Keep project content data-driven.

Existing:

``` text
lib/projects.ts
```

Suggested project type:

``` ts
export interface Project {
  slug: string;
  name: string;
  location: string;
  shortDescription: string;
  image: string;
  featured?: boolean;
  highlights: string[];
  status?: string;
}
```

Do not hardcode the same project information in five components.

------------------------------------------------------------------------

# 27. Reusable Components

## Button

Variants:

``` text
primary
secondary
ghost
dark
```

Primary:

-   forest or gold depending on background
-   compact
-   rounded-md / subtle pill, not extreme pill

### Button behavior

Hover:

``` text
background transition
arrow translateX(3px)
```

No bounce animation.

------------------------------------------------------------------------

# 28. Accessibility

Required:

-   semantic headings
-   proper heading hierarchy
-   keyboard navigation
-   visible focus states
-   alt text
-   sufficient color contrast
-   buttons must be actual buttons
-   links must be actual links
-   form labels must be accessible
-   reduced-motion support

Respect:

``` css
@media (prefers-reduced-motion: reduce)
```

Disable non-essential animation for reduced-motion users.

------------------------------------------------------------------------

# 29. Performance

This is an image-heavy website, so performance is critical.

Use:

-   `next/image`
-   responsive image sizes
-   modern image formats
-   lazy loading below the fold
-   priority loading for hero
-   compressed images
-   no unnecessarily huge source files

### Hero

Only the hero image should receive priority loading.

Do not preload every image.

### Animation

Avoid expensive continuous JS animation.

Prefer:

-   transform
-   opacity
-   CSS transitions
-   GPU-friendly properties

------------------------------------------------------------------------

# 30. SEO

Homepage metadata:

### Title

> Vistar City \| Dream Home Maker --- Premium Residential Plots in Bihar

### Description

> Discover thoughtfully planned residential plots in Bihar's growing
> corridors. Explore Vistar City projects in Patna, Muzaffarpur and
> Raxaul, and book a site visit.

Do not use unsupported claims such as:

> "No. 1 plot developer in Bihar"

unless verified.

### Structured data

Consider:

-   Organization
-   WebSite
-   LocalBusiness only when genuine business/address information is
    verified

Do not fabricate address information for schema.

------------------------------------------------------------------------

# 31. Forms / Conversion

## Site Visit Form

Fields should be minimal:

``` text
Name *
Phone *
Email (optional)
Preferred Project
Preferred Visit Date
Message (optional)
```

CTA:

> Request a Site Visit →

Do not ask unnecessary questions.

### Success state

If API validation succeeds:

> Thank you. Your site visit request has been received. Our team will
> contact you shortly.

Do not say:

> Your booking is confirmed.

unless a real booking system exists.

------------------------------------------------------------------------

# 32. Conversion Tracking

Prepare event names:

``` text
hero_site_visit_click
hero_explore_projects_click
project_view
project_cta_click
location_explore_click
lifestyle_site_visit_click
final_site_visit_click
contact_click
phone_click
form_start
form_submit
```

Use a central analytics helper rather than scattering raw analytics
calls throughout components.

------------------------------------------------------------------------

# 33. Trust Rules

The following are forbidden unless supported by real data:

-   fake customer testimonials
-   fake customer photos
-   fake project statistics
-   fake approvals
-   fake legal claims
-   fake price reductions
-   fake scarcity
-   fake plot availability
-   countdown timers
-   guaranteed returns
-   guaranteed appreciation
-   "last few plots"
-   fabricated addresses

The brand promise is trust.

A visually premium website with invented facts destroys the exact trust
it is trying to create.

------------------------------------------------------------------------

# 34. Content Tone

Use:

-   calm
-   confident
-   human
-   aspirational
-   clear
-   understated

Avoid:

-   hype
-   aggressive sales copy
-   financial promises
-   excessive adjectives
-   corporate jargon

### Good

> A place for your next chapter.

### Bad

> Grab the hottest investment opportunity before it's gone!

### Good

> Thoughtfully planned residential plots in Bihar's growth corridors.

### Bad

> Bihar's #1 guaranteed high-return investment destination.

------------------------------------------------------------------------

# 35. Responsive Breakpoints

Use Tailwind defaults where possible.

``` text
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

Design primarily around:

``` text
390px
768px
1280px
1440px
```

Do not optimize only for 1920px desktop.

------------------------------------------------------------------------

# 36. Spacing Rhythm

Preferred vertical spacing:

Desktop:

``` text
Hero: 760–900px
Standard section: 120–160px
Large section: 160–200px
CTA: 120–160px
```

Mobile:

``` text
Standard section: 72–96px
Large section: 96–120px
CTA: 80–100px
```

Do not make every section exactly the same height.

The page should have visual rhythm.

------------------------------------------------------------------------

# 37. Section Transition Logic

Transitions should tell a story.

Recommended:

``` text
Hero
  ↓
Ivory trust rail
  ↓
Ivory brand story
  ↓
Ivory projects
  ↓
Forest location section
  ↓
Ivory lifestyle section
  ↓
Ivory testimonial
  ↓
Forest CTA
  ↓
Dark forest footer
```

The color changes create chapters.

Avoid arbitrary section background changes.

------------------------------------------------------------------------

# 38. Final Visual Composition

The finished desktop page should roughly feel like:

``` text
┌───────────────────────────────────────┐
│           CINEMATIC HERO              │
│                                       │
│       DREAM HOME MAKER                │
│       A BRIGHTER TOMORROW             │
│                                       │
│     [SITE VISIT] [PROJECTS]           │
│                                       │
│ family + home + Bihar landscape       │
├───────────────────────────────────────┤
│ STRATEGIC | DOCUMENTATION | COMMUNITY │
│ VALUE                                    │
├───────────────────────────────────────┤
│                                       │
│ MORE THAN LAND                        │
│ A PLACE FOR YOUR NEXT CHAPTER   IMG   │
│                                       │
├───────────────────────────────────────┤
│ OUR PROJECTS                          │
│ Thoughtfully Planned. Beautifully...  │
│                                       │
│ [PROJECT] [PROJECT] [PROJECT]         │
├───────────────────────────────────────┤
│                                       │
│ A REGION ON THE RISE       BIHAR MAP  │
│                                       │
│           FOREST SECTION              │
├───────────────────────────────────────┤
│                                       │
│ FAMILY IMAGE     WHERE DREAMS GROW    │
│                 TOGETHER              │
│                       [SITE VISIT]    │
├───────────────────────────────────────┤
│ WHAT PEOPLE SAY                      │
│ Growing Trust, Together.              │
│        testimonial + image            │
├───────────────────────────────────────┤
│                                       │
│      LET'S TURN YOUR DREAM            │
│           INTO AN ADDRESS             │
│                                       │
│     [BOOK SITE VISIT] [CONTACT]      │
│                                       │
├───────────────────────────────────────┤
│                 FOOTER                │
└───────────────────────────────────────┘
```

------------------------------------------------------------------------

# 39. What Makes This "2026"

Modern does not mean adding random visual effects.

The contemporary quality should come from:

1.  **Immersive first-screen storytelling**
2.  **Editorial typography**
3.  **Asymmetric composition**
4.  **Large high-quality photography**
5.  **Intentional whitespace**
6.  **Clear conversion hierarchy**
7.  **Subtle motion**
8.  **Responsive-first composition**
9.  **Minimal UI chrome**
10. **Strong visual continuity**
11. **Real content over decorative filler**
12. **Performance-conscious implementation**

The page should feel expensive because it is controlled.

------------------------------------------------------------------------

# 40. Development Rules for Cursor

When implementing this specification:

### Rule 1

Do not blindly reproduce the design as a static screenshot.

Build reusable components.

### Rule 2

Do not introduce a UI library unless it solves a real problem.

Use:

-   Tailwind
-   Motion
-   GSAP
-   Lucide

as the primary visual system.

### Rule 3

Keep the homepage server-rendered wherever possible.

Use client components only for:

-   animation
-   navigation interaction
-   forms
-   project modal
-   interactive map
-   carousel where actually needed

### Rule 4

Do not make every component `"use client"`.

### Rule 5

Do not add fake data to make sections look fuller.

### Rule 6

Do not create a fake inventory system.

### Rule 7

Do not create payment functionality.

### Rule 8

Do not create CRM functionality.

### Rule 9

Do not create a chatbot merely because it looks modern.

### Rule 10

Every visual element should support one of:

``` text
Dream
Trust
Understanding
Decision
Action
```

If it supports none of these, remove it.

------------------------------------------------------------------------

# 41. Recommended Implementation Sequence

Build in this order:

``` text
1. Design tokens
2. Typography
3. Global layout
4. Navbar
5. Hero
6. Trust rail
7. Brand story
8. Project cards
9. Projects section
10. Bihar location section
11. Lifestyle section
12. Testimonial
13. Final CTA
14. Footer
15. Mobile navigation
16. Mobile sticky CTA
17. Motion system
18. Forms
19. Analytics events
20. SEO
21. Performance optimization
22. Accessibility audit
```

Do not start with animation.

Get the static hierarchy right first.

------------------------------------------------------------------------

# 42. Acceptance Criteria

The homepage is complete only when:

### Brand

-   [ ] Vistar City is consistently used
-   [ ] "Dream Home Maker" is integrated naturally
-   [ ] Forest / ivory / gold visual language is consistent
-   [ ] Typography feels editorial and premium

### UX

-   [ ] Visitor understands what Vistar City does within 5 seconds
-   [ ] Book a Site Visit is immediately visible
-   [ ] Projects are easy to discover
-   [ ] Locations have a clear purpose
-   [ ] Contact is always easy to reach
-   [ ] Mobile experience is first-class

### Content

-   [ ] No fake scarcity
-   [ ] No fake testimonials
-   [ ] No fabricated prices
-   [ ] No unsupported investment guarantees
-   [ ] No placeholder corporate address in production

### Technical

-   [ ] Responsive at 390 / 768 / 1280 / 1440 widths
-   [ ] Hero image optimized
-   [ ] Images use Next Image
-   [ ] Reduced motion supported
-   [ ] Keyboard navigation works
-   [ ] Lighthouse performance is reasonable
-   [ ] No unnecessary client components
-   [ ] No console errors
-   [ ] No hydration errors

### Conversion

-   [ ] Hero has Site Visit CTA
-   [ ] Project cards have clear next action
-   [ ] Location section has Explore Locations CTA
-   [ ] Lifestyle section has Site Visit CTA
-   [ ] Final CTA has Site Visit + Contact
-   [ ] Mobile user can reach Site Visit without returning to the top

------------------------------------------------------------------------

# 43. Final Creative Direction

The homepage should communicate one simple idea:

> **A dream home does not begin with a building. It begins with finding
> the right place to build that dream.**

Vistar City should position itself as the brand helping people take that
first step.

The visual narrative therefore moves from:

**a child's dream → a family's future → a place → a project → a growing
region → a real-world site visit.**

The website should never feel like it is forcing a sale.

It should make the next step feel natural:

> **"I want to see this place."**

That is the conversion.

------------------------------------------------------------------------

# 44. Cursor Prompt --- Initial Implementation

Paste the following into Cursor after adding this `design.md` to the
project:

``` text
Read design.md completely before making changes.

You are implementing the Vistar City homepage described in design.md.

Project context:
- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- motion
- GSAP only for the existing hero cinematic sequence
- lucide-react
- Existing project data is in lib/projects.ts
- Vistar City is a marketing/discovery website, NOT an inventory or booking engine.

First inspect the existing codebase and identify:
1. Current homepage architecture
2. Existing design tokens
3. Existing navigation
4. Existing preloader
5. Existing hero implementation
6. Existing project data
7. Existing image assets
8. Existing API/form implementation
9. Existing responsive behavior

Do NOT replace the entire application blindly.

Preserve working functionality.

Implement the homepage according to design.md using reusable components.

Priorities:
1. Consumer journey
2. Visual hierarchy
3. Mobile UX
4. Conversion clarity
5. Performance
6. Accessibility
7. Animation

Do not invent business facts, project statistics, addresses, approvals, testimonials, prices, inventory, or investment guarantees.

Use the provided hero inspiration image where appropriate:
`/mnt/data/vistaar-hero-image.png`

Build the page section-by-section and keep content data-driven.

Do not make every component a client component.

Use animation only where it improves storytelling.

After implementation:
- run lint
- run typecheck
- run build
- fix errors
- verify responsive layout
- verify all CTAs
- verify no fake data was introduced
- verify no console errors

Do not move on to additional features until the homepage itself is visually polished and conversion-ready.
```

------------------------------------------------------------------------

# 45. Definition of Success

The final Vistar City homepage should make three things immediately
clear:

### Within 5 seconds

**What is this?**

> Premium residential plots / planned communities in Bihar.

### Within 30 seconds

**Why should I trust it?**

> Strategic locations, clear documentation, thoughtful planning,
> credible projects.

### Before leaving

**What should I do next?**

> Book a Site Visit.

Everything else supports those three questions.
