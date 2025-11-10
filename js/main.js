/*
╔═══════════════════════════════════════════════════════════╗
║  SHREYAS CINEMATIC PORTFOLIO - JAVASCRIPT                 ║
║  Interactive Features & Dynamic Content                   ║
║                                                           ║
║  CUSTOMIZATION:                                           ║
║  Edit PROJECT_DATA array below to add/modify projects    ║
║  Edit TERMINAL_COMMANDS to customize terminal output     ║
║  Edit THREAT_EVENTS for SOC timeline content             ║
╚═══════════════════════════════════════════════════════════╝
*/

// =============== PROJECT DATA ===============
// Edit this array to add or modify your projects
const PROJECT_DATA = {
    featured: [
        {
            id: 1,
            title: 'CyberShield Defense Platform',
            tagline: 'Real-time threat monitoring and response system',
            year: '2024',
            category: 'Security',
            badges: ['SOC', 'Dashboard', 'Automation'],
            image: 'assets/poster1.jpeg',
            description: 'Enterprise-grade security operations center dashboard with real-time threat intelligence and automated response capabilities.',
            role: 'Full Stack Developer & Security Engineer',
            tools: ['React', 'Node.js', 'MongoDB', 'Splunk', 'Python'],
            link: '#'
        },
        {
            id: 2,
            title: 'Neon Nights: Gaming Montage',
            tagline: 'Cinematic gaming content creation',
            year: '2024',
            category: 'Video',
            badges: ['Video', 'Editing', 'Gaming'],
            image: 'assets/poster2.jpeg',
            description: 'High-energy gaming montage featuring advanced editing techniques, color grading, and motion graphics.',
            role: 'Video Editor & Motion Designer',
            tools: ['Premiere Pro', 'After Effects', 'DaVinci Resolve'],
            link: '#'
        },
        {
            id: 3,
            title: 'Digital Fortress',
            tagline: 'Cybersecurity brand identity',
            year: '2024',
            category: 'Design',
            badges: ['Design', 'Branding', 'Web'],
            image: 'assets/poster3.jpeg',
            description: 'Complete brand identity and web presence for a cybersecurity startup, featuring modern design and secure architecture.',
            role: 'Brand Designer & Web Developer',
            tools: ['Figma', 'Illustrator', 'HTML/CSS', 'JavaScript'],
            link: '#'
        }
    ],
    
    video: [
        { id: 10, title: 'PS5 Gameplay Reel', thumbnail: 'assets/airobolt_teaser.jpg', tags: ['Gaming', 'Editing'], description: 'Best moments compilation' },
        { id: 11, title: 'Corporate Promo', thumbnail: 'assets/poster5.jpeg', tags: ['Commercial', 'Motion'], description: 'Brand storytelling' }
    ],
    
    design: [
        { id: 20, title: 'Cyberpunk UI Kit', thumbnail: 'assets/poster6.jpeg', tags: ['UI', 'Design System'], description: 'Futuristic interface components' },
        { id: 21, title: 'Tech Posters', thumbnail: 'assets/poster7.jpeg', tags: ['Print', 'Digital'], description: 'Modern poster series' }
    ],
    
    web: [
        { id: 30, title: 'SecureAuth Portal', thumbnail: 'assets/cyber1.jpeg', tags: ['React', 'Auth'], description: 'Enterprise authentication system' },
        { id: 31, title: 'Dashboard Analytics', thumbnail: 'assets/cyber2.jpeg', tags: ['Vue', 'Data Viz'], description: 'Real-time analytics platform' }
    ],
    
    security: [
        { id: 40, title: 'Threat Hunter Tool', thumbnail: 'assets/poster1.jpeg', tags: ['Python', 'Security'], description: 'Automated threat detection' },
        { id: 41, title: 'Vulnerability Scanner', thumbnail: 'assets/poster3.jpeg', tags: ['Nmap', 'Scanning'], description: 'Network security assessment' }
    ],
    
    gaming: [
        { id: 50, title: 'Game Mod: Cyber Enhancements', thumbnail: 'assets/airobot_reel_finial.jpg', tags: ['Modding', 'Gaming'], description: 'Custom gameplay modifications' },
        { id: 51, title: 'PlayStation Highlights', thumbnail: 'assets/airobot_f1_2.jpg', tags: ['PS5', 'Content'], description: 'Epic gaming moments' }
    ]
};

