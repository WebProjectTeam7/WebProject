import { CONTAINER_SELECTOR, SEARCH } from '../common/constants.js';
import { q, setActiveNav } from './helpers.js';
import { searchGifs } from '../requests/request-service.js';
import { toSearchView, toShowMoreSearchView } from '../view/search-view.js';
import { LIMIT, OFFSET } from '../common/giphy-constants.js';

/**
 * Renders search items based on the provided search term.
 * Fetches GIFs matching the search term and updates the container with the search results.
 * @async
 * @param {string} searchTerm - The term to search for.
 * @returns {Promise<void>}
 */
export const renderSearchItems = async(searchTerm) => {
    try {
        const giphy = await searchGifs(searchTerm);

        q(CONTAINER_SELECTOR).innerHTML = toSearchView(giphy, searchTerm);
        setActiveNav(SEARCH);
    } catch (error) {
        console.error(error);
    }
};

/**
 * Renders more search items based on the provided search term.
 * Fetches additional GIFs matching the search term and appends them to the existing search results.
 * @async
 * @param {string} searchTerm - The term to search for.
 * @returns {Promise<void>}
 */
export const renderShowMoreSearchItems = async(searchTerm) => {
    try {
        OFFSET[0] += LIMIT;
        const giphy = await searchGifs(searchTerm);
        q('#container-search').innerHTML += toShowMoreSearchView(giphy);
    } catch (error) {
        console.error(error);
    }
};