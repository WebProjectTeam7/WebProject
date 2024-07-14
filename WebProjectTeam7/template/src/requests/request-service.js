/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
import { addUpload } from '../data/uploads-data.js';
import { GifFetcher } from '../utils/request-util.js';

const gifFetcher = new GifFetcher();

export const loadTrending = async(offset) => {
/**
 * Fetches and returns trending GIFs.
 * @returns {Promise<Array>} - A promise that resolves to an array of trending GIF objects.
 */
export const loadTrending = async() => {
    try {
        const response = await gifFetcher.trendingGifs(offset);
        const gif = await response.json();

        return gif.data;
    } catch (error) {
        console.error(`Error loading trending GIFs: ${error}`);
    }
}

/**
 * Fetches and returns a single GIF by ID.
 * @param {string} gifId - The ID of the GIF to fetch.
 * @returns {Promise<Object>} - A promise that resolves to a GIF object.
 */
export const loadSingleGif = async(gifId) => {
    try {
        const response = await gifFetcher.byId(gifId);
        const gif = await response.json();

        return gif.data;
    } catch (error) {
        console.error(`Error loading GIF: ${error}`);
    }
}

/**
 * Fetches and returns GIFs by an array of IDs.
 * @param {Array} gifIds - The array of GIF IDs to fetch.
 * @returns {Promise<Array>} - A promise that resolves to an array of GIF objects.
 */
export const loadGifsByIds = async(gifIds = []) => {
    try {
        const response = await gifFetcher.byIds(gifIds);      
        const gif = await response.json();

        return gif.data;
    } catch (error) {
        console.error('Error loading: ', error.message);
    }
}


/**
 * Uploads a GIF file and adds it to the user's uploads.
 * @param {File} input - The GIF file to upload.
 * @returns {Promise<void>}
 */
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
/**
 * Searches for GIFs by a search term.
 * @param {string} searchTerm - The search term to use.
 * @returns {Promise<Array>} - A promise that resolves to an array of GIF objects.
 */
export const loadSearchGifs = async(searchTerm = '') => {
    try {
        const response = await gifFetcher.searchGifs(searchTerm, offset);
        const gifs = await response.json();
        return gifs.data;
        const response = await gifFetcher.searchGifs(searchTerm);
        const gif = await response.json();
        return gif.data;
    } catch (error) {
        console.error(`Error loadSearchGiph ${error}`);
    }
}

export const searchGiphs = async(title = '', offset) => {
/**
 * Searches for GIFs by title.
 * @param {string} title - The title to search for.
 * @returns {Promise<Array>} - A promise that resolves to an array of GIF objects.
 */
export const searchGiphs = async(title = '') => {
    if (title) {
        const searchResults = await loadSearchGifs(title, offset);
        return searchResults;
    } 
    return [];
    
}

/**
 * Fetches and returns a random GIF.
 * @returns {Promise<Object>} - A promise that resolves to a random GIF object.
 */
export const loadRandomGif = async() => {
    try {
        const response = await gifFetcher.randomGif();
        const gif = await response.json();
        return gif.data;
    } catch (error) {
        console.error(`Error loading random GIF: ${error}`);
    }
};