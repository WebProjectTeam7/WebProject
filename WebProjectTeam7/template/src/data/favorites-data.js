/* eslint-disable no-undef */
let favorites = JSON.parse(localStorage.getItem('favorite')) || [];

/**
 * Retrieves the list of favorite GIFs from localStorage or initializes an empty array if not found.
 * @type {Array}
 */
export const addFavorite = (giphyId) => {
    favorites = [giphyId];
    localStorage.setItem('favorite', JSON.stringify(favorites));
};

/**
 * Adds a GIF to the list of favorites. Only one GIF can be a favorite at any given time.
 * @param {string} giphyId - The ID of the GIF to add to favorites.
 */
export const removeFavorite = (giphyId) => {
    favorites = favorites.filter(id => id !== giphyId);
    localStorage.setItem('favorite', JSON.stringify(favorites));
};


/**
 * Retrieves the list of favorite GIFs.
 * @returns {Array} - An array containing the IDs of the favorite GIFs.
 */
export const getFavorites = () => [...favorites];
