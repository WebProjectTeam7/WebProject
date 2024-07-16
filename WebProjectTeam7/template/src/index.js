/* eslint-disable no-undef */
import { HOME } from './common/constants.js';
import { OFFSET } from './common/giphy-constants.js';
import { loadPage, renderGiftsDetails, renderTrending, renderShowMore } from './events/navigation-events.js';
import { q } from './events/helpers.js';
import { renderSearchItems, renderShowMoreSearchItems } from './events/search-events.js';
import { toggleFavoriteStatus } from './events/favorites.js';
import { handleInputChange, handleSubmitFile } from './events/upload-events.js';

document.addEventListener('DOMContentLoaded', async () => {
    let currentSearchTerm = '';

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
            OFFSET[0] = 0;
        }

        if (e.target.classList.contains('view-trending-gif-btn')) {
            await renderTrending(+e.target.getAttribute('data-gif-id'));
        }
        if (e.target.classList.contains('favorite-button') || e.target.classList.contains('favorite')) {
            const gifId = e.target.getAttribute('data-gif-id') || e.target.parentNode.getAttribute('data-gif-id');
            toggleFavoriteStatus(gifId);
        }
        if (e.target.classList.contains('details-button')) {
            const gifId = e.target.getAttribute('data-gif-id');
            renderGiftsDetails(gifId);
        }

        if (e.target.classList.contains('show-more-button')) {
            if (currentSearchTerm) {
                await renderShowMoreSearchItems(currentSearchTerm);
            } else {
                await renderShowMore();
            }
        }

    });

    document.addEventListener('submit', async (e) => {

        if (e.target.classList.contains('upload-form')) {
            await handleSubmitFile();
        }
    });

    document.addEventListener('change', async (e) => {

        if (e.target.classList.contains('gif-input')) {
            await handleInputChange(e);
        }
    });

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