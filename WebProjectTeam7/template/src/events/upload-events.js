/* eslint-disable no-undef */
import { getUploadsTitles } from '../data/uploads-data.js';
import { uploadGif } from '../requests/request-service.js';
import { q } from './helpers.js';
import { showMessage } from './message-event.js';

/**
 * Handles the file submission process for uploading a GIF.
 * Displays a spinner while the upload is in progress.
 * Shows messages for various validation errors such as no file selected, missing GIF title, or duplicate GIF title.
 * @async
 * @returns {Promise<void>}
 */
export const handleSubmitFile = async () => {
    const spinner = document.querySelector('.spinner');
    spinner.style.display = 'block';
    try {
        const file = document.getElementById('gif-file').files[0];
        const gifTitle = document.getElementById('gif-title').value;
        const tags = document.getElementById('gif-tags').value.split(',').map(tag => tag.trim());

        if (!file) {
            await showMessage('Select a GIF file to upload.', 'images/gifs/dis.gif');
        } else if (gifTitle.trim().length === 0) {
            await showMessage('GIF has to have a name.', 'images/gifs/dis.gif');
        } else if (getUploadsTitles().includes(gifTitle)) {
            await showMessage(`GIF with name ${gifTitle} already exists.`, 'images/gifs/another.gif');
        } else {
            await uploadGif(file, gifTitle, tags);
        }
    } catch (e) {
        console.error('Error: ', e.message);
    } finally {
        spinner.style.display = 'none';
    }
};

/**
 * Handles the input change event for file selection.
 * Displays a preview of the selected GIF file.
 * @async
 * @param {Event} event - The input change event.
 * @returns {Promise<void>}
 */
export const handleInputChange = async (event) => {
    const file = event.target.files[0];
    const previewContainer = q('.preview');
    const previewImage = q('#gif-preview');

    if (file && file.type === 'image/gif') {
        const reader = new FileReader();

        reader.onload = (e) => {
            previewImage.src = e.target.result;
            previewContainer.style.display = 'flex';
        };

        reader.readAsDataURL(file);
    } else {
        previewImage.src = '';
        previewContainer.style.display = 'none';
    }
};

