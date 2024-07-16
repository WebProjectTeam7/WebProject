/* eslint-disable no-undef */

/**
 * Retrieves the list of uploaded GIFs from localStorage or initializes an empty array if not found.
 * @type {Array}
 */
let uploads = JSON.parse(localStorage.getItem('uploads')) || {};

/**
 * Adds a GIF to the list of uploads.
 * @param {string} gifId - The ID of the GIF to add to uploads.
 * @param {string} gifTitle - The name of the GIF.
 */
export const addUpload = (gifId, gifTitle = '') => {
    if (uploads[gifId]) {
        throw new Error('GIF with same id already exists: ', gifId);
    }
    if (Object.values(uploads).includes(gifTitle)) {
        throw new Error('GIF with same name already exists: ', gifTitle);
    }
    uploads[gifId] = gifTitle;
    localStorage.setItem('uploads', JSON.stringify(uploads));
};


/**
 * Retrieves the list of uploaded GIFs.
 * @returns {Array} - An array containing the IDs of the uploaded GIFs.
 */
export const getUploadsIds = () => Object.keys(uploads);

/**
 * Retrieves the list of uploaded GIFs.
 * @returns {Array} - An array containing the titles of the uploaded GIFs.
 */
export const getUploadsTitles = () => Object.values(uploads);


/**
 * Retrieves the list of uploaded GIFs.
 * @returns {object} - An object containing the IDs and  titles of the uploaded GIFs.
 */
export const getUploads = () => uploads;