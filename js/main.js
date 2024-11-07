// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    setupMobileNav();
    setupScrollAnimation();
    setupEmailCopy();
    handleScrollAnimations();
});

// Mobile Navigation Setup
function setupMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.mobile-nav-overlay');
    const body = document.body;
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

    function toggleMobileNav() {
        const isOpening = !hamburger.classList.contains('active');
        
        // Toggle classes with animations
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('menu-open');

        // Accessibility
        hamburger.setAttribute('aria-expanded', isOpening);
        mobileNav.setAttribute('aria-hidden', !isOpening);
    }

    // Event Listeners
    hamburger.addEventListener('click', toggleMobileNav);
    overlay.addEventListener('click', toggleMobileNav);

    // Handle mobile nav links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggleMobileNav();
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
            toggleMobileNav();
        }
    });

    // Prevent body scroll when menu is open
    function preventScroll(e) {
        if (body.classList.contains('menu-open')) {
            e.preventDefault();
        }
    }

    document.addEventListener('touchmove', preventScroll, { passive: false });
}

// Scroll Animation Setup
function setupScrollAnimation() {
    const sections = document.querySelectorAll('.section-animate');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Handle Navigation Active States
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${section.id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Scroll Event Listener
window.addEventListener('scroll', function() {
    updateActiveNavLink();
});

// Optional: Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Optional: Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/Hide Scroll to Top button
window.addEventListener('scroll', function() {
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (scrollTopBtn) {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    }
});

// Optional: Add parallax effect
function setupParallax() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    window.addEventListener('scroll', () => {
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(window.scrollY * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Initialize parallax if elements exist
if (document.querySelector('.parallax')) {
    setupParallax();
}

// Optional: Add smooth loading for images
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if elements exist
if (document.querySelector('img[data-src]')) {
    setupLazyLoading();
} 

// Add this to your existing main.js
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.section-animate');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        observer.observe(element);
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    handleScrollAnimations();
});

function closeMenu() {
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.mobile-nav-overlay');
    
    mobileNav.classList.add('closing');
    overlay.classList.add('closing');
    
    setTimeout(() => {
        mobileNav.classList.remove('active', 'closing');
        overlay.classList.remove('active', 'closing');
    }, 300); // Match this with animation duration
}

document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo');
    const text = logo.textContent;
    logo.textContent = '';
    text.split('').forEach(char => {
        const span = document.createElement('span');
        span.textContent = char;
        logo.appendChild(span);
    });
});
