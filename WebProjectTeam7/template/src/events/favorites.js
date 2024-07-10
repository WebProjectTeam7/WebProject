import { q } from "./helpers";




export const toggleFavoriteStatus = (movieId) => {
    const favorites = getFavorites();
  
    if (favorites.includes(movieId)) {
      removeFavorite(movieId);
    } else {
      addFavorite(movieId);
    }
  
    q(`span[data-movie-id="${movieId}"]`).innerHTML = renderFavoriteStatus(movieId);
  };