import { ABOUT, TRENDING, UPLOAD, MY_UPLOADS, FAVORITES, HOME, CONTAINER_SELECTOR } from '../common/constants.js';
import { q, setActiveNav } from './helpers.js';
import { toUploadView } from '../view/upload-view.js';
import { toMyUploadsView } from '../view/my-uploads-view.js';
import { getUploads } from '../data/uploads-data.js';
import { loadSingleGif } from '../requests/request-service.js';

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

const renderTrending = async () => { 
    const trending = await loadTrending();

    q(CONTAINER_SELECTOR).innerHTML = toTrendingView(trending)
};

const renderFavorites = async () => { };

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

export const renderGiftsDetails = async (categoryId = null) => {
    const gif = await loadDisplayGifDetails();

    q(CONTAINER_SELECTOR).innerHTML = toSingleGifView(gif)
}