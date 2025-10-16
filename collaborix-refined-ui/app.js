// Collaborix - Advanced SaaS Application JavaScript (Fixed Version)

// Global state management
const AppState = {
    currentPage: 'home',
    isMenuOpen: false,
    scrollY: 0,
    isScrolling: false,
    animations: {
        enabled: !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Initializing Collaborix...');
    
    try {
        // Initialize all modules
        initializeNavigation();
        initializeScrollEffects();
        initializeAnimations();
        initializeModals();
        initializeForms();
        initializeMobileMenu();
        initializeKeyboardNavigation();
        initializePerformanceOptimizations();
        
        // Show home page by default
        showPage('home');
        
        // Add loading complete class
        setTimeout(() => {
            document.body.classList.add('loaded');
        }, 100);
        
        console.log('✨ Collaborix initialized successfully!');
    } catch (error) {
        console.error('❌ Initialization error:', error);
    }
});

// Advanced Animation System
class AnimationManager {
    constructor() {
        this.observers = new Map();
        this.animations = new Map();
        this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    // Initialize AOS-like functionality
    init() {
        if (this.isReducedMotion) return;

        try {
            // Create intersection observer for scroll animations
            this.createScrollObserver();
            this.initializeTextAnimations();
            this.initializeHoverEffects();
            this.initializeParallaxEffects();
        } catch (error) {
            console.error('Animation init error:', error);
        }
    }

    createScrollObserver() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                }
            });
        }, options);

        // Observe all elements with animation attributes
        document.querySelectorAll('[data-aos]').forEach(el => {
            observer.observe(el);
        });

        this.observers.set('scroll', observer);
    }

    animateElement(element) {
        const animationType = element.getAttribute('data-aos');
        const delay = element.getAttribute('data-aos-delay') || 0;
        
        setTimeout(() => {
            element.classList.add('aos-animate');
            
            // Apply specific animation
            switch(animationType) {
                case 'fade-up':
                    this.fadeUp(element);
                    break;
                case 'fade-left':
                    this.fadeLeft(element);
                    break;
                case 'fade-right':
                    this.fadeRight(element);
                    break;
                default:
                    this.fadeIn(element);
            }
        }, parseInt(delay));
    }

    fadeUp(element) {
        element.style.transform = 'translateY(0)';
        element.style.opacity = '1';
        element.style.transition = 'all 0.8s cubic-bezier(0.25, 1, 0.5, 1)';
    }

    fadeLeft(element) {
        element.style.transform = 'translateX(0)';
        element.style.opacity = '1';
        element.style.transition = 'all 0.8s cubic-bezier(0.25, 1, 0.5, 1)';
    }

    fadeRight(element) {
        element.style.transform = 'translateX(0)';
        element.style.opacity = '1';
        element.style.transition = 'all 0.8s cubic-bezier(0.25, 1, 0.5, 1)';
    }

    fadeIn(element) {
        element.style.opacity = '1';
        element.style.transition = 'opacity 0.8s ease-out';
    }

    initializeTextAnimations() {
        // Typing animation for hero text
        const typingElements = document.querySelectorAll('.typing-text');
        typingElements.forEach(el => {
            this.typeWriter(el);
        });

        // Stagger text reveal animations
        const textRevealElements = document.querySelectorAll('.text-reveal');
        textRevealElements.forEach((el, index) => {
            el.style.animationDelay = `${index * 0.1}s`;
        });
    }

    typeWriter(element) {
        const text = element.textContent;
        element.textContent = '';
        element.style.width = '0';
        
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                element.style.width = ((i + 1) / text.length) * 100 + '%';
                i++;
            } else {
                clearInterval(timer);
                // Remove cursor after typing is complete
                setTimeout(() => {
                    element.style.borderRight = 'none';
                }, 1000);
            }
        }, 100);
    }

    initializeHoverEffects() {
        // Advanced button hover effects
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('mouseenter', (e) => {
                this.createRippleEffect(e);
            });
        });

        // Card tilt effects
        document.querySelectorAll('.feature-card, .testimonial-card, .pricing-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                this.cardTiltEffect(e, card);
            });
            
            card.addEventListener('mouseleave', () => {
                this.resetCardTilt(card);
            });
        });
    }

    createRippleEffect(e) {
        const button = e.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
            z-index: 1;
        `;
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    cardTiltEffect(e, card) {
        if (this.isReducedMotion) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `
            perspective(1000px) 
            rotateX(${rotateX}deg) 
            rotateY(${rotateY}deg) 
            translateZ(10px)
        `;
    }

    resetCardTilt(card) {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    }

    initializeParallaxEffects() {
        if (this.isReducedMotion) return;

        const parallaxElements = document.querySelectorAll('.orb, .shape');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach((el, index) => {
                const speed = 0.5 + (index * 0.1);
                el.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }
}

// Initialize animation manager
const animationManager = new AnimationManager();

// Navigation System (Fixed)
function initializeNavigation() {
    console.log('🧭 Initializing navigation...');
    
    // Add click handlers to all navigation links
    document.querySelectorAll('.nav__link[onclick]').forEach(link => {
        // Extract page name from onclick attribute
        const onclick = link.getAttribute('onclick');
        const match = onclick.match(/showPage\(['"]([^'"]+)['"]\)/);
        if (match) {
            const pageName = match[1];
            link.addEventListener('click', (e) => {
                e.preventDefault();
                showPage(pageName);
            });
        }
    });
    
    // Handle browser back/forward buttons
    window.addEventListener('popstate', (e) => {
        const page = e.state?.page || 'home';
        showPage(page, false);
    });
    
    console.log('✅ Navigation initialized');
}

function showPage(pageName, pushState = true) {
    console.log(`📄 Navigating to: ${pageName}`);
    
    try {
        // Validate page exists
        const targetPage = document.getElementById(`${pageName}-page`);
        if (!targetPage) {
            console.error(`❌ Page not found: ${pageName}`);
            showNotification(`Page "${pageName}" not found`, 'error');
            return;
        }
        
        // Hide all pages
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
            page.classList.remove('active');
            page.style.display = 'none';
        });
        
        // Show target page
        targetPage.classList.add('active');
        targetPage.style.display = 'block';
        targetPage.style.opacity = '1';
        targetPage.style.transform = 'translateY(0)';
        
        // Update app state
        AppState.currentPage = pageName;
        
        // Update browser history
        if (pushState) {
            history.pushState({ page: pageName }, '', `#${pageName}`);
        }
        
        // Update navigation highlighting
        updateNavigation();
        
        // Smooth scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Update page title
        updatePageTitle(pageName);
        
        // Close mobile menu
        closeMobileMenu();
        
        // Re-initialize animations for new page
        setTimeout(() => {
            if (animationManager && typeof animationManager.createScrollObserver === 'function') {
                animationManager.createScrollObserver();
            }
        }, 100);
        
        // Track page view
        trackPageView(pageName);
        
        console.log(`✅ Successfully navigated to ${pageName}`);
        
    } catch (error) {
        console.error('❌ Navigation error:', error);
        showNotification('Navigation failed. Please try again.', 'error');
    }
}

