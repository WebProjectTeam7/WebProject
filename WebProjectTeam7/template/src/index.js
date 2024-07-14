/* eslint-disable no-alert */
/* eslint-disable no-undef */
import { HOME } from './common/constants.js';
import { loadPage, renderGiftsDetails, renderTrending } from './events/navigation-events.js';
import { q } from './events/helpers.js';
import { uploadGif } from './requests/request-service.js';
import { renderSearchItems } from './events/search-events.js';
import { toggleFavoriteStatus } from './events/favorites.js';


document.addEventListener('DOMContentLoaded', async () => {

    // add global listener
    document.addEventListener('click', async (e) => {

        // nav events
        if (e.target.classList.contains('nav-link')) {
            loadPage(e.target.getAttribute('data-page'));
        }

        if (e.target.id === 'searchButton') {
            const query = q('#search').value.trim();
            if (query) {
                renderSearchItems(query);
            }
        }

        if (e.target.classList.contains('view-trending-gif-btn')) {
            await renderTrending(+e.target.getAttribute('data-gif-id'));
        }

        if (e.target.classList.contains('favorite-button') || e.target.classList.contains('favorite')) {
            const gifId = e.target.getAttribute('data-gif-id') || e.target.parentNode.getAttribute('data-gif-id');
            toggleFavoriteStatus(gifId);
        }

        if (e.target.classList.contains('details-button')) {
            const gifId = e.target.getAttribute('data-gif-id');
            renderGiftsDetails(gifId);
        }
    });

    document.addEventListener('submit', async (e) => {
       
        if (e.target.classList.contains('upload-form')) {
            const spinner = document.querySelector('.spinner');
            spinner.style.display = 'block';

            try {
                const file = document.getElementById('gif-file').files[0];
                if (!file) {
                    alert('Please select a GIF file to upload.');
                    return; 
                }
                await uploadGif(file);
            } catch (e) {
                console.error('Error: ', e.message);
            } finally {
                spinner.style.display = 'none';
            }
        }
    })


    loadPage(HOME);
});
