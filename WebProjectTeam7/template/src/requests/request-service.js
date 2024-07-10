import { SEARCH_URL } from "../common/giphy-constants.js";


export const loadTrending = async () => { }

export const loadSingleGif = async () => { }

export const loadSearchGifs = async (searchTerm = '') => { 
    try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=OTf7VIpal5Iv3WCOkWZluWCJ1irOjWfI&limit=20&q=${searchTerm}`);
    const gifs = await response.json();
    return gifs;
    } catch (error) {
        console.error(`Error loadSearchGif ${error}`);
    }
}

export const uploadGif = async () => { }

export const searchGiphs = (title = '') => title
  ? giphs.filter(m => m.title.toLowerCase().includes(title.toLowerCase()))
  : giphs;