// =============== TERMINAL COMMANDS ===============
const TERMINAL_COMMANDS = [
    { type: 'command', text: 'sudo systemctl status soc-monitor', delay: 100 },
    { type: 'output', text: '● soc-monitor.service - Security Operations Center Monitor', delay: 50 },
    { type: 'output', text: '   Loaded: loaded (/etc/systemd/system/soc-monitor.service)', delay: 50 },
    { type: 'output', text: '   Active: active (running) since ' + new Date().toLocaleString(), delay: 50 },
    { type: 'output', text: '', delay: 20 },
    { type: 'command', text: 'python3 threat_scan.py --mode realtime --verbose', delay: 100 },
    { type: 'output', text: '[INFO] Initializing threat detection engine...', delay: 60 },
    { type: 'output', text: '[INFO] Loading ML models and threat signatures...', delay: 60 },
    { type: 'output', text: '[SUCCESS] Connected to threat intelligence feeds', delay: 60 },
    { type: 'output', text: '[INFO] Monitoring 1,247 active connections', delay: 60 },
    { type: 'output', text: '[WARN] Detected 3 suspicious IP addresses', delay: 60 },
    { type: 'output', text: '[INFO] Automated response protocols engaged', delay: 60 },
    { type: 'output', text: '', delay: 20 },
    { type: 'command', text: 'tail -f /var/log/security/alerts.log', delay: 100 },
    { type: 'output', text: '2024-11-09 22:47:12 - [HIGH] Multiple failed auth attempts from 192.168.1.100', delay: 70 },
    { type: 'output', text: '2024-11-09 22:47:45 - [MEDIUM] Unusual outbound traffic detected', delay: 70 },
    { type: 'output', text: '2024-11-09 22:48:03 - [LOW] SSL certificate expiring in 30 days', delay: 70 },
    { type: 'output', text: '2024-11-09 22:48:20 - [INFO] Firewall rules updated successfully', delay: 70 }
];

// =============== THREAT TIMELINE EVENTS ===============
const THREAT_EVENTS = [
    { time: '22:48:20', title: 'Firewall Update', description: 'New security rules deployed', severity: 'low' },
    { time: '22:47:45', title: 'Traffic Anomaly', description: 'Unusual outbound patterns detected', severity: 'medium' },
    { time: '22:47:12', title: 'Brute Force Attempt', description: 'Multiple failed login attempts blocked', severity: 'high' },
    { time: '22:45:33', title: 'Port Scan Detected', description: 'Automated scan from external IP', severity: 'medium' },
    { time: '22:43:10', title: 'Certificate Alert', description: 'SSL cert expires in 30 days', severity: 'low' }
];

// =============== APPLICATION STATE ===============
const App = {
    currentSlide: 0,
    terminalIndex: 0,
    terminalPlaying: true,
    terminalInterval: null,
    
    init() {
        this.initTheme();
        this.initNavigation();
        this.initScrollProgress();
        this.initHeroCarousel();
        this.initWorkCategories();
        this.initSOCDashboard();
        this.initTerminal();
        this.initGamingSection();
        this.initContact();
        this.initModals();
        this.initBackToTop();
        this.initAnimations();
    }
};

// =============== THEME TOGGLE ===============
App.initTheme = function() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
        body.classList.add('light-theme');
    }
    
    themeToggle?.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        const theme = body.classList.contains('light-theme') ? 'light' : 'dark';
        localStorage.setItem('theme', theme);
    });
};

// =============== NAVIGATION ===============
App.initNavigation = function() {
    const hamburger = document.getElementById('navHamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    hamburger?.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu?.classList.toggle('active');
        hamburger?.setAttribute('aria-expanded', hamburger.classList.contains('active'));
    });
    
    // Smooth scroll navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu
                hamburger?.classList.remove('active');
                navMenu?.classList.remove('active');
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu && hamburger && 
            !navMenu.contains(e.target) && 
            !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
};

