/**
 * Stats Ticker Component
 * Loads weekly stats from data/community-updates.json and renders a scrolling ticker
 * 
 * Usage: Add <div id="stats-ticker"></div> where you want the ticker to appear
 */

(function() {
    'use strict';

    // Detect language from URL path
    const isUkrainian = window.location.pathname.startsWith('/ua/') || 
                        window.location.pathname.includes('/ua/');
    const lang = isUkrainian ? 'ua' : 'en';
    const basePath = isUkrainian ? '../' : '';

    // Stats categories with translations
    const categories = {
        meals: { emoji: '🍽️', en: 'Meals', ua: 'Їжа' },
        accommodation: { emoji: '🏠', en: 'Accommodation', ua: 'Житло' },
        medical: { emoji: '💊', en: 'Medical', ua: 'Медичне' },
        wheelchairs: { emoji: '🦽', en: 'Wheelchairs', ua: 'Візки' },
        sanitary: { emoji: '🧴', en: 'Sanitary', ua: 'Гігієна' },
        clothing: { emoji: '👕', en: 'Clothing', ua: 'Одяг' }
    };

    // Default stats (used if JSON fails to load)
    const defaultStats = {
        meals: 47,
        accommodation: 3,
        medical: 8,
        wheelchairs: 2,
        sanitary: 15,
        clothing: 24
    };

    /**
     * Fetch stats from JSON file
     */
    async function fetchStats() {
        try {
            const response = await fetch(`${basePath}data/weekly-stats.json`);
            if (!response.ok) throw new Error('Stats file not found');
            return await response.json();
        } catch (error) {
            console.warn('Using default stats:', error.message);
            return { stats: defaultStats };
        }
    }

    /**
     * Render the ticker HTML
     */
    function renderTicker(stats) {
        const items = Object.entries(categories).map(([key, cat]) => {
            const count = stats[key] || 0;
            return `<span class="stats-ticker-item">${cat.emoji} <strong>${count}</strong> ${cat[lang]}</span>`;
        }).join('');

        // Duplicate for seamless scrolling
        return `
            <div class="stats-ticker-track">
                <div class="stats-ticker-content">${items}</div>
                <div class="stats-ticker-content" aria-hidden="true">${items}</div>
            </div>
        `;
    }

    /**
     * Initialize the ticker
     */
    async function init() {
        const container = document.getElementById('stats-ticker');
        if (!container) return;

        const data = await fetchStats();
        container.innerHTML = renderTicker(data.stats || defaultStats);
        container.classList.add('stats-ticker');
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose for manual refresh
    window.refreshStatsTicker = init;

})();
