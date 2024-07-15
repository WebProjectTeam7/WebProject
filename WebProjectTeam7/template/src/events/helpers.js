/* eslint-disable no-undef */
import { getFavorites } from '../data/favorites-data.js';
import { FULL_HEART, EMPTY_HEART } from '../common/constants.js';

/**
 * Selects the first element within the document that matches the specified selector.
 * @param {string} selector - A DOMString containing one or more selectors to match.
 * @returns {Element} - The first element that matches the specified selector.
 */
export const q = (selector) => document.querySelector(selector);

/**
 * Selects all elements within the document that match the specified selector.
 * @param {string} selector - A DOMString containing one or more selectors to match.
 * @returns {NodeList} - A static (not live) NodeList of elements that match the specified selector.
 */
export const qs = (selector) => document.querySelectorAll(selector);

/**
 * Sets the active navigation link based on the current page.
 * @param {string} page - The page identifier to set as active.
 */
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

/**
 * Gets the current active page based on the active link.
 * @returns {string} - Current active page name.
 */
export const getActiveNav = () => {
    const activeLink = q('a.nav-link.active');

    return activeLink.getAttribute('data-page');
};

/**
 * Renders the favorite status of a GIF.
 * If the GIF is in the favorites list, it shows a full heart; otherwise, it shows an empty heart.
 * @param {string} giphyId - The ID of the GIF to render the favorite status for.
 * @returns {string} - HTML string representing the favorite status of the GIF.
 */
export const renderFavoriteStatus = (giphyId) => {
    const favorites = getFavorites();

    return favorites.includes(giphyId)
        ? `<span class="favorite active" data-gif-id="${giphyId}">${FULL_HEART}</span>`
        : `<span class="favorite" data-gif-id="${giphyId}">${EMPTY_HEART}</span>`;
};
