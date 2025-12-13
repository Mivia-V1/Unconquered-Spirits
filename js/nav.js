// ===========================================
// Navigation Component
// Undaunted Spirits - Reusable Navigation
// ===========================================

(function() {
    'use strict';
    
    // Detect language based on URL path
    const isUkrainian = window.location.pathname.startsWith('/ua');
    
    // Get current page for active state
    const currentPath = window.location.pathname;
    
    // Navigation configuration
    const config = {
        en: {
            logo: {
                href: '/',
                imgSrc: '/images/logo.png',
                imgAlt: 'Undaunted Spirits Logo',
                title: 'Undaunted Spirits',
                subtitle: 'Est. 2018, Ternopil'
            },
            links: [
                { href: '/', text: 'Home', paths: ['/', '/index.html'] },
                { href: '/about.html', text: 'About', paths: ['/about.html'] },
                { href: '/#projects', text: 'Projects', paths: [] },
                { href: '/partners.html', text: 'Partners', paths: ['/partners.html'] },
                { href: '/#contact', text: 'Contact', paths: [] }
            ],
            langSwitch: {
                href: '/ua' + (currentPath === '/' ? '/' : currentPath.replace(/^\//, '/ua/')),
                title: 'Переключити на українську',
                text: 'EN | <span class="inactive-lang">UA</span>'
            },
            donate: {
                href: '/donate.html',
                text: 'Donate'
            }
        },
        ua: {
            logo: {
                href: '/ua/',
                imgSrc: '/images/logo.png',
                imgAlt: 'Логотип Нескорені духом',
                title: 'Нескорені духом',
                subtitle: 'З 2018 року, Тернопіль'
            },
            links: [
                { href: '/ua/', text: 'Головна', paths: ['/ua/', '/ua/index.html'] },
                { href: '/ua/about.html', text: 'Про нас', paths: ['/ua/about.html'] },
                { href: '/ua/#projects', text: 'Проєкти', paths: [] },
                { href: '/ua/partners.html', text: 'Партнери', paths: ['/ua/partners.html'] },
                { href: '/ua/#contact', text: 'Контакти', paths: [] }
            ],
            langSwitch: {
                href: currentPath.replace('/ua', '') || '/',
                title: 'Switch to English',
                text: '<span class="inactive-lang">EN</span> | UA'
            },
            donate: {
                href: '/ua/donate.html',
                text: 'Допомогти'
            }
        }
    };
    
    // Get the appropriate config
    const lang = isUkrainian ? 'ua' : 'en';
    const navConfig = config[lang];
    
    // Check if a link is active
    function isActive(paths) {
        return paths.some(path => currentPath === path || currentPath === path.replace('.html', ''));
    }
    
    // Build navigation HTML
    function buildNavHTML() {
        const linksHTML = navConfig.links.map(link => {
            const activeClass = isActive(link.paths) ? ' class="active"' : '';
            return `<li><a href="${link.href}"${activeClass}>${link.text}</a></li>`;
        }).join('\n                ');
        
        return `
    <nav>
        <div class="nav-container">
            <a href="${navConfig.logo.href}" class="logo">
                <img src="${navConfig.logo.imgSrc}" alt="${navConfig.logo.imgAlt}" class="logo-icon">
                <div>
                    <div class="logo-text">${navConfig.logo.title}</div>
                    <div class="logo-text-small">${navConfig.logo.subtitle}</div>
                </div>
            </a>
            <div class="hamburger" onclick="toggleMobileMenu()">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul class="nav-links">
                ${linksHTML}
            </ul>
            <div class="mobile-overlay" onclick="toggleMobileMenu()"></div>
            <div class="nav-actions">
                <a href="${navConfig.langSwitch.href}" class="lang-switch" title="${navConfig.langSwitch.title}">
                    ${navConfig.langSwitch.text}
                </a>
                <a href="${navConfig.donate.href}" class="donate-btn-nav">${navConfig.donate.text}</a>
            </div>
        </div>
    </nav>`;
    }
    
    // Initialize navigation
    function initNav() {
        const container = document.getElementById('nav-container');
        if (container) {
            container.innerHTML = buildNavHTML();
        } else {
            // If no container, insert at start of body
            document.body.insertAdjacentHTML('afterbegin', buildNavHTML());
        }
    }
    
    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNav);
    } else {
        initNav();
    }
})();

// ===========================================
// Mobile Menu Toggle (Global function)
// ===========================================
function toggleMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.querySelector('.mobile-overlay');
    
    if (hamburger) hamburger.classList.toggle('active');
    if (navLinks) navLinks.classList.toggle('active');
    if (overlay) overlay.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = navLinks && navLinks.classList.contains('active') ? 'hidden' : '';
}

// Close mobile menu when clicking a nav link
document.addEventListener('DOMContentLoaded', function() {
    // Use event delegation since nav is dynamically added
    document.addEventListener('click', function(e) {
        if (e.target.closest('.nav-links a')) {
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');
            const overlay = document.querySelector('.mobile-overlay');
            
            if (window.innerWidth <= 768) {
                if (hamburger) hamburger.classList.remove('active');
                if (navLinks) navLinks.classList.remove('active');
                if (overlay) overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
});

