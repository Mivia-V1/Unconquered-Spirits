// ===========================================
// Undaunted Spirits - Main JavaScript
// Shared across all language versions
// ===========================================

// Initialize on Page Load
document.addEventListener('DOMContentLoaded', function() {
    initializeCarousel();
    initializeSmoothScroll();
});

// ============================================
// Carousel Functionality
// ============================================
let currentStoryIndex = 0;
let totalStories = 0;

function initializeCarousel() {
    const stories = document.querySelectorAll('.story-card');
    if (stories.length === 0) return;
    
    totalStories = stories.length;
    
    // Create indicators
    const indicatorsContainer = document.getElementById('carouselIndicators');
    if (indicatorsContainer) {
        indicatorsContainer.innerHTML = '';
        for (let i = 0; i < totalStories; i++) {
            const indicator = document.createElement('div');
            indicator.className = 'carousel-indicator' + (i === 0 ? ' active' : '');
            indicator.onclick = () => goToStory(i);
            indicatorsContainer.appendChild(indicator);
        }
    }
    
    updateCarousel();
}

function navigateStories(direction) {
    currentStoryIndex += direction;
    
    if (currentStoryIndex < 0) {
        currentStoryIndex = 0;
        return;
    }
    if (currentStoryIndex >= totalStories) {
        currentStoryIndex = totalStories - 1;
        return;
    }
    
    updateCarousel();
}

function goToStory(index) {
    currentStoryIndex = index;
    updateCarousel();
}

function updateCarousel() {
    const carousel = document.getElementById('storiesCarousel');
    const stories = document.querySelectorAll('.story-card');
    const indicators = document.querySelectorAll('.carousel-indicator');
    const prevBtn = document.querySelector('.carousel-nav-prev');
    const nextBtn = document.querySelector('.carousel-nav-next');
    
    if (!carousel || stories.length === 0) return;
    
    // Update active states
    stories.forEach((story, index) => {
        story.classList.remove('active', 'preview');
        
        if (index === currentStoryIndex) {
            story.classList.add('active');
        } else {
            story.classList.add('preview');
        }
    });
    
    // Update indicators
    indicators.forEach((indicator, index) => {
        if (index === currentStoryIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
    
    // Calculate offset
    const isMobile = window.innerWidth <= 768;
    let offset;
    
    if (isMobile) {
        const cardWidth = stories[0].offsetWidth + 32;
        offset = currentStoryIndex * cardWidth;
    } else {
        if (currentStoryIndex === 0) {
            offset = 0;
        } else if (currentStoryIndex === totalStories - 1) {
            const containerWidth = carousel.parentElement.offsetWidth;
            offset = carousel.scrollWidth - containerWidth;
        } else {
            const activeCard = stories[currentStoryIndex];
            const containerWidth = carousel.parentElement.offsetWidth;
            const cardLeft = activeCard.offsetLeft;
            const cardWidth = activeCard.offsetWidth;
            offset = cardLeft - (containerWidth / 2) + (cardWidth / 2);
        }
    }
    
    carousel.style.transform = `translateX(-${Math.max(0, offset)}px)`;
    
    // Update navigation buttons
    if (prevBtn) prevBtn.classList.toggle('disabled', currentStoryIndex === 0);
    if (nextBtn) nextBtn.classList.toggle('disabled', currentStoryIndex === totalStories - 1);
}

// Handle Window Resize
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(updateCarousel, 250);
});

// ============================================
// Smooth Scroll for Anchor Links
// ============================================
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
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

// ============================================
// Utility Functions
// ============================================

// Animate numbers on scroll (for stats)
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value.toLocaleString();
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Intersection Observer for animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.stat-item, .project-card, .help-card').forEach(el => {
    observer.observe(el);
});
