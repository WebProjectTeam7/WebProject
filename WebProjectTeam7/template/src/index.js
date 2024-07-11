import { HOME } from './common/constants.js';
import { loadPage } from './events/navigation-events.js';
import { q } from './events/helpers.js';
import { searchGiphs, uploadGif } from './requests/request-service.js';
import { renderSearchItems } from './events/search-events.js';



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
    });

    document.addEventListener('submit', async (e) => {

        if (e.target.classList.contains('upload-form')) {
            e.preventDefault();
            try {
                const file = document.getElementById('gif-file').files[0];
                const url = document.getElementById('gif-url').value;
                if (!file && !url) {
                    return alert('Please select a GIF file or enter a GIF URL to upload.');
                }
                await (file ? uploadGif(file) : uploadGif(url));
            } catch (e) {
                console.error('Error: ', e.message);
            }
        }
    });

    q('#search').addEventListener('input', e => {
        renderSearchItems(e.target.value);
    });

    loadPage(HOME);
});