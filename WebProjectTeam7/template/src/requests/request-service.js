import { SEARCH_URL } from "../common/giphy-constants";


export const loadTrending = async () => { }

export const loadSingleGif = async () => { }

export const loadSearchGifs = async () => { 
    const response = await fetch(`${SEARCH_URL}${searchTerm}`);
    const gifs = await response.json();
    return gifs;
}

export const uploadGif = async () => { }

export const searchGiphs = async (searchTerm = '') => {
    const gifs = await loadSearchGifs(searchTerm);
    return gifs;
  };