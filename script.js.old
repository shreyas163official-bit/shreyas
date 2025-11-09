/*
===================================
SHREYAS PORTFOLIO WEBSITE - JAVASCRIPT
===================================

FEATURES IMPLEMENTED:
1. Smooth scroll navigation
2. Dark/Light theme toggle with localStorage persistence
3. Mobile hamburger menu
4. Scroll progress bar
5. Intersection Observer for scroll animations
6. Parallax effects
7. Modal for viewing work items
8. Skill bar animations
9. Back to top button
10. Contact form handling

CUSTOMIZATION:
- Edit animation thresholds in the Intersection Observer
- Modify scroll behavior settings
- Adjust modal content for different media types
*/

// =============== INITIALIZATION ===============
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavigation();
    initScrollProgress();
    initScrollAnimations();
    initSkillBars();
    initWorkModals();
    initBackToTop();
    initContactForm();
    initParallax();
});

// =============== THEME TOGGLE ===============
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
    }
    
    // Toggle theme on click
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        
        // Save preference
        const currentTheme = body.classList.contains('light-theme') ? 'light' : 'dark';
        localStorage.setItem('theme', currentTheme);
    });
}

// =============== NAVIGATION ===============
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Smooth scroll and close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// =============== SCROLL PROGRESS BAR ===============
function initScrollProgress() {
    const progressBar = document.getElementById('scrollProgress');
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// =============== SCROLL ANIMATIONS ===============
function initScrollAnimations() {
    const animateElements = document.querySelectorAll('.animate-element');
    
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                // Optional: unobserve after animation to improve performance
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// =============== SKILL BARS ANIMATION ===============
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    let animated = false;
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                skillBars.forEach(bar => {
                    const progress = bar.getAttribute('data-progress');
                    setTimeout(() => {
                        bar.style.width = progress + '%';
                    }, 200);
                });
                animated = true;
            }
        });
    }, observerOptions);
    
    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
        observer.observe(aboutSection);
    }
}

// =============== WORK MODALS ===============
function initWorkModals() {
    const workCards = document.querySelectorAll('.work-card');
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');
    
    // Open modal on work card click
    workCards.forEach(card => {
        card.addEventListener('click', () => {
            const videoId = card.getAttribute('data-video');
            const imageId = card.getAttribute('data-image');
            const webId = card.getAttribute('data-web');
            
            // Clear previous content
            modalBody.innerHTML = '';
            
            // Video modal - shows placeholder since actual videos need to be added
            if (videoId) {
                // Use graphic images as video placeholders with clear instructions
                const placeholderNum = videoId.replace('video', '');
                modalBody.innerHTML = `
                    <div style="text-align: center; padding: 40px; background-color: var(--color-bg-secondary); border-radius: 12px;">
                        <img src="assets/graphics/design${placeholderNum}.jpg" 
                             alt="Video placeholder" 
                             style="max-width: 100%; border-radius: 12px; margin-bottom: 20px;">
                        <div style="color: var(--color-text); padding: 20px;">
                            <h3 style="color: var(--color-accent); margin-bottom: 10px;">📹 Video Placeholder</h3>
                            <p style="margin-bottom: 10px;">Replace this with your actual video file:</p>
                            <code style="background-color: var(--color-bg); padding: 5px 10px; border-radius: 5px; display: inline-block;">
                                assets/videos/${videoId}.mp4
                            </code>
                            <p style="margin-top: 15px; font-size: 0.9em; color: var(--color-text-secondary);">
                                To add your video: Upload your MP4 file to the assets/videos/ folder
                            </p>
                        </div>
                    </div>
                `;
            }
            
            // Image modal
            else if (imageId) {
                const imgSrc = `assets/graphics/${imageId}.jpg`;
                modalBody.innerHTML = `
                    <img src="${imgSrc}" alt="Design work" style="max-width: 100%; border-radius: 12px;">
                `;
            }
            
            // Web project modal
            else if (webId) {
                const imgSrc = `assets/web/${webId}.jpg`;
                modalBody.innerHTML = `
                    <img src="${imgSrc}" alt="Web project" style="max-width: 100%; border-radius: 12px;">
                `;
            }
            
            // Show modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal functions
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        // Stop any playing videos
        const videos = modalBody.querySelectorAll('video');
        videos.forEach(video => {
            video.pause();
            video.currentTime = 0;
        });
    };
    
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// =============== BACK TO TOP BUTTON ===============
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    // Scroll to top on click
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// =============== CONTACT FORM ===============
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Create mailto link (since no backend is required)
        const mailtoLink = `mailto:shreyas@example.com?subject=${encodeURIComponent(subject + ' - ' + name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + '\nEmail: ' + email)}`;
        
        // Open mailto link
        window.location.href = mailtoLink;
        
        // Optional: Show success message
        alert('Opening your email client...');
        
        // Reset form
        contactForm.reset();
    });
}

// =============== PARALLAX EFFECT ===============
function initParallax() {
    const parallaxElement = document.querySelector('.hero-parallax');
    
    if (parallaxElement) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const rate = scrolled * 0.3;
            parallaxElement.style.transform = `translate3d(0, ${rate}px, 0)`;
        });
    }
}

// =============== LAZY LOADING IMAGES ===============
// Modern browsers support native lazy loading, but this is a fallback
if ('loading' in HTMLImageElement.prototype) {
    // Native lazy loading supported
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.src;
    });
} else {
    // Fallback for older browsers
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// =============== SMOOTH SCROLL POLYFILL ===============
// For browsers that don't support smooth scrolling natively
if (!('scrollBehavior' in document.documentElement.style)) {
    console.log('Smooth scroll not supported, consider adding a polyfill');
}
