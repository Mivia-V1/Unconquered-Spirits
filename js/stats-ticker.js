/**
 * Stats Ticker Component
 * Renders a scrolling ticker with weekly community stats
 * 
 * Usage: Add <div id="stats-ticker"></div> where you want the ticker
 * Data is loaded from data/ticker-stats.json
 */

(function() {
    'use strict';

    // Detect language
    const isUkrainian = window.location.pathname.startsWith('/ua/') || 
                        window.location.pathname.includes('/ua/');
    const lang = isUkrainian ? 'ua' : 'en';
    const basePath = isUkrainian ? '../' : '';

    /**
     * Fetch ticker stats from JSON
     */
    async function fetchTickerStats() {
        try {
            const response = await fetch(`${basePath}data/ticker-stats.json`);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error('Failed to load ticker stats:', error);
            return null;
        }
    }

    /**
     * Render the ticker
     */
    function renderTicker(data, container) {
        if (!data || !container) return;

        const title = lang === 'ua' ? data.title.ua : data.title.en;
        
        // Build ticker items HTML
        const tickerItems = data.stats.map(stat => {
            const label = lang === 'ua' ? stat.label.ua : stat.label.en;
            return `<span class="stats-ticker-item">${stat.emoji} <strong>${stat.value}</strong> ${label}</span>`;
        }).join('');

        container.innerHTML = `
            <h3 class="community-section-title">${title}</h3>
            <div class="stats-ticker">
                <div class="stats-ticker-track">
                    <div class="stats-ticker-content">
                        ${tickerItems}
                    </div>
                    <div class="stats-ticker-content" aria-hidden="true">
                        ${tickerItems}
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Initialize the ticker
     */
    async function init() {
        const container = document.getElementById('stats-ticker');
        if (!container) return;

        const data = await fetchTickerStats();
        if (data) {
            renderTicker(data, container);
        }
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

