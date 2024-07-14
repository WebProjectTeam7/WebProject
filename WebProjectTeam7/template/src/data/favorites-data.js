/* eslint-disable no-undef */
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

export const addFavorite = (giphyId) => {
    // if (favorites.find(id => id === giphyId)) return;

    // favorites.push(giphyId);
    favorites = [giphyId];

    localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const removeFavorite = (giphyId) => {
    favorites = favorites.filter(id => id !== giphyId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const getFavorites = () => [...favorites];