function updateNavigation() {
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        // Check if this link corresponds to current page
        const onclick = link.getAttribute('onclick');
        if (onclick && onclick.includes(`'${AppState.currentPage}'`)) {
            link.classList.add('active');
        }
    });
}

function updatePageTitle(pageName) {
    const titles = {
        home: 'Collaborix - Transform Your Team\'s Collaboration',
        features: 'Powerful Features - Collaborix',
        about: 'About Us - Collaborix',
        pricing: 'Pricing Plans - Collaborix',
        contact: 'Contact Us - Collaborix'
    };
    
    document.title = titles[pageName] || titles.home;
}

// Scroll Effects System
function initializeScrollEffects() {
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    function updateScrollEffects() {
        const currentScrollY = window.scrollY;
        const header = document.querySelector('.header');
        
        // Header scroll effects
        if (header) {
            if (currentScrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            // Hide/show header on scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 200) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
        }
        
        // Update app state
        AppState.scrollY = currentScrollY;
        lastScrollY = currentScrollY;
        ticking = false;
    }
    
    function requestScrollUpdate() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }
    
    // Throttled scroll listener
    window.addEventListener('scroll', requestScrollUpdate, { passive: true });
}

// Advanced Animations
function initializeAnimations() {
    try {
        // Initialize animation manager
        animationManager.init();
        
        // Add CSS for initial animation states
        const style = document.createElement('style');
        style.textContent = `
            [data-aos="fade-up"] {
                opacity: 0;
                transform: translateY(50px);
            }
            
            [data-aos="fade-left"] {
                opacity: 0;
                transform: translateX(50px);
            }
            
            [data-aos="fade-right"] {
                opacity: 0;
                transform: translateX(-50px);
            }
            
            [data-aos] {
                transition-property: opacity, transform;
            }
            
            .aos-animate {
                opacity: 1 !important;
                transform: translate(0) !important;
            }
            
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
            
            .loaded .hero__mockup {
                animation: mockupFloat 6s ease-in-out infinite;
            }
            
            @keyframes mockupFloat {
                0%, 100% { transform: perspective(1000px) rotateY(-10deg) rotateX(5deg) translateY(0px); }
                50% { transform: perspective(1000px) rotateY(-10deg) rotateX(5deg) translateY(-10px); }
            }
            
            .loaded .collaborator-cursor {
                animation: cursorMove 4s ease-in-out infinite;
            }
            
            @keyframes cursorMove {
                0%, 100% { transform: translate(0, 0); }
                25% { transform: translate(20px, -10px); }
                50% { transform: translate(-15px, 5px); }
                75% { transform: translate(10px, -5px); }
            }
        `;
        document.head.appendChild(style);
        
        console.log('✅ Animations initialized');
    } catch (error) {
        console.error('❌ Animation initialization error:', error);
    }
}

