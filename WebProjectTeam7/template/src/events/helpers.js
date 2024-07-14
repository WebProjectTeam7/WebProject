/* eslint-disable no-undef */
import { getFavorites } from '../data/favorites-data.js';
import { FULL_HEART, EMPTY_HEART } from '../common/constants.js';

export const q = (selector) => document.querySelector(selector);

export const qs = (selector) => document.querySelectorAll(selector);

export const setActiveNav = (page) => {
    const navs = qs('a.nav-link');

    Array
        .from(navs)
        .forEach(element => element
            .getAttribute('data-page') === page
            ? element.classList.add('active')
            : element.classList.remove('active')
        );
};

export const renderFavoriteStatus = (giphyId) => {
    const favorites = getFavorites();

    return favorites.includes(giphyId)
        ? `<span class="favorite active" data-gif-id="${giphyId}">${FULL_HEART}</span>`
        : `<span class="favorite" data-gif-id="${giphyId}">${EMPTY_HEART}</span>`;
};
