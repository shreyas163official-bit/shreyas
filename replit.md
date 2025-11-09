# Overview

This is a single-page portfolio website for Shreyas, a creative technologist specializing in video editing, graphic design, and web development. The website is built with vanilla HTML, CSS, and JavaScript (no frameworks or build tools) and features a modern, minimalistic design with smooth animations, dark/light theme switching, and responsive layouts optimized for all devices.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Technology Stack**: Pure vanilla JavaScript, HTML5, and CSS3 with no external frameworks or libraries.

**Rationale**: The decision to avoid frameworks keeps the site lightweight, fast-loading, and simple to maintain. This approach is ideal for a portfolio website that prioritizes performance and doesn't require complex state management.

**Design Pattern**: Component-based vanilla JS with modular initialization functions. Each major feature (theme toggle, navigation, scroll animations, modals, etc.) is initialized independently in the DOMContentLoaded event, making the code maintainable and easy to extend.

**Pros**: 
- Zero dependencies and build steps
- Fast load times
- Easy to understand and modify
- Full control over all functionality

**Cons**:
- More verbose code compared to frameworks
- Manual implementation of common patterns

## Styling Architecture

**CSS Variables System**: All colors, spacing, typography, and timing values are stored as CSS custom properties in the `:root` selector.

**Rationale**: This provides a centralized theming system that makes it trivial to adjust the entire design by modifying a few variables. It also enables easy dark/light theme switching by overriding these variables.

**Dual Theme Support**: Dark theme (default) with deep navy backgrounds and teal accents, plus a light theme variant.

**Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop layouts. Desktop shows inline navigation; mobile uses a hamburger menu pattern.

## State Management

**LocalStorage Persistence**: Theme preference is saved to browser localStorage to persist across sessions.

**Rationale**: Since this is a static site with minimal state requirements, localStorage provides a simple solution for remembering user preferences without requiring a backend.

**Alternative Considered**: Cookies were considered but localStorage is simpler for client-side-only preferences and doesn't involve HTTP headers.

## Animation & Interactivity

**Intersection Observer API**: Used for scroll-triggered animations and lazy-loading effects.

**Rationale**: Native browser API that provides high performance for scroll-based animations without requiring external libraries. More efficient than traditional scroll event listeners.

**Features Implemented**:
- Smooth scroll navigation between sections
- Scroll progress bar indicator
- Parallax effects for visual depth
- Animated skill bars
- Modal system for viewing portfolio work items
- Back-to-top button
- Mobile hamburger menu with slide-in panel

**Pros**:
- Native browser support (no dependencies)
- Highly performant
- Works well with responsive design

**Cons**:
- Requires polyfills for older browsers (though not included in current implementation)

## File Structure

**Single-Page Application Pattern**: All content is contained in `index.html` with sections for Home, About, Work, and Contact.

**Asset Organization**: 
- `/assets` - Root folder for all media
  - `/assets/graphics` - Design work images
  - `/assets/videos` - Video portfolio pieces
  - `/assets/web` - Web project screenshots
  - `/assets/me.jpg` - Profile photo

**Separation of Concerns**: HTML structure, CSS styling, and JavaScript behavior are cleanly separated into three files (`index.html`, `style.css`, `script.js`).

# External Dependencies

## Fonts

**Google Fonts - Poppins**: Loaded via CDN for typography.

**Rationale**: Poppins provides a modern, clean aesthetic suitable for a creative professional portfolio. Using Google Fonts CDN ensures fast delivery and browser caching.

**Weights Used**: 300, 400, 500, 600, 700 for typographic hierarchy.

## Browser APIs

**Intersection Observer API**: For scroll animations and viewport detection.

**LocalStorage API**: For persisting theme preferences.

**No External Libraries**: The site deliberately avoids jQuery, animation libraries, or any third-party JavaScript dependencies to maintain simplicity and performance.

## Media Assets

All portfolio assets (images and videos) are stored locally in the `/assets` folder structure. Currently contains placeholder text files that should be replaced with actual media:

- Profile photo (`me.jpg`)
- Graphic design samples (`graphics/design1.jpg`, `graphics/design2.jpg`)
- Video portfolio pieces (`videos/video1.mp4`, `videos/video2.mp4`)
- Web project screenshots (`web/project1.jpg`, `web/project2.jpg`)