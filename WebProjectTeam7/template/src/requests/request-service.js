export const loadTrending = async () => { }

export const loadSingleGif = async () => { }

export const loadSearchGifs = async () => { }

export const uploadGif = async () => { }

export const searchGiphs = async (searchTerm = '') => {
    const response = await fetch(`SEARCH_URL${searchTerm}`);
    const movies = await response.json();
  
    return movies;
  };