import { HOME } from './common/constants.js';
import { loadPage } from './events/navigation-events.js';
import { q } from './events/helpers.js';
import { searchGiphs } from './requests/request-service.js';


document.addEventListener('DOMContentLoaded', () => {

    // add global listener
    document.addEventListener('click', e => {
  
        if(e.target.id === 'searchButton') {
            const query = q('search').value.trim();
            if (query) {
                searchGiphs(query);
            }
        }
  
    });
  
    q('input#search').addEventListener('input', e => {
        renderSearchItems(e.target.value);
      });
    
  
    loadPage(HOME);
  
  });