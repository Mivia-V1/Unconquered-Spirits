/**
 * Stats Ticker Component
 * Loads weekly stats from Google Sheets and renders a scrolling ticker
 * 
 * Data Source: Google Sheet (published as CSV)
 * https://docs.google.com/spreadsheets/d/e/2PACX-1vTKTJNHg2-umxLi-U9eEZmNhXTncQxnz7kX4-x5kM4esBIz5ybLpZTpCY7lW4AwXQ-hK3XeXPMhuQ7B/pub?output=csv
 * 
 * To update stats: Edit the Google Sheet, changes appear within minutes!
 * 
 * Usage: Add <div id="stats-ticker"></div> where you want the ticker to appear
 */

(function() {
    'use strict';

    // Google Sheets CSV URL
    const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTKTJNHg2-umxLi-U9eEZmNhXTncQxnz7kX4-x5kM4esBIz5ybLpZTpCY7lW4AwXQ-hK3XeXPMhuQ7B/pub?output=csv';

    // Detect language from URL path
    const isUkrainian = window.location.pathname.startsWith('/ua/') || 
                        window.location.pathname.includes('/ua/');
    const lang = isUkrainian ? 'ua' : 'en';

    // Stats categories with translations
    const categories = {
        meals: { emoji: '🍽️', en: 'Meals', ua: 'Їжа' },
        accommodation: { emoji: '🏠', en: 'Accommodation', ua: 'Житло' },
        medical: { emoji: '💊', en: 'Medical', ua: 'Медичне' },
        wheelchairs: { emoji: '🦽', en: 'Wheelchairs', ua: 'Візки' },
        sanitary: { emoji: '🧴', en: 'Sanitary', ua: 'Гігієна' },
        clothing: { emoji: '👕', en: 'Clothing', ua: 'Одяг' }
    };

    // Default stats (used if Google Sheets fails to load)
    const defaultStats = {
        meals: 480,
        accommodation: 34,
        medical: 30,
        wheelchairs: 2,
        sanitary: 188,
        clothing: 300
    };

    /**
     * Parse CSV text into key-value object
     */
    function parseCSV(csvText) {
        const lines = csvText.trim().split('\n');
        const stats = {};
        
        // Skip header row, parse data rows
        for (let i = 1; i < lines.length; i++) {
            const [key, value] = lines[i].split(',');
            if (key && value) {
                // Convert numeric values, keep strings as-is
                const numValue = parseInt(value, 10);
                stats[key.trim()] = isNaN(numValue) ? value.trim() : numValue;
            }
        }
        
        return stats;
    }

    /**
     * Fetch stats from Google Sheets
     */
    async function fetchStats() {
        try {
            // Add cache-busting parameter to get fresh data
            const url = `${SHEET_URL}&_t=${Date.now()}`;
            const response = await fetch(url);
            
            if (!response.ok) throw new Error('Sheet not accessible');
            
            const csvText = await response.text();
            const stats = parseCSV(csvText);
            
            console.log('Stats loaded from Google Sheets:', stats);
            return stats;
        } catch (error) {
            console.warn('Using default stats:', error.message);
            return defaultStats;
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

        // Show loading state
        container.innerHTML = '<div class="stats-ticker-loading">Loading stats...</div>';
        container.classList.add('stats-ticker');

        const stats = await fetchStats();
        container.innerHTML = renderTicker(stats);
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
