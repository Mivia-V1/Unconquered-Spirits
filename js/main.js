// Language Toggle Functionality
function toggleLanguage() {
    const html = document.documentElement;
    const currentLang = html.getAttribute('lang');
    
    if (currentLang === 'en') {
        html.setAttribute('lang', 'uk');
        localStorage.setItem('language', 'uk');
    } else {
        html.setAttribute('lang', 'en');
        localStorage.setItem('language', 'en');
    }
}

// Initialize on Page Load
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
        document.documentElement.setAttribute('lang', savedLang);
    }
    
    initializeCarousel();
});

// Carousel Functionality
let currentStoryIndex = 0;
let totalStories = 0;

function initializeCarousel() {
    const stories = document.querySelectorAll('.story-card');
    totalStories = stories.length;
    
    const indicatorsContainer = document.getElementById('carouselIndicators');
    indicatorsContainer.innerHTML = '';
    for (let i = 0; i < totalStories; i++) {
        const indicator = document.createElement('div');
        indicator.className = 'carousel-indicator' + (i === 0 ? ' active' : '');
        indicator.onclick = () => goToStory(i);
        indicatorsContainer.appendChild(indicator);
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
    
    stories.forEach((story, index) => {
        story.classList.remove('active', 'preview');
        
        if (index === currentStoryIndex) {
            story.classList.add('active');
        } else {
            story.classList.add('preview');
        }
    });
    
    indicators.forEach((indicator, index) => {
        if (index === currentStoryIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
    
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
    
    carousel.style.transform = `translateX(-${offset}px)`;
    
    prevBtn.classList.toggle('disabled', currentStoryIndex === 0);
    nextBtn.classList.toggle('disabled', currentStoryIndex === totalStories - 1);
}

// Handle Window Resize
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(updateCarousel, 250);
});