// =============== SCROLL PROGRESS BAR ===============
App.initScrollProgress = function() {
    const progressBar = document.getElementById('scrollProgress');
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        if (progressBar) progressBar.style.width = scrolled + '%';
    });
};

// =============== HERO CAROUSEL ===============
App.initHeroCarousel = function() {
    const track = document.getElementById('heroTrack');
    const indicators = document.getElementById('heroIndicators');
    const prevBtn = document.getElementById('heroPrev');
    const nextBtn = document.getElementById('heroNext');
    
    if (!track || !PROJECT_DATA.featured) return;
    
    // Create slides
    PROJECT_DATA.featured.forEach((project, index) => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="slide-image" loading="${index === 0 ? 'eager' : 'lazy'}">
            <div class="slide-overlay"></div>
            <div class="slide-content">
                <h1 class="slide-title">${project.title}</h1>
                <p class="slide-tagline">${project.tagline}</p>
                <div class="slide-meta">
                    ${project.badges.map(badge => `<span class="meta-badge">${badge}</span>`).join('')}
                    <span class="meta-badge">${project.year}</span>
                </div>
                <a href="#" class="slide-cta" data-project="${project.id}">
                    <span>View Project</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </a>
            </div>
        `;
        track.appendChild(slide);
        
        // Create indicator
        const indicator = document.createElement('div');
        indicator.className = `carousel-indicator ${index === 0 ? 'active' : ''}`;
        indicator.addEventListener('click', () => this.goToSlide(index));
        indicators?.appendChild(indicator);
    });
    
    // Navigation buttons
    prevBtn?.addEventListener('click', () => this.changeSlide(-1));
    nextBtn?.addEventListener('click', () => this.changeSlide(1));
    
    // Auto-advance carousel
    setInterval(() => this.changeSlide(1), 6000);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') this.changeSlide(-1);
        if (e.key === 'ArrowRight') this.changeSlide(1);
    });
};

App.changeSlide = function(direction) {
    const total = PROJECT_DATA.featured.length;
    this.currentSlide = (this.currentSlide + direction + total) % total;
    this.goToSlide(this.currentSlide);
};

App.goToSlide = function(index) {
    const track = document.getElementById('heroTrack');
    const indicators = document.querySelectorAll('.carousel-indicator');
    
    this.currentSlide = index;
    if (track) track.style.transform = `translateX(-${index * 100}%)`;
    
    indicators.forEach((ind, i) => {
        ind.classList.toggle('active', i === index);
    });
};

// =============== WORK CATEGORIES ===============
App.initWorkCategories = function() {
    const container = document.getElementById('workCategories');
    if (!container) return;
    
    const categories = [
        { title: 'Video Editing', data: PROJECT_DATA.video },
        { title: 'Graphic Design', data: PROJECT_DATA.design },
        { title: 'Web Development', data: PROJECT_DATA.web },
        { title: 'Security Tools', data: PROJECT_DATA.security }
    ];
    
    categories.forEach((cat, catIndex) => {
        const section = document.createElement('div');
        section.className = 'work-category';
        section.innerHTML = `
            <div class="category-header">
                <h3 class="category-title">${cat.title}</h3>
                <div class="category-nav">
                    <button class="category-nav-btn" data-dir="prev" data-category="${catIndex}" aria-label="Previous">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>
                    <button class="category-nav-btn" data-dir="next" data-category="${catIndex}" aria-label="Next">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="category-carousel">
                <div class="category-track" id="track-${catIndex}">
                    ${cat.data.map(project => `
                        <div class="project-card" data-project="${project.id}">
                            <div class="project-thumbnail">
                                <img src="${project.thumbnail}" alt="${project.title}" loading="lazy">
                            </div>
                            <div class="project-info">
                                <h4 class="project-title">${project.title}</h4>
                                <p class="project-description">${project.description}</p>
                                <div class="project-tags">
                                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                                </div>
                                <a href="#" class="project-cta">
                                    View Details
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M5 12h14M12 5l7 7-7 7"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        container.appendChild(section);
    });
    
    // Category navigation
    document.querySelectorAll('.category-nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            const direction = btn.dataset.dir;
            const track = document.getElementById(`track-${category}`);
            if (track) {
                const scrollAmount = 320; // card width + gap
                track.scrollBy({
                    left: direction === 'next' ? scrollAmount : -scrollAmount,
                    behavior: 'smooth'
                });
            }
        });
    });
};

// =============== SOC DASHBOARD ===============
App.initSOCDashboard = function() {
    // Animate metric values
    this.animateMetrics();
    
    // Populate threat timeline
    const timeline = document.getElementById('threatTimeline');
    if (timeline) {
        THREAT_EVENTS.forEach(event => {
            const el = document.createElement('div');
            el.className = `timeline-event severity-${event.severity}`;
            el.innerHTML = `
                <div class="event-time">${event.time}</div>
                <div class="event-title">${event.title}</div>
                <div class="event-description">${event.description}</div>
            `;
            timeline.appendChild(el);
        });
    }
};

App.animateMetrics = function() {
    // Randomly update metrics to simulate live dashboard
    setInterval(() => {
        const cpuLoad = document.getElementById('cpuLoad');
        const connections = document.getElementById('connections');
        
        if (cpuLoad) {
            const newCPU = Math.floor(Math.random() * 30) + 40;
            cpuLoad.textContent = newCPU + '%';
        }
        
        if (connections) {
            const baseConn = 1247;
            const variance = Math.floor(Math.random() * 20) - 10;
            connections.textContent = (baseConn + variance).toLocaleString();
        }
    }, 3000);
};

// =============== TERMINAL SIMULATOR ===============
App.initTerminal = function() {
    const terminal = document.getElementById('terminalBody');
    const toggleBtn = document.getElementById('terminalToggle');
    const copyBtn = document.getElementById('terminalCopy');
    
    if (!terminal) return;
    
    this.playTerminal(terminal);
    
    // Toggle play/pause
    toggleBtn?.addEventListener('click', () => {
        this.terminalPlaying = !this.terminalPlaying;
        toggleBtn.classList.toggle('playing', this.terminalPlaying);
        
        if (this.terminalPlaying) {
            this.playTerminal(terminal);
        } else {
            clearInterval(this.terminalInterval);
        }
    });
    
    // Copy terminal content
    copyBtn?.addEventListener('click', () => {
        const text = terminal.textContent || '';
        navigator.clipboard.writeText(text).then(() => {
            copyBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>';
            setTimeout(() => {
                copyBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
            }, 2000);
        });
    });
};

App.playTerminal = function(terminal) {
    if (!this.terminalPlaying) return;
    
    const command = TERMINAL_COMMANDS[this.terminalIndex];
    if (!command) {
        // Loop back to start
        this.terminalIndex = 0;
        setTimeout(() => this.playTerminal(terminal), 2000);
        return;
    }
    
    const line = document.createElement('div');
    line.className = 'terminal-line';
    
    if (command.type === 'command') {
        line.innerHTML = `<span class="terminal-prompt">shreyas@soc:~$</span> <span class="terminal-command">${command.text}</span>`;
    } else if (command.type === 'error') {
        line.innerHTML = `<span class="terminal-error">${command.text}</span>`;
    } else {
        line.innerHTML = `<span class="terminal-output">${command.text}</span>`;
    }
    
    terminal.appendChild(line);
    terminal.scrollTop = terminal.scrollHeight;
    
    this.terminalIndex++;
    this.terminalInterval = setTimeout(() => this.playTerminal(terminal), command.delay);
};

// =============== GAMING SECTION ===============
App.initGamingSection = function() {
    const carousel = document.getElementById('gamingCarousel');
    if (!carousel || !PROJECT_DATA.gaming) return;
    
    const track = document.createElement('div');
    track.className = 'category-track';
    
    PROJECT_DATA.gaming.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.dataset.project = project.id;
        card.innerHTML = `
            <div class="project-thumbnail">
                <img src="${project.thumbnail}" alt="${project.title}" loading="lazy">
            </div>
            <div class="project-info">
                <h4 class="project-title">${project.title}</h4>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        track.appendChild(card);
    });
    
    carousel.appendChild(track);
};

// =============== CONTACT FORM ===============
App.initContact = function() {
    const form = document.getElementById('contactForm');
    
    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Create mailto link
        const subject = encodeURIComponent(`${data.subject} - ${data.name}`);
        const body = encodeURIComponent(`${data.message}\n\nFrom: ${data.name}\nEmail: ${data.email}`);
        window.location.href = `mailto:shreyas@example.com?subject=${subject}&body=${body}`;
        
        // Show success message (optional)
        alert('Opening your email client...');
        form.reset();
    });
};

