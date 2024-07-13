import { addUpload } from '../data/uploads-data.js';
import { GifFetcher } from '../utils/request-util.js';

const gifFetcher = new GifFetcher();

export const loadTrending = async () => {
    try {
        const response = await gifFetcher.trendingGifs();
        const gif = await response.json();

        return gif.data;
    } catch (error) {
        console.error(`Error loading trending GIFs: ${error}`);
    }
}


export const loadSingleGif = async (gifId) => {
    try {
        const response = await gifFetcher.byId(gifId);
        const gif = await response.json();

        return gif.data;
    } catch (error) {
        console.error(`Error loading GIF: ${error}`);
    }
}

export const uploadGif = async (input) => {
    const formData = new FormData();
    input instanceof File ? formData.append('file', input) : formData.append('source_image_url', input);
    try {
        const response = await gifFetcher.uploadGif({
            method: 'POST',
            body: formData
        });
        
        const gif = await response.json();

        addUpload(gif.data.id);

        alert('GIF uploaded successfully!');
    } catch (e) {
        console.error('Error: ', e.message);
        alert('Failed to upload GIF!');
    }
}


export const loadSearchGifs = async (searchTerm = '') => {
    try {
        const response = await gifFetcher.searchGifs(searchTerm);
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
        return [];
    }
}

export const loadRandomGif = async () => {
    try {
        const response = await gifFetcher.randomGif();
        const json = await response.json();
        return json.data;
    } catch (error) {
        console.error(`Error loading random GIF: ${error}`);
    }
};