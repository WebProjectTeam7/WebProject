import { toGifSimple } from "./gifs-view.js";


export const toFavoritesView = (giphy) => `
<div id="movies">
  <h1>Favorite Giphs:</h1>
  <div class="content">
    ${giphy.map(toGifSimple).join('\n') || '<p>Add some giphs to favorites to see them here.</p>'}
  </div>
</div>
`;
