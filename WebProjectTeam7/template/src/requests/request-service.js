/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
import { addUpload } from '../data/uploads-data.js';
import { showMessage } from '../events/message-event.js';
import { GifFetcher } from '../utils/request-util.js';

const gifFetcher = new GifFetcher();

/**
 * Fetches and returns trending GIFs.
 * @returns {Promise<Array>} - A promise that resolves to an array of trending GIF objects.
 */
export const loadTrending = async () => {
    try {
        const response = await gifFetcher.trendingGifs();
        const gif = await response.json();

        return gif.data;
    } catch (error) {
        console.error(`Error loading trending GIFs: ${error}`);
    }
};

/**
 * Fetches and returns a single GIF by ID.
 * @param {string} gifId - The ID of the GIF to fetch.
 * @returns {Promise<object>} - A promise that resolves to a GIF object.
 */
export const loadSingleGif = async (gifId) => {
    try {
        const response = await gifFetcher.byId(gifId);
        const gif = await response.json();

        return gif.data;
    } catch (error) {
        console.error(`Error loading GIF: ${error}`);
    }
};

/**
 * Fetches and returns GIFs by an array of IDs.
 * @param {Array} gifIds - The array of GIF IDs to fetch.
 * @returns {Promise<Array>} - A promise that resolves to an array of GIF objects.
 */
export const loadGifsByIds = async (gifIds = []) => {
    try {
        const response = await gifFetcher.byIds(gifIds);
        const gif = await response.json();

        return gif.data;
    } catch (error) {
        console.error('Error loading: ', error.message);
    }
};

/**
 * Uploads a GIF file and adds it to the user's uploads.
 * @param {File} input - The GIF file to upload.
 * @param {string} gifTitle - The GIF title.
 * @param {Array} gifTags - Array of the GIF tags.
 * @returns {Promise<void>}
 */
export const uploadGif = async (input, gifTitle = '', gifTags = []) => {
    try {
        const formData = new FormData();
        formData.append('file', input);
        formData.append('title', gifTitle);
        formData.append('tags', gifTags.join(','));

        const response = await gifFetcher.uploadGif({
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const gif = await response.json();

        addUpload(gif.data.id, gifTitle);

        await showMessage('File uploaded successfully', 'images/gifs/success.gif');
    } catch (error) {
        console.error('Error: ', error.message);
        await showMessage('Failed to upload GIF!', 'images/gifs/fail.gif');
    }
};

/**
 * Searches for GIFs by title.
 * @param {string} title - The title to search for.
 * @returns {Promise<Array>} - A promise that resolves to an array of GIF objects.
 */
export const searchGifs = async (title = '') => {
    if (!title) {
        return [];
    }

    try {
        const response = await gifFetcher.searchGifs(title);
        const gifs = await response.json();
        return gifs.data;
    } catch (error) {
        console.error(`Error loading GIFs: ${error}`);
        return [];
    }
};

/**
 * Fetches and returns a random GIF.
 * @returns {Promise<object>} - A promise that resolves to a random GIF object.
 */
export const loadRandomGif = async () => {
    try {
        const response = await gifFetcher.randomGif();
        const gif = await response.json();
        return gif.data;
    } catch (error) {
        console.error(`Error loading random GIF: ${error}`);
    }
};