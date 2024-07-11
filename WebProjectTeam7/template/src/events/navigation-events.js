import { ABOUT, TRENDING, UPLOAD, MY_UPLOADS, FAVORITES, HOME, CONTAINER_SELECTOR } from '../common/constants.js';
import { q, setActiveNav } from './helpers.js';
import { toUploadView } from '../view/upload-view.js';
import { toMyUploadsView } from '../view/my-uploads-view.js';
import { getUploads } from '../data/uploads-data.js';
import { loadSingleGif, loadTrending  } from '../requests/request-service.js';
import { getFavorites } from '../data/favorites-data.js';
import { toFavoritesView } from '../view/favorites-view.js';
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
        
        case MY_UPLOADS:
            setActiveNav(MY_UPLOADS);
            return renderMyUploads();    

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

export const renderTrending = async () => { 
    const trending = await loadTrending();

    q(CONTAINER_SELECTOR).innerHTML = toTrendingView(trending);
};

const renderFavorites = async () => {
    const favorites = getFavorites();
    const giphyPromises = favorites.map(id => loadSingleGif(id));

    const result = await Promise.all(giphyPromises);
    q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(result);
};

const renderUpload = () => {
    q(CONTAINER_SELECTOR).innerHTML = toUploadView();
};

const renderMyUploads = async () => {
    const gifsIds = getUploads();
    const gifs = await Promise.all(gifsIds.map((id) => loadSingleGif(id)));

    q(CONTAINER_SELECTOR).innerHTML = toMyUploadsView(gifs);
}

const renderAbout = () => {
    q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};

export const renderGiftsDetails = (categoryId = null) => {
    q(CONTAINER_SELECTOR).innerHTML = toSingleGifView()
}