// Modal System (Fixed)
function initializeModals() {
    console.log('🪟 Initializing modals...');
    
    try {
        // Close modals with escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeAllModals();
            }
        });
        
        // Handle modal form submissions
        const loginForm = document.querySelector('#login-modal form');
        const signupForm = document.querySelector('#signup-modal form');
        
        if (loginForm) {
            loginForm.addEventListener('submit', handleLoginSubmit);
        }
        
        if (signupForm) {
            signupForm.addEventListener('submit', handleSignupSubmit);
        }
        
        console.log('✅ Modals initialized');
    } catch (error) {
        console.error('❌ Modal initialization error:', error);
    }
}

function openModal(modalId) {
    console.log(`🪟 Opening modal: ${modalId}`);
    
    try {
        const modal = document.getElementById(`${modalId}-modal`);
        if (!modal) {
            console.error(`❌ Modal not found: ${modalId}-modal`);
            showNotification(`Modal "${modalId}" not found`, 'error');
            return;
        }
        
        // Close any open modals first
        closeAllModals();
        
        // Show modal
        modal.classList.remove('hidden');
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Focus first input after a short delay
        setTimeout(() => {
            const firstInput = modal.querySelector('input');
            if (firstInput) {
                firstInput.focus();
            }
        }, 300);
        
        // Track modal open
        trackEvent('modal_open', { modal_id: modalId });
        
        console.log(`✅ Modal ${modalId} opened successfully`);
    } catch (error) {
        console.error('❌ Modal open error:', error);
        showNotification('Failed to open modal', 'error');
    }
}

function closeModal(modalId) {
    console.log(`🪟 Closing modal: ${modalId}`);
    
    try {
        const modal = document.getElementById(`${modalId}-modal`);
        if (modal) {
            modal.classList.add('hidden');
            modal.style.display = 'none';
            document.body.style.overflow = '';
            
            // Clear form if exists
            const form = modal.querySelector('form');
            if (form) {
                form.reset();
            }
        }
    } catch (error) {
        console.error('❌ Modal close error:', error);
    }
}

function closeAllModals() {
    try {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.add('hidden');
            modal.style.display = 'none';
        });
        document.body.style.overflow = '';
    } catch (error) {
        console.error('❌ Close all modals error:', error);
    }
}

// Form Handling (Fixed)
function initializeForms() {
    console.log('📝 Initializing forms...');
    
    try {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', handleContactSubmit);
        }
        
        // Add floating label effects
        document.querySelectorAll('.glass-input').forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', () => {
                if (!input.value) {
                    input.parentElement.classList.remove('focused');
                }
            });
            
            // Check if input has value on load
            if (input.value) {
                input.parentElement.classList.add('focused');
            }
        });
        
        console.log('✅ Forms initialized');
    } catch (error) {
        console.error('❌ Form initialization error:', error);
    }
}

function handleLoginSubmit(e) {
    e.preventDefault();
    
    try {
        const formData = new FormData(e.target);
        const email = formData.get('email') || document.getElementById('login-email')?.value;
        const password = formData.get('password') || document.getElementById('login-password')?.value;
        
        if (!email || !password) {
            showNotification('Please fill in all fields.', 'error');
            return;
        }
        
        // Simulate login process
        showNotification('Signing you in...', 'info');
        
        setTimeout(() => {
            showNotification('Welcome back! Login successful.', 'success');
            closeModal('login');
            trackEvent('login_success');
        }, 1500);
    } catch (error) {
        console.error('❌ Login error:', error);
        showNotification('Login failed. Please try again.', 'error');
    }
}

