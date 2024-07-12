import { ABOUT, TRENDING, UPLOAD, MY_UPLOADS, FAVORITES, HOME, CONTAINER_SELECTOR } from '../common/constants.js';
import { q, setActiveNav } from './helpers.js';
import { toUploadView } from '../view/upload-view.js';
import { toMyUploadsView } from '../view/my-uploads-view.js';
import { getUploads } from '../data/uploads-data.js';
import { loadRandomGif, loadSingleGif, loadTrending } from '../requests/request-service.js';
import { getFavorites } from '../data/favorites-data.js';
import { toFavoritesView } from '../view/favorites-view.js';
import { toTrendingView, toSingleGifView } from '../view/gifs-view.js';
import { toAboutView } from '../view/about-view.js';
import { toHomeView } from '../view/home-view.js';

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

const renderHome = async () => {
    const gifs = await Promise.all(Array.from({ length: 7 }, () => loadRandomGif()));

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
    const gifsIds = getUploads();
    const gifs = await Promise.all(gifsIds.map((id) => loadSingleGif(id)));

    q(CONTAINER_SELECTOR).innerHTML = toMyUploadsView(gifs);
}

const renderAbout = () => {
    q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};

export const renderGiftsDetails = async (gifId = null) => {
    const gif = await loadSingleGif(gifId);

    q(CONTAINER_SELECTOR).innerHTML = toSingleGifView(gif);
}