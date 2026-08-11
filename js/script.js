/* =============================================
   MAIN JAVASCRIPT
   File: js/script.js
   Description: All interactive functionality
   ============================================= */

// ==========================================
// 1. MOBILE MENU TOGGLE
// ==========================================
function toggleMenu() {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('active');
}

// Close menu when a link is clicked
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        const navMenu = document.getElementById('navMenu');
        if (navMenu) {
            navMenu.classList.remove('active');
        }
    });
});

// ==========================================
// 2. SMOOTH SCROLLING
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || targetId === '') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            const header = document.querySelector('header');
            const headerHeight = header ? header.offsetHeight : 0;
            const targetPosition = target.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// 3. BACK TO TOP BUTTON
// ==========================================
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (backToTopBtn) {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ==========================================
// 4. HEADER SCROLL EFFECT
// ==========================================
window.addEventListener('scroll', () => {
    const header = document.getElementById('mainHeader');
    if (header) {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

// ==========================================
// 5. ACTIVE NAVIGATION HIGHLIGHT
// ==========================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    const header = document.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 0;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 100;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ==========================================
// 6. SCROLL ANIMATIONS (Intersection Observer)
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Elements to animate on scroll
const animateElements = document.querySelectorAll(
    '.pooja-card, .festival-card, .contact-item, .donation-card, .highlight-item, .gallery-item'
);

animateElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `all 0.6s ease ${index * 0.05}s`; // Staggered delay
    animationObserver.observe(el);
});

// ==========================================
// 7. CONTACT FORM HANDLER
// ==========================================
function handleSubmit(e) {
    e.preventDefault();

    // Show success message
    alert(
        '🙏 உங்கள் செய்தி வெற்றிகரமாக அனுப்பப்பட்டது!\n\n' +
        'அன்னை தொட்டிச்சி அம்மன் உங்களை ஆசீர்வதிக்கட்டும்! 🙏'
    );

    // Reset form
    e.target.reset();
}

// ==========================================
// 8. PAGE LOAD ANIMATION
// ==========================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ==========================================
// 9. CONSOLE MESSAGE
// ==========================================
console.log(
    '%c🙏 ஸ்ரீ தொட்டிச்சி அம்மன் ஆலயம் - கீழப்பாவூர் 🙏',
    'color: #FFD700; font-size: 18px; font-weight: bold; background: #8B0000; padding: 10px 20px; border-radius: 5px;'
);
console.log(
    '%cஅன்னை தொட்டிச்சி அம்மன் அருள்புரிவாள்!',
    'color: #FF6347; font-size: 14px;'
);
