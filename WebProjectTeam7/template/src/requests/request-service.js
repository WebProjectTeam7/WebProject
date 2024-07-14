/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
import { addUpload } from '../data/uploads-data.js';
import { GifFetcher } from '../utils/request-util.js';

const gifFetcher = new GifFetcher();

export const loadTrending = async(offset) => {
    try {
        const response = await gifFetcher.trendingGifs(offset);
        const gif = await response.json();

        return gif.data;
    } catch (error) {
        console.error(`Error loading trending GIFs: ${error}`);
    }
}

export const loadSingleGif = async(gifId) => {
    try {
        const response = await gifFetcher.byId(gifId);
        const gif = await response.json();

        return gif.data;
    } catch (error) {
        console.error(`Error loading GIF: ${error}`);
    }
}

export const loadGifsByIds = async(gifIds = []) => {
    try {
        const response = await gifFetcher.byIds(gifIds);      
        const gifs = await response.json();

        return gifs.data;
    } catch (error) {
        console.error('Error loading: ', error.message);
    }
}

export const uploadGif = async(input) => {
    const formData = new FormData();
    formData.append('file', input);
    try {
        const response = await gifFetcher.uploadGif({
            method: 'POST',
            body: formData
        });

        const gif = await response.json();
        addUpload(gif.data.id);

        alert('GIF uploaded successfully!');
    } catch (error) {
        console.error('Error: ', error.message);
        alert('Failed to upload GIF!');
    }
}

export const loadSearchGifs = async(searchTerm = '', offset) => {
    try {
        const response = await gifFetcher.searchGifs(searchTerm, offset);
        const gifs = await response.json();
        return gifs.data;
    } catch (error) {
        console.error(`Error loadSearchGiph ${error}`);
    }
}

export const searchGiphs = async(title = '', offset) => {
    if (title) {
        const searchResults = await loadSearchGifs(title, offset);
        return searchResults;
    } 
    return [];
    
}

export const loadRandomGif = async() => {
    try {
        const response = await gifFetcher.randomGif();
        const json = await response.json();
        return json.data;
    } catch (error) {
        console.error(`Error loading random GIF: ${error}`);
    }
};