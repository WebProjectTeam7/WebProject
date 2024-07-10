import { toGifSimple } from "./gifs-view";

export const toSearchView = (movies, searchTerm) => `
<div id="movies">
  <h1>Movies found for "${searchTerm}":</h1>
  <div class="content">
    ${movies.map(toGifSimple).join('\n')}
  </div>
</div>
`;