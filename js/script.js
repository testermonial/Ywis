/**
 * YWIS BEAUTY - JavaScript
 * Mobile Navigation, Smooth Scrolling, Gallery Filter
 * Modern & Responsive Interactions
 */

// ========================================
// 1. DOCUMENT READY / INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    initMobileNavigation();
    initGalleryFilter();
    initSmoothScroll();
    initAnimations();
});

// ========================================
// 2. MOBILE NAVIGATION
// ========================================

function initMobileNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (!navToggle || !navMenu) return;
    
    // Toggle menu on button click
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = navToggle.contains(event.target) || navMenu.contains(event.target);
        
        if (!isClickInside) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
}

// ========================================
// 3. GALLERY FILTER
// ========================================

function initGalleryFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterButtons.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter gallery items
            galleryItems.forEach(item => {
                if (filterValue === 'all') {
                    item.style.display = 'block';
                    item.style.animation = 'fadeInUp 0.5s ease';
                } else {
                    const itemCategory = item.getAttribute('data-category');
                    if (itemCategory === filterValue) {
                        item.style.display = 'block';
                        item.style.animation = 'fadeInUp 0.5s ease';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });
}

// ========================================
// 4. SMOOTH SCROLL
// ========================================

function initSmoothScroll() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if href is just '#'
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ========================================
// 5. INTERSECTION OBSERVER - LAZY ANIMATIONS
// ========================================

function initAnimations() {
    // Animate elements when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in-up').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ========================================
// 6. EXTERNAL LINK TRACKING (Optional Google Analytics)
// ========================================

function trackExternalLink(url, label) {
    // This function can be used to track external link clicks
    // Replace with your analytics implementation
    console.log('Link clicked:', label, url);
}

// Add tracking to external links (optional)
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const label = this.textContent || this.href;
        trackExternalLink(this.href, label);
    });
});

// ========================================
// 7. BUTTON RIPPLE EFFECT (Optional)
// ========================================

function initRippleEffect() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Prevent multiple ripples
            let ripple = this.querySelector('.ripple');
            if (ripple) {
                ripple.remove();
            }
            
            // Create ripple element
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
        });
    });
}

// Initialize ripple effect (commented out - enable if desired)
// initRippleEffect();

// ========================================
// 8. PERFORMANCE MONITORING (Optional)
// ========================================

function logPerformance() {
    if (window.performance && window.performance.timing) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        
        console.log('Page Load Time:', pageLoadTime, 'ms');
        console.log('DOM Interactive:', perfData.domInteractive - perfData.navigationStart, 'ms');
        console.log('DOM Complete:', perfData.domComplete - perfData.navigationStart, 'ms');
    }
}

// Log performance metrics
window.addEventListener('load', logPerformance);

// ========================================
// 9. UTILITY FUNCTIONS
// ========================================

/**
 * Debounce function for performance-critical operations
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ========================================
// 10. RESPONSIVE VIDEO EMBEDDING (if needed)
// ========================================

function makeVideosResponsive() {
    const videos = document.querySelectorAll('iframe[src*="youtube.com"], iframe[src*="vimeo.com"]');
    
    videos.forEach(video => {
        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        wrapper.style.paddingBottom = '56.25%';
        wrapper.style.height = '0';
        wrapper.style.overflow = 'hidden';
        
        video.style.position = 'absolute';
        video.style.top = '0';
        video.style.left = '0';
        video.style.width = '100%';
        video.style.height = '100%';
        
        video.parentNode.insertBefore(wrapper, video);
        wrapper.appendChild(video);
    });
}

// makeVideosResponsive();

// ========================================
// 11. LOADING STATE MANAGEMENT
// ========================================

// Show loading state on form submissions or navigation
window.addEventListener('beforeunload', function() {
    // Optional: Add loading indicator before page unload
    console.log('Page is loading...');
});

// ========================================
// 12. SERVICE WORKER REGISTRATION (Optional - for PWA)
// ========================================

if ('serviceWorker' in navigator) {
    // Uncomment to enable service worker
    // navigator.serviceWorker.register('/sw.js').then(registration => {
    //     console.log('Service Worker registered');
    // });
}

// ========================================
// 13. COOKIE CONSENT (if needed)
// ========================================

function initCookieConsent() {
    // Check if consent was already given
    const consentGiven = localStorage.getItem('cookieConsent');
    
    if (!consentGiven) {
        // Show consent banner
        const banner = document.createElement('div');
        banner.id = 'cookie-banner';
        banner.innerHTML = `
            <div style="background-color: #f5f2f0; padding: 20px; text-align: center; margin-top: 20px;">
                <p>Diese Website verwendet nur technisch notwendige Cookies. Weitere Informationen findest du in unserer <a href="/datenschutz.html">Datenschutzerklärung</a>.</p>
                <button id="accept-cookies" style="background-color: #c9a5a0; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">Verstanden</button>
            </div>
        `;
        document.body.appendChild(banner);
        
        document.getElementById('accept-cookies').addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'true');
            banner.remove();
        });
    }
}

// Uncomment to enable cookie consent
// initCookieConsent();

// ========================================
// 14. CUSTOM EVENTS
// ========================================

// Create custom events for page interactions
const pageLoadEvent = new CustomEvent('pageLoaded', {
    detail: { message: 'Page has finished loading' }
});

document.addEventListener('pageLoaded', function() {
    console.log('Custom page loaded event fired');
});

// Dispatch the custom event
window.addEventListener('load', function() {
    document.dispatchEvent(pageLoadEvent);
});

// ========================================
// 15. ACCESSIBILITY IMPROVEMENTS
// ========================================

// Add aria-labels to interactive elements
function improveAccessibility() {
    document.querySelectorAll('.btn').forEach(button => {
        if (!button.getAttribute('aria-label')) {
            button.setAttribute('aria-label', button.textContent);
        }
    });
    
    document.querySelectorAll('a').forEach(link => {
        if (!link.getAttribute('aria-label') && !link.textContent.trim()) {
            link.setAttribute('aria-label', link.href);
        }
    });
}

improveAccessibility();

console.log('Ywis Beauty - JavaScript initialized successfully');
