// KARV Group - Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
            const isOpen = mobileNav.classList.contains('active');

            // Update button icon
            const icon = mobileMenuBtn.querySelector('.icon');
            if (icon) {
                if (isOpen) {
                    icon.innerHTML = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />';
                } else {
                    icon.innerHTML = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
                }
            }
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mobileNav) {
                mobileNav.classList.remove('active');
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active navigation highlighting based on current page
    const currentPath = window.location.pathname;
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === '/' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Simple form validation (if forms exist)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#ef4444';

                    // Reset border color on input
                    field.addEventListener('input', function() {
                        field.style.borderColor = '';
                    });
                }
            });

            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields.');
            }
        });
    });

    // Lazy loading for images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Animation on scroll (simple version)
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        const windowHeight = window.innerHeight;

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('animated');
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});

// Simple router for single-page application (optional)
class SimpleRouter {
    constructor() {
        this.routes = {};
        this.currentRoute = '';

        // Handle back/forward browser buttons
        window.addEventListener('popstate', () => {
            this.handleRoute();
        });
    }

    // Register a route
    route(path, handler) {
        this.routes[path] = handler;
        return this;
    }

    // Navigate to a route
    navigate(path) {
        window.history.pushState({}, '', path);
        this.handleRoute();
    }

    // Handle the current route
    handleRoute() {
        const path = window.location.pathname;
        const handler = this.routes[path] || this.routes['*'];

        if (handler) {
            this.currentRoute = path;
            handler();
        }
    }

    // Start the router
    start() {
        this.handleRoute();
    }
}

// Initialize router (if needed for SPA functionality)
const router = new SimpleRouter();

// Contact form handler
function handleContactForm(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // Here you would typically send the data to a server
    console.log('Contact form data:', data);

    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    event.target.reset();
}

// Utility functions
const utils = {
    // Debounce function for performance
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Simple animation helper
    animate(element, property, from, to, duration = 300) {
        const start = performance.now();
        const change = to - from;

        function step(timestamp) {
            const progress = Math.min((timestamp - start) / duration, 1);
            const value = from + change * progress;

            element.style[property] = value + (property === 'opacity' ? '' : 'px');

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        }

        requestAnimationFrame(step);
    },

    // Simple fetch wrapper
    async request(url, options = {}) {
        try {
            const response = await fetch(url, {
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers
                },
                ...options
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Request failed:', error);
            throw error;
        }
    }
};

// Export for use in other scripts
window.KarvApp = {
    router,
    utils,
    handleContactForm
};