function handleSignupSubmit(e) {
    e.preventDefault();
    
    try {
        const formData = new FormData(e.target);
        const name = formData.get('name') || document.getElementById('signup-name')?.value;
        const email = formData.get('email') || document.getElementById('signup-email')?.value;
        const password = formData.get('password') || document.getElementById('signup-password')?.value;
        
        if (!name || !email || !password) {
            showNotification('Please fill in all fields.', 'error');
            return;
        }
        
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Password strength check
        if (password.length < 6) {
            showNotification('Password must be at least 6 characters long.', 'error');
            return;
        }
        
        // Simulate signup process
        showNotification('Creating your account...', 'info');
        
        setTimeout(() => {
            showNotification('🎉 Welcome to Collaborix! Your account has been created.', 'success');
            closeModal('signup');
            trackEvent('signup_success');
        }, 2000);
    } catch (error) {
        console.error('❌ Signup error:', error);
        showNotification('Signup failed. Please try again.', 'error');
    }
}

function handleContactSubmit(e) {
    e.preventDefault();
    
    try {
        const formData = new FormData(e.target);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };
        
        if (!data.name || !data.email || !data.message) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('Sending your message...', 'info');
        
        setTimeout(() => {
            showNotification('Thank you! Your message has been sent. We\'ll get back to you soon.', 'success');
            e.target.reset();
            trackEvent('contact_form_submit');
        }, 1500);
    } catch (error) {
        console.error('❌ Contact form error:', error);
        showNotification('Failed to send message. Please try again.', 'error');
    }
}

// Mobile Menu System (Fixed)
function initializeMobileMenu() {
    console.log('📱 Initializing mobile menu...');
    
    try {
        const toggle = document.getElementById('nav-toggle');
        const menu = document.getElementById('nav-menu');
        
        if (toggle && menu) {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleMobileMenu();
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (AppState.isMenuOpen && 
                    !menu.contains(e.target) && 
                    !toggle.contains(e.target)) {
                    closeMobileMenu();
                }
            });
            
            // Close menu on window resize
            window.addEventListener('resize', () => {
                if (window.innerWidth > 768 && AppState.isMenuOpen) {
                    closeMobileMenu();
                }
            });
            
            console.log('✅ Mobile menu initialized');
        } else {
            console.warn('⚠️ Mobile menu elements not found');
        }
    } catch (error) {
        console.error('❌ Mobile menu initialization error:', error);
    }
}

function toggleMobileMenu() {
    if (AppState.isMenuOpen) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

function openMobileMenu() {
    try {
        const toggle = document.getElementById('nav-toggle');
        const menu = document.getElementById('nav-menu');
        
        AppState.isMenuOpen = true;
        toggle?.classList.add('active');
        menu?.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        console.log('📱 Mobile menu opened');
    } catch (error) {
        console.error('❌ Open mobile menu error:', error);
    }
}

function closeMobileMenu() {
    try {
        const toggle = document.getElementById('nav-toggle');
        const menu = document.getElementById('nav-menu');
        
        AppState.isMenuOpen = false;
        toggle?.classList.remove('active');
        menu?.classList.remove('active');
        document.body.style.overflow = '';
        
        console.log('📱 Mobile menu closed');
    } catch (error) {
        console.error('❌ Close mobile menu error:', error);
    }
}

// Keyboard Navigation
function initializeKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Skip if user is typing in an input
        if (document.activeElement.matches('input, textarea, select')) {
            return;
        }
        
        const pages = ['home', 'features', 'about', 'pricing', 'contact'];
        const currentIndex = pages.indexOf(AppState.currentPage);
        
        switch(e.key) {
            case 'ArrowLeft':
                if (currentIndex > 0) {
                    showPage(pages[currentIndex - 1]);
                    e.preventDefault();
                }
                break;
            case 'ArrowRight':
                if (currentIndex < pages.length - 1) {
                    showPage(pages[currentIndex + 1]);
                    e.preventDefault();
                }
                break;
            case 'Home':
                showPage('home');
                e.preventDefault();
                break;
        }
    });
}

