import { ABOUT, TRENDING, UPLOAD, FAVORITES, HOME, CONTAINER_SELECTOR } from '../common/constants.js';
import { q, setActiveNav } from './helpers.js';
import { toUploadView } from '../view/upload-view.js';

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

const renderTrending = async () => { };

const renderFavorites = async () => { };

const renderUpload = () => {
    q(CONTAINER_SELECTOR).innerHTML = toUploadView();
};

const renderAbout = () => {
    q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};
