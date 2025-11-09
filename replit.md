# Overview

This is a cinematic single-page portfolio website for Shreyas, a cybersecurity-minded creative specializing in video editing, graphic design, web development, and security operations. The website features a Netflix-style design with dark cyberpunk aesthetics, interactive SOC dashboards, terminal simulators, and gaming elements. Built with vanilla HTML, CSS, and JavaScript (no frameworks or build tools).

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Design Philosophy

**Theme**: Cybersecurity + Gaming - Cinematic dark theme with neon accents (teal/cyan primary, magenta secondary)

**Visual Style**: 
- Film grain and vignette overlay for cinematic feel
- Glassy panels with subtle neon outlines
- Animated particle grid background
- Professional, elegant - not childish or over-the-top

**Key Features**:
- Netflix-style horizontal carousel for featured projects
- Interactive SOC dashboard with live metrics
- Terminal simulator with command playback
- Gaming/PlayStation section
- Multi-category work portfolios
- Comprehensive modal system

## Frontend Architecture

**Technology Stack**: Pure vanilla JavaScript, HTML5, and CSS3 with no external frameworks or libraries.

**Rationale**: Maintains maximum control, performance, and security. The cybersecurity theme demands clean, auditable code without external dependencies that could introduce vulnerabilities.

**Design Pattern**: Modular JavaScript using an App object with initialization methods for each major feature. All features are initialized on DOMContentLoaded and use event delegation where appropriate.

**Advanced Features**:
- Netflix-style carousel with keyboard navigation and auto-advance
- Intersection Observer for scroll-triggered animations
- Terminal command simulator with play/pause/copy
- Real-time SOC metrics with animated values
- Modal system with keyboard accessibility (Escape to close)
- Theme persistence with localStorage and prefers-color-scheme support

## File Structure

```
/
├── index.html           # Main HTML structure with semantic markup
├── css/
│   └── styles.css       # Complete styling with CSS variables
├── js/
│   └── main.js          # All interactive features and data
├── assets/
│   ├── me.jpg           # Profile portrait
│   ├── shreyas.vcf      # Contact vCard
│   ├── shreyas.pdf      # Resume/CV
│   ├── posters/         # Hero carousel images (poster1-3.jpg)
│   ├── projects/        # Project thumbnails (design, web)
│   ├── gaming/          # Gaming content images
│   └── icons/           # Icon assets
└── favicon.ico          # Site favicon
```

## Styling Architecture

**CSS Variables System**: Comprehensive theming system with all colors, spacing, typography, and effects defined in :root variables.

