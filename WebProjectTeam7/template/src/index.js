/* eslint-disable no-undef */
import { HOME } from './common/constants.js';
import { OFFSET } from './common/giphy-constants.js';
import { loadPage, renderGiftsDetails, renderTrending, renderShowMore, renderHome } from './events/navigation-events.js';
import { q } from './events/helpers.js';
import { renderSearchItems } from './events/search-events.js';
import { toggleFavoriteStatus } from './events/favorites.js';
import { handleInputChange, handleSubmitFile } from './events/upload-events.js';

/**
 * Initializes the application by adding event listeners and loading the home page.
 * @async
 */
document.addEventListener('DOMContentLoaded', async () => {
    let currentSearchTerm = '';
    let dogOrCats = 'cats';

    /**
     * Handles click events within the document.
     * @param {Event} e - The click event.
     */
    document.addEventListener('click', async (e) => {

        if (e.target.classList.contains('nav-link')) {
            loadPage(e.target.getAttribute('data-page'));
        }

        if (e.target.id === 'search-button') {
            const query = q('#search').value.trim();
            if (query) {
                currentSearchTerm = query;
                OFFSET[0] = 0;
                renderSearchItems(query);
                await renderSearchItems(query);
            }
        }

        if (e.target.id === 'clear-search') {
            q('#search').value = '';
            currentSearchTerm = '';
        }

        if (e.target.classList.contains('view-trending-gif-btn')) {
            OFFSET[0] = 0;
            await renderTrending(+e.target.getAttribute('data-gif-id'));
        }
        if (e.target.classList.contains('favorite-button') || e.target.classList.contains('favorite')) {
            const gifId = e.target.getAttribute('data-gif-id') || e.target.parentNode.getAttribute('data-gif-id');
            toggleFavoriteStatus(gifId);
        }
        if (e.target.classList.contains('details-button')) {
            const gifId = e.target.getAttribute('data-gif-id');
            const gifTitle = e.target.getAttribute('data-gif-title');
            await renderGiftsDetails(gifId, gifTitle);
        }

        if (e.target.classList.contains('show-more-button')) {
            await renderShowMore(currentSearchTerm);
        }

    });

    /**
     * Handles submit events within the document.
     * @param {Event} e - The submit event.
     */
    document.addEventListener('submit', async (e) => {

        if (e.target.classList.contains('upload-form')) {
            await handleSubmitFile();
        }
    });

    /**
     * Handles change events within the document.
     * @param {Event} e - The change event.
     */
    document.addEventListener('change', async (e) => {

        if (e.target.classList.contains('gif-input')) {
            await handleInputChange(e);
        }
        if (e.target.classList.contains('switch-input')) {
            setTimeout(async () => {
                if (dogOrCats === 'cats') {
                    await renderHome('dogs');
                    dogOrCats = 'dogs';
                } else {
                    await renderHome('cats');
                    dogOrCats = 'cats';
                }
            }, 300);
        }
    });

    /**
     * Handles keydown events within the document.
     * @param {Event} e - The keydown event.
     */
    document.addEventListener('keydown', async (e) => {
        if (e.key === 'Enter') {
            const query = q('#search').value.trim();
            if (query) {
                currentSearchTerm = query;
                OFFSET[0] = 0;
                await renderSearchItems(query);
            }
        }
    });

    loadPage(HOME);
});