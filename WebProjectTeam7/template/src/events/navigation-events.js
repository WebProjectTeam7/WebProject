import { ABOUT, TRENDING, UPLOAD, MY_UPLOADS, FAVORITE, HOME, SEARCH, DETAILS, CONTAINER_SELECTOR, CONTAINER_SELECTOR_TRENDING, CONTAINER_SELECTOR_SEARCH } from '../common/constants.js';
import { LIMIT, OFFSET } from '../common/giphy-constants.js';
import { loadRandomGif, loadSingleGif, loadTrending, loadGifsByIds, searchGifs } from '../requests/request-service.js';
import { getActiveNav, q, setActiveNav } from './helpers.js';
import { getFavorites } from '../data/favorites-data.js';
import { getUploads } from '../data/uploads-data.js';
import { toHomeView } from '../view/home-view.js';
import { toTrendingView, toSingleGifView, toShowMoreTrendingView } from '../view/gifs-view.js';
import { toFavoritesView } from '../view/favorites-view.js';
import { toUploadView } from '../view/upload-view.js';
import { toMyUploadsView } from '../view/my-uploads-view.js';
import { toShowMoreSearchView } from '../view/search-view.js';
import { toAboutView } from '../view/about-view.js';

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


const renderHome = async () => {
    const gifs = await searchGifs('cats');

    q(CONTAINER_SELECTOR).innerHTML = toHomeView(gifs);
};

export const renderTrending = async () => {
    const trending = await loadTrending();

    q(CONTAINER_SELECTOR).innerHTML = toTrendingView(trending);
};

const renderFavorites = async () => {
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

const renderUpload = () => {
    q(CONTAINER_SELECTOR).innerHTML = toUploadView();
};

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

const renderAbout = () => {
    q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};

export const renderGiftsDetails = async (gifId = null, gifTitle = '') => {
    const gif = await loadSingleGif(gifId);
    if (gifTitle.length > 0) {
        gif.title = gifTitle;
    }

    q(CONTAINER_SELECTOR).innerHTML = toSingleGifView(gif);
    setActiveNav(DETAILS);
};

export const renderShowMore = async () => {
    const page = getActiveNav();
    if (page === TRENDING) {
        OFFSET[0] += LIMIT;
        const trending = await loadTrending();
        q(CONTAINER_SELECTOR_TRENDING).innerHTML += toShowMoreTrendingView(trending);
    } else if (page === SEARCH) {
        const query = q('#search').value.trim();
        OFFSET[0] += LIMIT;
        const search = await searchGifs(query);
        q(CONTAINER_SELECTOR_SEARCH).innerHTML += toShowMoreSearchView(search);
    }
};