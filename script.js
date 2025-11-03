// AESOP Website - JavaScript for Interactivity

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Don't prevent default for links that are just "#"
        if (href === '#') {
            return;
        }

        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = targetElement.offsetTop - navHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add active class to nav links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

// Add fade-in animation on scroll for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, observerOptions);

// Observe all cards for fade-in animation
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card, .story-card, .course-card');

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});

// Mobile menu functionality (if needed in future)
// This is a placeholder for if you want to add a hamburger menu for mobile
function createMobileMenu() {
    const nav = document.querySelector('nav');
    const navContainer = nav.querySelector('.container');
    const navUl = nav.querySelector('ul');

    // Only create mobile menu if screen is small
    if (window.innerWidth <= 768) {
        if (!document.querySelector('.mobile-menu-toggle')) {
            const menuToggle = document.createElement('button');
            menuToggle.className = 'mobile-menu-toggle';
            menuToggle.innerHTML = '☰';
            menuToggle.style.cssText = `
                background: none;
                border: none;
                color: white;
                font-size: 2rem;
                cursor: pointer;
                display: block;
                position: absolute;
                right: 1rem;
                top: 50%;
                transform: translateY(-50%);
            `;

            navContainer.style.position = 'relative';
            navContainer.appendChild(menuToggle);

            // Hide menu by default on mobile
            navUl.style.display = 'none';

            menuToggle.addEventListener('click', () => {
                if (navUl.style.display === 'none') {
                    navUl.style.display = 'flex';
                    menuToggle.innerHTML = '✕';
                } else {
                    navUl.style.display = 'none';
                    menuToggle.innerHTML = '☰';
                }
            });
        }
    } else {
        // Remove mobile menu elements on larger screens
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        if (menuToggle) {
            menuToggle.remove();
        }
        navUl.style.display = 'flex';
    }
}

// Initialize mobile menu on load and resize
window.addEventListener('load', createMobileMenu);
window.addEventListener('resize', createMobileMenu);

// Form validation helpers (for when actual forms are added)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Add loading animation for iframe forms
document.addEventListener('DOMContentLoaded', () => {
    const iframes = document.querySelectorAll('iframe');

    iframes.forEach(iframe => {
        // Add loading indicator
        const loadingDiv = document.createElement('div');
        loadingDiv.style.cssText = `
            text-align: center;
            padding: 2rem;
            color: var(--medium-gray);
        `;
        loadingDiv.innerHTML = '<p>Loading form...</p>';

        iframe.parentNode.insertBefore(loadingDiv, iframe);

        iframe.addEventListener('load', () => {
            loadingDiv.style.display = 'none';
            iframe.style.display = 'block';
        });

        // Hide iframe initially
        iframe.style.display = 'none';
    });
});

// Stats counter animation for numbers
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        element.textContent = current.toLocaleString();
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            element.textContent = end.toLocaleString();
        }
    };
    window.requestAnimationFrame(step);
}

// Animate stat numbers when they come into view
document.addEventListener('DOMContentLoaded', () => {
    const statNumbers = document.querySelectorAll('.stat-number');

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                const finalValue = parseInt(entry.target.textContent.replace(/[^0-9]/g, ''));
                if (!isNaN(finalValue)) {
                    entry.target.dataset.animated = 'true';
                    animateValue(entry.target, 0, finalValue, 2000);
                }
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
});

// Add copyright year update
document.addEventListener('DOMContentLoaded', () => {
    const footerYear = document.querySelector('.footer-bottom p');
    if (footerYear) {
        const currentYear = new Date().getFullYear();
        footerYear.innerHTML = footerYear.innerHTML.replace('2024', currentYear);
    }
});

// Console message for developers
console.log('%cAESOP Afghanistan', 'color: #2563eb; font-size: 24px; font-weight: bold;');
console.log('%cEmpowering Afghan girls through education', 'color: #0d9488; font-size: 14px;');
console.log('Interested in contributing to this project? Visit AESOPAfghanistan.org');
