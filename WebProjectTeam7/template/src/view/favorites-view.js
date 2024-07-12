import { toGifSimple } from "./gifs-view.js";

export const toFavoritesView = (giphy, randomGif = null) => {
  if (randomGif) {
    return `
<div id="movies">
  <h1>No Favorites Yet! Here's a Random Gif:</h1>
  <div class="content">
    ${toGifSimple(randomGif)}
  </div>
</div>
`;
  } 

  return `
<div id="movies">
  <h1>Favorite Giphs:</h1>
  <div class="content">
    ${giphy.map(toGifSimple).join('\n')}
  </div>
</div>
`;
};
