import { ABOUT, TRENDING, CONTAINER_SELECTOR, FAVORITES, HOME } from '../common/constants.js';

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

        case ABOUT:
            setActiveNav(ABOUT);
            return renderAbout();

        /* if the app supports error login, use default to log mapping errors */
        default: return null;
    }

};

// private functions

const renderHome = () => {
    q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

const renderTrending = async () => { };

const renderFavorites = async () => { };

const renderAbout = () => {
    q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};