**Key Variables**:
- `--accent-primary`: Main neon accent color (teal #00f5d4) - change this to modify theme
- `--accent-secondary`: Secondary accent (magenta #ff006e)
- `--bg-primary`: Main background (near-black #0a0e17)
- `--font-primary`: Main font family (Inter)
- `--font-mono`: Monospace font for terminal (JetBrains Mono)

**Dual Theme Support**: 
- Dark theme (default): Cinematic dark with neon accents
- Light theme: Clean white with same accent colors
- Respects system preference (prefers-color-scheme)
- Persists user choice in localStorage

**Visual Effects**:
- Film grain overlay with CSS background
- Radial vignette gradient
- Animated particle grid background
- Scanline animation on portrait
- Neon glow shadows on interactive elements
- Smooth GPU-accelerated transitions (transform, opacity)

**Responsive Design**: 
- Mobile-first approach with breakpoints at 768px and 968px
- Desktop: Full navigation, grid layouts, horizontal carousels
- Tablet: Adjusted grids, simplified layouts
- Mobile: Hamburger menu, stacked layouts, vertical scrolling

## JavaScript Architecture

**Data Structure**: All project data stored in PROJECT_DATA object at top of main.js for easy editing:
- `featured`: Hero carousel projects (3 items)
- `video`: Video editing projects
- `design`: Graphic design work
- `web`: Web development projects
- `security`: Security tools and SOC demos
- `gaming`: Gaming mods and content

**Customization Points**:
- `PROJECT_DATA`: Add/edit all portfolio projects
- `TERMINAL_COMMANDS`: Customize terminal output and commands
- `THREAT_EVENTS`: Modify SOC timeline events

**Core Modules**:
1. **Theme System**: localStorage + prefers-color-scheme detection
2. **Navigation**: Smooth scroll, mobile hamburger, active states
3. **Hero Carousel**: Auto-advance, keyboard nav, indicators
4. **Work Categories**: Multiple horizontal-scrolling carousels
5. **SOC Dashboard**: Animated metrics, live value updates
6. **Terminal Simulator**: Command playback with typing effect
7. **Modal System**: Project details with keyboard accessibility
8. **Scroll Animations**: Intersection Observer for fade-in effects
9. **Contact Form**: mailto integration

## State Management

**LocalStorage Usage**:
- Theme preference (dark/light)
- Persists across browser sessions
- Falls back to system preference if no saved choice

**Dynamic State**:
- Current carousel slide index
- Terminal playback position
- Terminal playing/paused state
- Animated metric values

**No External State Management**: All state is managed with vanilla JavaScript object properties and DOM state.

## Animation & Interactivity

**Intersection Observer API**: 
- Scroll-triggered fade-in animations
- Skill bar animations on viewport entry
- Lazy loading coordination

**Carousel Systems**:
- Hero carousel: Netflix-style with full-screen slides
- Category carousels: Horizontal scrolling with nav buttons
- Smooth CSS transitions with cubic-bezier easing
- Keyboard navigation (arrow keys)
- Touch/swipe support via native scrolling

**Terminal Simulator**:
- Realistic command typing effect
- Configurable delay between lines
- Play/pause control
- Copy to clipboard functionality
- Auto-loop with 2s delay
- Realistic SOC commands and output

**SOC Dashboard**:
- Live metric value updates every 3 seconds
- Pulse animation on alert counts
- Threat timeline with severity indicators
- Mock data that can be replaced with real API calls

**Performance Optimization**:
- GPU-accelerated animations (transform, opacity only)
- Lazy loading of images with loading="lazy"
- Efficient event delegation
- Minimal DOM manipulation
- Throttled scroll handlers via Intersection Observer

# External Dependencies

## Fonts

**Google Fonts**:
- **Inter**: Clean geometric sans-serif for UI (300-800 weights)
- **JetBrains Mono**: Monospace font for terminal (400-600 weights)

**Rationale**: Inter provides modern, professional typography suitable for a tech portfolio. JetBrains Mono gives authentic terminal/code aesthetics.

## Browser APIs

**Native APIs Used**:
- **Intersection Observer**: Scroll animations and lazy loading
- **LocalStorage**: Theme persistence
- **Clipboard API**: Terminal copy functionality
- **matchMedia**: Detecting color scheme preferences

**No External Libraries**: Zero dependencies on jQuery, React, animation libraries, or third-party scripts. Pure vanilla JavaScript for security and performance.

## Media Assets

**Current Assets** (all in /assets/):
- `me.jpg`: Professional portrait (replace with your photo)
- `posters/poster1-3.jpg`: Hero carousel images (cybersecurity themed)
- `projects/design1-2.jpg`: Design work samples
- `projects/web1-2.jpg`: Web project screenshots
- `gaming/gaming1-2.jpg`: Gaming setup and content images
- `shreyas.vcf`: Contact vCard file
- `shreyas.pdf`: Resume/CV (placeholder)

**Asset Replacement Guide**:
1. Replace images in assets/ folders (maintain same filenames or update JS)
2. Edit PROJECT_DATA in js/main.js to update project information
3. Update contact info in HTML and vCard
4. Replace shreyas.pdf with actual CV

# Customization Guide

## Quick Theme Changes

1. **Change Accent Color**: Edit `--accent-primary` in css/styles.css :root
2. **Add Projects**: Edit PROJECT_DATA object in js/main.js
3. **Terminal Commands**: Modify TERMINAL_COMMANDS array in js/main.js
4. **SOC Events**: Edit THREAT_EVENTS array in js/main.js
5. **Contact Info**: Update email/links in index.html and assets/shreyas.vcf

## Adding New Projects

```javascript
// In js/main.js PROJECT_DATA object:
featured: [
    {
        id: 1,
        title: 'Your Project Name',
        tagline: 'Short description',
        year: '2024',
        category: 'Category',
        badges: ['Tag1', 'Tag2'],
        image: 'assets/path/to/image.jpg',
        description: 'Detailed description for modal',
        role: 'Your role in the project',
        tools: ['Tool1', 'Tool2', 'Tool3'],
        link: 'https://project-url.com' or '#'
    }
]
```

## Recent Changes (2024-11-09)

**Major Rebuild**: Transformed from simple portfolio to cinematic cybersecurity-themed showcase
- Implemented Netflix-style hero carousel
- Added interactive SOC dashboard with live metrics
- Created terminal simulator with command playback
- Integrated gaming/PlayStation section
- Built comprehensive modal system for project details
- Enhanced with cinematic visual effects (film grain, vignette, particles)
- Organized file structure into proper folders (css/, js/, assets/)
