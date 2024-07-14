/* eslint-disable no-undef */
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

/**
 * Retrieves the list of favorite GIFs from localStorage or initializes an empty array if not found.
 * @type {Array}
 */
export const addFavorite = (giphyId) => {
    // if (favorites.find(id => id === giphyId)) return;

    // favorites.push(giphyId);
    favorites = [giphyId];

    localStorage.setItem('favorites', JSON.stringify(favorites));
};

/**
 * Adds a GIF to the list of favorites. Only one GIF can be a favorite at any given time.
 * @param {string} giphyId - The ID of the GIF to add to favorites.
 */
export const removeFavorite = (giphyId) => {
    favorites = favorites.filter(id => id !== giphyId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
};


/**
 * Removes a GIF from the list of favorites.
 * @param {string} giphyId - The ID of the GIF to remove from favorites.
 */
export const getFavorites = () => [...favorites];
