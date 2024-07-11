import { addFavorite, getFavorites, removeFavorite } from "../data/favorites-data.js";
import { q, renderFavoriteStatus } from "./helpers.js";





export const toggleFavoriteStatus = (giphyId) => {
    const favorites = getFavorites();
  
    if (favorites.includes(giphyId)) {
      removeFavorite(giphyId);
    } else {
      addFavorite(giphyId);
    }
  
    q(`span[data-movie-id="${giphyId}"]`).innerHTML = renderFavoriteStatus(giphyId);
  };