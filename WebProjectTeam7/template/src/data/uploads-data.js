/* eslint-disable no-undef */
let uploads = JSON.parse(localStorage.getItem('uploads')) || [];

export const addUpload = (gifId) => {
    if (gifId) {
        uploads.push(gifId);
        localStorage.setItem('uploads', JSON.stringify(uploads));
    }
};

export const getUploads = () => [...uploads];