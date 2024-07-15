import { CONTAINER_SELECTOR, SEARCH } from '../common/constants.js';
import { q, setActiveNav } from './helpers.js';
import { searchGifs } from '../requests/request-service.js';
import { toSearchView } from '../view/search-view.js';


export const renderSearchItems = async(searchTerm, offset = 0) => {
    try {
        const giphy = await searchGifs(searchTerm, offset);

        q(CONTAINER_SELECTOR).innerHTML = toSearchView(giphy, searchTerm);
        setActiveNav(SEARCH);
    } catch (error) {
        console.error(error);
    }
};