// Notification System (Enhanced)
function showNotification(message, type = 'info', duration = 5000) {
    try {
        // Remove existing notifications
        document.querySelectorAll('.notification').forEach(n => n.remove());
        
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        
        const icons = {
            success: 'check-circle',
            error: 'exclamation-circle',
            warning: 'exclamation-triangle',
            info: 'info-circle'
        };
        
        notification.innerHTML = `
            <div class="notification__content">
                <i class="fas fa-${icons[type] || 'info-circle'}"></i>
                <span>${message}</span>
            </div>
            <button class="notification__close" onclick="this.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        // Styling
        Object.assign(notification.style, {
            position: 'fixed',
            top: '100px',
            right: '20px',
            zIndex: '1001',
            maxWidth: '400px',
            padding: '1rem',
            background: 'var(--glass-bg)',
            backdropFilter: 'var(--glass-blur)',
            border: `1px solid var(--color-${type === 'error' ? 'error' : type === 'success' ? 'success' : type === 'warning' ? 'warning' : 'info'})`,
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-lg)',
            color: 'var(--color-text)',
            animation: 'slideInRight 0.3s ease-out',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
        });
        
        document.body.appendChild(notification);
        
        // Auto remove
        if (duration > 0) {
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.style.animation = 'slideOutRight 0.3s ease-out forwards';
                    setTimeout(() => notification.remove(), 300);
                }
            }, duration);
        }
        
        return notification;
    } catch (error) {
        console.error('❌ Notification error:', error);
    }
}

// Performance Optimizations
function initializePerformanceOptimizations() {
    try {
        // Lazy load images when they come into view
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.classList.remove('lazy');
                            imageObserver.unobserve(img);
                        }
                    }
                });
            });
            
            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
        
        // Preload critical resources
        preloadCriticalResources();
        
        // Add performance monitoring
        monitorPerformance();
        
        console.log('✅ Performance optimizations initialized');
    } catch (error) {
        console.error('❌ Performance optimization error:', error);
    }
}

function preloadCriticalResources() {
    // Preload important fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap';
    fontLink.as = 'style';
    document.head.appendChild(fontLink);
}

function monitorPerformance() {
    // Monitor page load performance
    window.addEventListener('load', () => {
        if ('performance' in window) {
            try {
                const perfData = performance.getEntriesByType('navigation')[0];
                if (perfData) {
                    const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
                    console.log(`📊 Page load time: ${loadTime}ms`);
                    
                    if (loadTime > 3000) {
                        console.warn('⚠️ Slow page load detected');
                    }
                }
            } catch (error) {
                console.error('Performance monitoring error:', error);
            }
        }
    });
}

// Analytics and Tracking
function trackPageView(pageName) {
    console.log(`📈 Page view: ${pageName}`);
    // In a real app, send to analytics service
}

function trackEvent(eventName, data = {}) {
    console.log(`📈 Event: ${eventName}`, data);
    // In a real app, send to analytics service
}

// Global Event Handlers (Enhanced)
document.addEventListener('click', (e) => {
    try {
        // Handle CTA button clicks
        const button = e.target.closest('.btn');
        if (!button) return;
        
        // Skip if button has onclick handler
        if (button.hasAttribute('onclick')) return;
        
        const text = button.textContent.trim().toLowerCase();
        
        e.preventDefault();
        
        if (text.includes('start free') || 
            text.includes('get started') || 
            text.includes('free trial')) {
            openModal('signup');
        } else if (text.includes('sign in') || text.includes('login')) {
            openModal('login');
        } else if (text.includes('contact') || text.includes('sales')) {
            showPage('contact');
        } else if (text.includes('explore') || text.includes('features')) {
            showPage('features');
        } else if (text.includes('watch demo')) {
            showNotification('Demo video coming soon!', 'info');
        }
    } catch (error) {
        console.error('❌ Button click error:', error);
    }
});

// Error Handling
window.addEventListener('error', (e) => {
    console.error('❌ Application error:', e.error);
    showNotification('Something went wrong. Please refresh the page.', 'error');
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('❌ Unhandled promise rejection:', e.reason);
    e.preventDefault();
    showNotification('An unexpected error occurred.', 'error');
});

// Add notification styles
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    .notification {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-family: var(--font-primary);
        font-weight: 500;
    }
    
    .notification__content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex: 1;
    }
    
    .notification__close {
        background: none;
        border: none;
        color: var(--color-text-secondary);
        cursor: pointer;
        padding: 0.25rem;
        border-radius: 4px;
        transition: all 0.2s ease;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .notification__close:hover {
        background: rgba(255, 255, 255, 0.1);
        color: var(--color-text);
    }
    
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100%);
        }
    }
`;
document.head.appendChild(notificationStyles);

// Make functions globally available
window.showPage = showPage;
window.openModal = openModal;
window.closeModal = closeModal;

// Debug helpers
window.CollaborixDebug = {
    getState: () => AppState,
    showNotification,
    animationManager,
    trackEvent,
    showPage,
    openModal,
    closeModal
};

console.log('🎉 Collaborix application ready!');