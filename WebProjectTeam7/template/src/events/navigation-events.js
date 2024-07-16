import { ABOUT, TRENDING, UPLOAD, MY_UPLOADS, FAVORITE, HOME, SEARCH, DETAILS, CONTAINER_SELECTOR, CONTAINER_SELECTOR_TRENDING, CONTAINER_SELECTOR_SEARCH, CONTAINER_SELECTOR_HOME } from '../common/constants.js';
import { LIMIT, OFFSET } from '../common/giphy-constants.js';
import { loadRandomGif, loadSingleGif, loadTrending, loadGifsByIds, searchGifs } from '../requests/request-service.js';
import { getActiveNav, q, setActiveNav } from './helpers.js';
import { getFavorites } from '../data/favorites-data.js';
import { getUploads } from '../data/uploads-data.js';
import { toHomeView, toHomeViewGifs } from '../view/home-view.js';
import { toTrendingView, toSingleGifView, toShowMoreTrendingView } from '../view/gifs-view.js';
import { toFavoritesView } from '../view/favorites-view.js';
import { toUploadView } from '../view/upload-view.js';
import { toMyUploadsView } from '../view/my-uploads-view.js';
import { toShowMoreSearchView } from '../view/search-view.js';
import { toAboutView } from '../view/about-view.js';

/**
 * Loads the specified page and renders its content.
 * @param {string} [page] - The page to load.
 * @returns {Function} - renders page;
 */
export const loadPage = (page = '') => {

    switch (page) {

        case HOME:
            setActiveNav(HOME);
            return renderHome();

        case TRENDING:
            setActiveNav(TRENDING);
            OFFSET[0] = 0;
            return renderTrending();

        case FAVORITE:
            setActiveNav(FAVORITE);
            return renderFavorites();

        case UPLOAD:
            setActiveNav(UPLOAD);
            return renderUpload();

        case MY_UPLOADS:
            setActiveNav(MY_UPLOADS);
            return renderMyUploads();

        case ABOUT:
            setActiveNav(ABOUT);
            return renderAbout();

        default: return null;
    }

};

/**
 * Renders the home page with GIFs based on the search term 'cats'.
 * @async
 * @returns {Promise<void>}
 */
export const renderHome = async () => {
    q(CONTAINER_SELECTOR).innerHTML = toHomeView();

    renderHomeViewGifs('cats');
};

export const renderHomeViewGifs = async (query) => {
    const gifs = await searchGifs(query);
    q(CONTAINER_SELECTOR_HOME).innerHTML = toHomeViewGifs(gifs);
};

/**
 * Renders the trending GIFs.
 * @async
 * @returns {Promise<void>}
 */
export const renderTrending = async () => {
    const trending = await loadTrending();

    q(CONTAINER_SELECTOR).innerHTML = toTrendingView(trending);
};

/**
 * Renders the favorites page with the user's favorite GIFs or a random GIF if there are no favorites.
 * @async
 * @returns {Promise<void>}
 */
export const renderFavorites = async () => {
    const favorites = getFavorites();
    if (favorites.length === 0) {
        const randomGif = await loadRandomGif();
        q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(null, randomGif);
    } else {
        const giphyPromises = favorites.map(id => loadSingleGif(id));
        const result = await Promise.all(giphyPromises);
        q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(result.filter(gif => gif && gif.images && gif.images.fixed_height));
    }
};

/**
 * Renders the upload page.
 * @returns {void}
 */
const renderUpload = () => {
    q(CONTAINER_SELECTOR).innerHTML = toUploadView();
};

/**
 * Renders the user's uploads page with the GIFs they have uploaded.
 * @async
 * @returns {Promise<void>}
 */
const renderMyUploads = async () => {
    let gifs = [];

    const gifObj = getUploads();
    const gifIds = Object.keys(gifObj);
    if (gifIds.length > 0) {
        gifs = await loadGifsByIds(gifIds);
        gifs.forEach(gif => {
            gif.title = gifObj[gif.id];
        });
    }

    q(CONTAINER_SELECTOR).innerHTML = toMyUploadsView(gifs);
};

/**
 * Renders the about page.
 * @returns {void}
 */
const renderAbout = () => {
    q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};

/**
 * Renders the detailed view of a GIF.
 * @async
 * @param {string} [gifId] - The ID of the GIF to load details for.
 * @param {string} [gifTitle] - The title of the GIF to set.
 * @returns {Promise<void>}
 */
export const renderGiftsDetails = async (gifId = null, gifTitle = '') => {
    const gif = await loadSingleGif(gifId);
    if (gifTitle.length > 0) {
        gif.title = gifTitle;
    }

    q(CONTAINER_SELECTOR).innerHTML = toSingleGifView(gif);
    setActiveNav(DETAILS);
};

/**
 * Renders more GIFs for the current page (either trending or search results).
 * @async
 * @param {string} [searchTerm] - The search term to use if loading more search results.
 * @returns {Promise<void>}
 */
export const renderShowMore = async (searchTerm = '') => {
    const page = getActiveNav();
    if (page === TRENDING) {
        OFFSET[0] += LIMIT;
        const trending = await loadTrending();
        q(CONTAINER_SELECTOR_TRENDING).innerHTML += toShowMoreTrendingView(trending);
    } else if (page === SEARCH) {
        OFFSET[0] += LIMIT;
        const search = await searchGifs(searchTerm);
        q(CONTAINER_SELECTOR_SEARCH).innerHTML += toShowMoreSearchView(search);
    }
};