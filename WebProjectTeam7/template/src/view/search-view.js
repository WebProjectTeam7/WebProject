import { toGifSimple } from "./gifs-view.js";

export const toSearchView = (movies, searchTerm) => `
<div id="giphs">
  <h1>Giphs found for "${searchTerm}":</h1>
  <div class="content">
    ${movies.map(toGifSimple).join('\n')}
  </div>
</div>
`;