/* eslint-disable no-undef */
import { addFavorite, getFavorites, removeFavorite } from '../data/favorites-data.js';
import { renderFavoriteStatus } from './helpers.js';


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
  
    // q(`span[data-gif-id="${giphyId}"]`).innerHTML = renderFavoriteStatus(giphyId);
};
