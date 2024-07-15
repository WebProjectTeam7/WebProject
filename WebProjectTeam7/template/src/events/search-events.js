import { CONTAINER_SELECTOR, SEARCH } from '../common/constants.js';
import { q, setActiveNav } from './helpers.js';
import { searchGifs } from '../requests/request-service.js';
import { toSearchView, toShowMoreSearchView } from '../view/search-view.js';
import { LIMIT, OFFSET } from '../common/giphy-constants.js';


export const renderSearchItems = async(searchTerm) => {
    try {
        const giphy = await searchGifs(searchTerm);

        q(CONTAINER_SELECTOR).innerHTML = toSearchView(giphy, searchTerm);
        setActiveNav(SEARCH);
    } catch (error) {
        console.error(error);
    }
};

export const renderShowMoreSearchItems = async(searchTerm) => {
    try {
        OFFSET[0] += LIMIT;
        const giphy = await searchGifs(searchTerm);
        q('#container-search').innerHTML += toShowMoreSearchView(giphy);
    } catch (error) {
        console.error(error);
    }
};