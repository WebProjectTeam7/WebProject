import { HOME } from './common/constants.js';
import { loadPage } from './events/navigation-events.js';
import { q } from './events/helpers.js';
import { searchGiphs } from './requests/request-service.js';
import { renderSearchItems } from './events/search-events.js';



document.addEventListener('DOMContentLoaded', () => {

    // add global listener
    document.addEventListener('click', e => {
  
        if(e.target.id === 'searchButton') {
            const query = q('#search').value.trim();
            if (query) {
                renderSearchItems(query);
            }
        }
  
    });
  
    q('#search').addEventListener('input', e => {
        renderSearchItems(e.target.value);
      });
    
  
    loadPage(HOME);
  
  });