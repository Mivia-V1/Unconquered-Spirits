/* ===========================================
   About Page JavaScript
   Undaunted Spirits - About Us Page
   =========================================== */

/**
 * Copy to Clipboard Function
 * Used for copying EDRPOU and other legal information
 */
function copyToClipboard(text, button) {
    navigator.clipboard.writeText(text).then(function() {
        // Store original text
        var originalText = button.textContent;
        
        // Show success feedback
        button.textContent = '✓ Copied!';
        button.style.background = '#28a745';
        
        // Reset after 2 seconds
        setTimeout(function() {
            button.textContent = originalText;
            button.style.background = '#0057B7';
        }, 2000);
    }).catch(function(err) {
        console.error('Could not copy text: ', err);
        
        // Fallback for older browsers
        var textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();
        
        try {
            document.execCommand('copy');
            button.textContent = '✓ Copied!';
            button.style.background = '#28a745';
            
            setTimeout(function() {
                button.textContent = 'Copy';
                button.style.background = '#0057B7';
            }, 2000);
        } catch (err) {
            console.error('Fallback copy failed: ', err);
        }
        
        document.body.removeChild(textArea);
    });
}

/**
 * YouTube Video Analytics Tracking
 * Tracks video engagement for Google Analytics
 */

// Only load YouTube API if video exists on page
if (document.querySelector('.video-container iframe')) {
    // Load YouTube IFrame API
    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// YouTube player instance
var player;
var videoStarted = false;
var videoCompleted = false;
var videoHalfwayTracked = false;

/**
 * YouTube API Ready Callback
 * Called automatically when YouTube API is loaded
 */
function onYouTubeIframeAPIReady() {
    var iframe = document.querySelector('.video-container iframe');
    if (!iframe) return;
    
    // Get existing iframe and enhance it with API
    player = new YT.Player(iframe, {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

/**
 * Player Ready Callback
 */
function onPlayerReady(event) {
    console.log('Chairperson video loaded and ready');
}

/**
 * Player State Change Callback
 * Tracks video start and completion
 */
function onPlayerStateChange(event) {
    // Track video start
    if (event.data == YT.PlayerState.PLAYING && !videoStarted) {
        videoStarted = true;
        
        // Google Analytics Event (if gtag exists)
        if (typeof gtag === 'function') {
            gtag('event', 'video_start', {
                'event_category': 'Video',
                'event_label': 'Chairperson Message - Svetlana Bychkovska',
                'video_url': 'https://youtu.be/xZOCrM6lrKA'
            });
        }
        
        console.log('Video started: Chairperson Message');
    }
    
    // Track video completion
    if (event.data == YT.PlayerState.ENDED && !videoCompleted) {
        videoCompleted = true;
        
        // Google Analytics Event (if gtag exists)
        if (typeof gtag === 'function') {
            gtag('event', 'video_complete', {
                'event_category': 'Video',
                'event_label': 'Chairperson Message - Svetlana Bychkovska',
                'video_url': 'https://youtu.be/xZOCrM6lrKA'
            });
        }
        
        console.log('Video completed: Chairperson Message');
    }
}

/**
 * Track Video Progress (50% milestone)
 */
function trackVideoProgress() {
    if (player && typeof player.getCurrentTime === 'function') {
        try {
            var currentTime = player.getCurrentTime();
            var duration = player.getDuration();
            var percentWatched = (currentTime / duration) * 100;
            
            if (percentWatched >= 50 && !videoHalfwayTracked) {
                videoHalfwayTracked = true;
                
                // Google Analytics Event (if gtag exists)
                if (typeof gtag === 'function') {
                    gtag('event', 'video_progress', {
                        'event_category': 'Video',
                        'event_label': 'Chairperson Message - 50%',
                        'value': 50
                    });
                }
                
                console.log('Video 50% milestone reached');
            }
        } catch (e) {
            // Player not ready yet, silently fail
        }
    }
}

// Check progress every 5 seconds (only if video exists)
if (document.querySelector('.video-container iframe')) {
    setInterval(trackVideoProgress, 5000);
}

/**
 * Animated Counter for Impact Statistics
 * Animates numbers counting up when scrolled into view
 */
function animateCounter(element, target, duration) {
    var start = 0;
    var increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start).toLocaleString();
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toLocaleString();
        }
    }
    
    updateCounter();
}

/**
 * Intersection Observer for Scroll Animations
 * Triggers animations when elements enter viewport
 */
function initScrollAnimations() {
    var observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // If it's a stat with data-target, animate the number
                var number = entry.target.querySelector('.impact-number[data-target]');
                if (number && !number.classList.contains('counted')) {
                    number.classList.add('counted');
                    var target = parseInt(number.getAttribute('data-target'));
                    animateCounter(number, target, 2000);
                }
            }
        });
    }, observerOptions);
    
    // Observe timeline items
    document.querySelectorAll('.timeline-item').forEach(function(item) {
        observer.observe(item);
    });
    
    // Observe value cards
    document.querySelectorAll('.value-card').forEach(function(card) {
        observer.observe(card);
    });
    
    // Observe program cards
    document.querySelectorAll('.program-card').forEach(function(card) {
        observer.observe(card);
    });
    
    // Observe impact stats
    document.querySelectorAll('.impact-stat').forEach(function(stat) {
        observer.observe(stat);
    });
}

/**
 * Smooth Scroll for Internal Links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            var href = this.getAttribute('href');
            if (href === '#') return;
            
            var target = document.querySelector(href);
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

/**
 * Initialize About Page
 */
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    initSmoothScroll();
    
    console.log('About page initialized');
});

