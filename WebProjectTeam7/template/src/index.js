import { HOME } from './common/constants.js';
import { loadPage } from './events/navigation-events.js';
import { q } from './events/helpers.js';
import { searchGiphs, uploadGif } from './requests/request-service.js';
import { renderSearchItems } from './events/search-events.js';
import { renderTrending, renderGiftsDetails } from './events/navigation-events.js';

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

        if (e.target.classList.contains('vie-gif-details')) {
           renderGiftsDetails(+e.target.getAttribute('data-gif'));
        }

        if (e.target.classList.contains('favorite-button')) {
            const gifId = e.target.getAttribute('data-gif-id');
            addFavorite(gifId);
            alert('GIF added to favorites!');
        }
    });

    document.addEventListener('submit', async (e) => {

        if (e.target.classList.contains('upload-form')) {
            try {
                const file = document.getElementById('gif-file').files[0];
                // const url = document.getElementById('gif-url').value;
                if (!file && !url) {
                    return alert('Please select a GIF file or enter a GIF URL to upload.');
                }
                await (file ? uploadGif(file) : uploadGif(url));
            } catch (e) {
                console.error('Error: ', e.message);
            }
        }
    });


    loadPage(HOME);
});