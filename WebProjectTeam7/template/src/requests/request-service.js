import { SEARCH_URL, UPLOAD_URL } from "../common/giphy-constants.js";


export const loadTrending = async () => {
    try {
        const response = await fetch(`TRENDING_URL`);
        const gifs = await response.json();

        return gifs
    } catch (error) {
        console.error(`Error loading trending GIFs: ${error}`)
    }
 }
const giphs = [];

export const loadSingleGif = async () => { }

export const uploadGif = async (input) => {
    const formData = new FormData();
    input instanceof File ? formData.append('file', input) : formData.append('source_image_url', input);
    try{
        const response = await fetch(UPLOAD_URL, {
            method: 'POST', 
            body: formData
        });
        const gif = await response.json();
        console.log(gif);
        //addUpload(gif)

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