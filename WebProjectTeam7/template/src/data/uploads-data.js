/* eslint-disable no-undef */

/**
 * Retrieves the list of uploaded GIFs from localStorage or initializes an empty array if not found.
 * @type {Array}
 */
let uploads = JSON.parse(localStorage.getItem('uploads')) || [];

/**
 * Adds a GIF to the list of uploads.
 * @param {string} gifId - The ID of the GIF to add to uploads.
 */
export const addUpload = (gifId) => {
    if (gifId) {
        uploads.push(gifId);
        localStorage.setItem('uploads', JSON.stringify(uploads));
    }
};

/**
 * Retrieves the list of uploaded GIFs.
 * @returns {Array} - An array containing the IDs of the uploaded GIFs.
 */
export const getUploads = () => [...uploads];