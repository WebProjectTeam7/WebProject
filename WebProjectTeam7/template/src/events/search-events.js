import { q } from './helpers.js';
import { CONTAINER_SELECTOR } from '../common/constants.js';
import { searchGiphs } from '../requests/request-service.js';
import { toSearchView } from '../view/search-view.js';


export const renderSearchItems = async(searchTerm) => {
    try {
        const giphy = await searchGiphs(searchTerm);
     
        q(CONTAINER_SELECTOR).innerHTML = toSearchView(giphy, searchTerm);
    } catch (error) {
        console.error(error);
    }
};