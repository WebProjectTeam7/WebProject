import { q } from './helpers.js';
import { CONTAINER_SELECTOR } from '../common/constants.js';
import { searchGiphs } from '../requests/request-service.js';


export const renderSearchItems = async (searchTerm) => {
    const giphy = await searchGiphs(searchTerm);
  
    q(CONTAINER_SELECTOR).innerHTML = toSearchView(giphy, searchTerm);
  };