import { SEARCH_URL, UPLOAD_URL, TRENDING_URL } from '../common/giphy-constants.js';
import { addUpload } from '../data/uploads-data.js';


export const loadTrending = async () => {
    try {
        const response = await fetch(TRENDING_URL);
        const gif = await response.json();
console.log(gif);
        return gif.data
    } catch (error) {
        console.error(`Error loading trending GIFs: ${error}`)
    }
}
const giphs = [];

export const loadSingleGif = async (gifId) => {
    try {
        const response = await fetch(`${SEARCH_URL}${gifId}`);
        const gif = await response.json();

        return gif.data
    } catch (error) {
        console.error(`Error loading GIF: ${error}`)
    }
 }

export const uploadGif = async (input) => {
    const formData = new FormData();
    input instanceof File ? formData.append('file', input) : formData.append('source_image_url', input);
    try {
        const response = await fetch(UPLOAD_URL, {
            method: 'POST',
            body: formData
        });
        if (!response.ok) {
            throw new Error(`Network error: `, response.statusText);
        }
        const gif = await response.json();
        addUpload(gif.id);

        alert('GIF uploaded successfully!');
    } catch (e) {
        console.error('Error: ', e.message);
        alert('Failed to upload GIF!');
    }
}


export const loadSearchGifs = async (searchTerm = '') => {
    try {
        const response = await fetch(`${SEARCH_URL}${searchTerm}`);
        const gifs = await response.json();
        return gifs.data;
    } catch (error) {
        console.error(`Error loadSearchGiph ${error}`);
    }
}

export const searchGiphs = async (title = '') => {
    if (title) {
        const searchResults = await loadSearchGifs(title);
        return searchResults;
    } else {
        return giphs;
    }
}