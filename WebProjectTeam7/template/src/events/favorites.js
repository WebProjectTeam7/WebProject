/* eslint-disable no-undef */
import { addFavorite, getFavorites, removeFavorite } from '../data/favorites-data.js';
import { renderFavoriteStatus } from './helpers.js';

/**
 * Toggles the favorite status of a GIF.
 * If the GIF is already a favorite, it is removed from the favorites list.
 * If the GIF is not a favorite, it is added to the favorites list.
 * The favorite status of all GIF elements on the page is updated.
 * @param {string} giphyId - The ID of the GIF to toggle the favorite status.
 */
export const toggleFavoriteStatus = (giphyId) => {
    const favorites = getFavorites();

    if (favorites.includes(giphyId)) {
        removeFavorite(giphyId);
    } else {
        addFavorite(giphyId);
    }

    
    document.querySelectorAll('.favorite').forEach(span => {
        const id = span.getAttribute('data-gif-id');
        span.innerHTML = renderFavoriteStatus(id);
    });
};
