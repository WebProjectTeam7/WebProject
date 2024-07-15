/* eslint-disable no-undef */
import { uploadGif } from '../requests/request-service.js';
import { q } from './helpers.js';
import { showMessage } from './message-event.js';

export const handleSubmitFile = async () => {
    const spinner = document.querySelector('.spinner');
    spinner.style.display = 'block';
    try {
        const file = document.getElementById('gif-file').files[0];
        const gifName = document.getElementById('gif-name').value;
        const tags = document.getElementById('gif-tags').value.split(',').map(tag => tag.trim());

        if (!file) {
            await showMessage('Select a GIF file to upload.', 'images/gifs/dis.gif');
        } else {
            await uploadGif(file, gifName, tags);
        }
    } catch (e) {
        console.error('Error: ', e.message);
    } finally {
        spinner.style.display = 'none';
    }
};

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