// =============== MODAL SYSTEM ===============
App.initModals = function() {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');
    
    // Open modal on project click
    document.addEventListener('click', (e) => {
        const card = e.target.closest('[data-project]');
        const cta = e.target.closest('.slide-cta');
        
        if (card || cta) {
            e.preventDefault();
            const projectId = parseInt((card || cta).dataset.project);
            this.openProjectModal(projectId, modal, modalBody);
        }
    });
    
    // Close modal
    const closeModal = () => {
        modal?.classList.remove('active');
        document.body.style.overflow = 'auto';
    };
    
    modalClose?.addEventListener('click', closeModal);
    modalOverlay?.addEventListener('click', closeModal);
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal?.classList.contains('active')) {
            closeModal();
        }
    });
};

App.openProjectModal = function(projectId, modal, modalBody) {
    // Find project in all categories
    let project = PROJECT_DATA.featured.find(p => p.id === projectId);
    
    if (!project) {
        // Search in other categories
        const allProjects = [
            ...PROJECT_DATA.video,
            ...PROJECT_DATA.design,
            ...PROJECT_DATA.web,
            ...PROJECT_DATA.security,
            ...PROJECT_DATA.gaming
        ];
        project = allProjects.find(p => p.id === projectId);
    }
    
    if (!project) return;
    
    // Build modal content
    modalBody.innerHTML = `
        <img src="${project.thumbnail || project.image}" alt="${project.title}">
        <h2 class="modal-title">${project.title}</h2>
        <p class="modal-description">${project.description}</p>
        ${project.role ? `
            <div class="modal-meta">
                <div class="modal-meta-item">
                    <span class="modal-meta-label">Role:</span>
                    <span class="modal-meta-value">${project.role}</span>
                </div>
                ${project.year ? `
                    <div class="modal-meta-item">
                        <span class="modal-meta-label">Year:</span>
                        <span class="modal-meta-value">${project.year}</span>
                    </div>
                ` : ''}
                ${project.tools ? `
                    <div class="modal-meta-item">
                        <span class="modal-meta-label">Tools:</span>
                        <span class="modal-meta-value">${project.tools.join(', ')}</span>
                    </div>
                ` : ''}
                ${project.link && project.link !== '#' ? `
                    <div class="modal-meta-item">
                        <a href="${project.link}" target="_blank" class="download-btn">View Live Project</a>
                    </div>
                ` : ''}
            </div>
        ` : ''}
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
};

// =============== BACK TO TOP ===============
App.initBackToTop = function() {
    const btn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn?.classList.add('visible');
        } else {
            btn?.classList.remove('visible');
        }
    });
    
    btn?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
};

// =============== SCROLL ANIMATIONS ===============
App.initAnimations = function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Animate skill bars
                if (entry.target.classList.contains('skill-bar')) {
                    const fill = entry.target.querySelector('.skill-bar-fill');
                    if (fill) {
                        fill.style.width = fill.style.getPropertyValue('--skill-value');
                    }
                }
            }
        });
    }, observerOptions);
    
    // Observe sections and elements
    document.querySelectorAll('.section, .project-card, .stat-item, .metric-card, .skill-bar').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
};

// =============== INITIALIZE APP ===============
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = App;
}
