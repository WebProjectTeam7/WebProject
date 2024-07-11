import { ABOUT, TRENDING, UPLOAD, FAVORITES, HOME, CONTAINER_SELECTOR } from '../common/constants.js';
import { q, setActiveNav } from './helpers.js';
import { toUploadView } from '../view/upload-view.js';
import { loadDisplayGifDetails } from '../requests/request-service.js';
import { toSingleGifView } from '../view/gifs-view.js';
import { toTrendingView } from '../view/gifs-view.js';

// public API
export const loadPage = (page = '') => {

    switch (page) {

        case HOME:
            setActiveNav(HOME);
            return renderHome();

        case TRENDING:
            setActiveNav(TRENDING);
            return renderTrending();

        case FAVORITES:
            setActiveNav(FAVORITES);
            return renderFavorites();

        case UPLOAD:
            setActiveNav(UPLOAD);
            return renderUpload();

        case ABOUT:
            setActiveNav(ABOUT);
            return renderAbout();

        /* if the app supports error login, use default to log mapping errors */
        default: return null;
    }

};

// private functions

const renderHome = () => {
    // q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

const renderTrendingGifs = async () => { 
    const trending = await loadTrendingGifs();

    q(CONTAINER_SELECTOR).innerHTML = to toTrendingView(gif)
};

const renderFavorites = async () => { };

const renderUpload = () => {
    q(CONTAINER_SELECTOR).innerHTML = toUploadView();
};

const renderAbout = () => {
    q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};

export const renderGiftsDetails = async (categoryId = null) => {
    const gifts = await loadDisplayGifDetails();

    q(CONTAINER_SELECTOR).innerHTML = toSingleGifView(gif)
}