import { q, setActiveNav } from './helpers.js';
import { CONTAINER_SELECTOR, SEARCH } from '../common/constants.js';
import { searchGiphs } from '../requests/request-service.js';
import { toSearchView } from '../view/search-view.js';


export const renderSearchItems = async(searchTerm, offset = 0) => {
    try {
        const giphy = await searchGiphs(searchTerm, offset);
     
        q(CONTAINER_SELECTOR).innerHTML = toSearchView(giphy, searchTerm);
        setActiveNav(SEARCH);
    } catch (error) {
        console.error(error);
    }
};