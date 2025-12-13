/**
 * Community Feed - Expandable Story Cards from Facebook
 * Loads community updates from JSON and renders them as expandable cards
 */

(function() {
    'use strict';

    // Detect language from URL path
    const isUkrainian = window.location.pathname.startsWith('/ua/') || 
                        window.location.pathname.includes('/ua/');
    const lang = isUkrainian ? 'ua' : 'en';
    const basePath = isUkrainian ? '../' : '';

    // Translations
    const t = {
        en: {
            thisWeek: 'This week in our community',
            readMore: 'Read more',
            collapse: 'Show less',
            viewOnFb: 'View on Facebook',
            followUs: 'Follow our journey',
            followBtn: 'Follow on Facebook',
            updated: 'Updated',
            seeMore: 'See more stories on Facebook →'
        },
        ua: {
            thisWeek: 'Цього тижня у нашій громаді',
            readMore: 'Читати далі',
            collapse: 'Згорнути',
            viewOnFb: 'Переглянути на Facebook',
            followUs: 'Слідкуйте за нашою діяльністю',
            followBtn: 'Підписатися на Facebook',
            updated: 'Оновлено',
            seeMore: 'Більше історій на Facebook →'
        }
    }[lang];

    /**
     * Fetch community updates from JSON file
     */
    async function fetchCommunityUpdates() {
        try {
            const response = await fetch(`${basePath}data/community-updates.json`);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error('Failed to load community updates:', error);
            return null;
        }
    }

    /**
     * Format date based on language
     */
    function formatDate(dateString) {
        const date = new Date(dateString);
        const locale = lang === 'ua' ? 'uk-UA' : 'en-US';
        return date.toLocaleDateString(locale, { 
            month: 'short', 
            day: 'numeric',
            year: 'numeric'
        });
    }

    /**
     * Render the community feed section
     */
    function renderCommunityFeed(data, container) {
        if (!data || !container) return;

        const fbPage = data.facebookPage || '#';

        container.innerHTML = `
            <div class="story-cards-grid">
                ${data.posts.map(post => renderStoryCard(post, fbPage)).join('')}
            </div>
            
            <div class="community-feed-footer">
                <div class="follow-cta">
                    <p>${t.followUs}</p>
                    <a href="${fbPage}" target="_blank" rel="noopener" class="fb-follow-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        ${t.followBtn}
                    </a>
                </div>
                <a href="${fbPage}" target="_blank" rel="noopener" class="see-more-link">
                    ${t.seeMore}
                </a>
            </div>
        `;

        // Add event listeners for expand/collapse
        container.querySelectorAll('.story-card').forEach(card => {
            const expandBtn = card.querySelector('.expand-btn');
            const preview = card.querySelector('.story-preview');
            const fullText = card.querySelector('.story-full-text');
            
            if (expandBtn && preview && fullText) {
                expandBtn.addEventListener('click', () => {
                    const isExpanded = card.classList.toggle('expanded');
                    expandBtn.textContent = isExpanded ? t.collapse : t.readMore;
                    
                    // Track expansion in GA if available
                    if (window.gtag) {
                        gtag('event', 'story_expand', {
                            'event_category': 'engagement',
                            'event_label': card.dataset.postId
                        });
                    }
                });
            }
        });
    }

    /**
     * Render quick stats row
     */
    function renderQuickStats(stats) {
        return `
            <div class="quick-stats-row">
                ${stats.map(stat => `
                    <div class="quick-stat">
                        <span class="stat-emoji">${stat.emoji}</span>
                        <span class="stat-number">${stat.count}</span>
                        <span class="stat-text">${stat.text[lang] || stat.text.en}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }

    /**
     * Render a single story card
     */
    function renderStoryCard(post, fbPage) {
        const title = post.title[lang] || post.title.en;
        const preview = post.preview[lang] || post.preview.en;
        const fullText = post.fullText[lang] || post.fullText.en;
        const statLabel = post.stats?.label?.[lang] || post.stats?.label?.en || '';
        const fbUrl = post.fbPostUrl || fbPage;
        const imagePath = isUkrainian ? `../${post.image}` : post.image;

        return `
            <article class="story-card" data-post-id="${post.id}">
                <div class="story-card-image">
                    <img src="${imagePath}" alt="${title}" loading="lazy">
                    ${post.stats ? `
                        <div class="story-stat-badge">
                            <span class="badge-emoji">${post.stats.emoji}</span>
                            <span class="badge-count">${post.stats.count}</span>
                            <span class="badge-label">${statLabel}</span>
                        </div>
                    ` : ''}
                </div>
                <div class="story-card-content">
                    <div class="story-date">${formatDate(post.date)}</div>
                    <h4 class="story-title">${title}</h4>
                    <p class="story-preview">${preview}</p>
                    <div class="story-full-text">${fullText}</div>
                    <div class="story-card-actions">
                        <button class="expand-btn">${t.readMore}</button>
                        ${post.fbPostUrl ? `
                            <a href="${fbUrl}" target="_blank" rel="noopener" class="fb-link">
                                ${t.viewOnFb}
                            </a>
                        ` : ''}
                    </div>
                </div>
            </article>
        `;
    }

    /**
     * Initialize the community feed
     */
    async function init() {
        const container = document.getElementById('community-feed') || 
                         document.querySelector('.community-feed-container');
        
        if (!container) {
            console.warn('Community feed container not found');
            return;
        }

        const data = await fetchCommunityUpdates();
        if (data) {
            renderCommunityFeed(data, container);
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose for manual refresh
    window.refreshCommunityFeed = init;

})();
