import { toGifSimple } from './gifs-view.js';

export const toSearchView = (giphs, searchTerm) => `
<div id="giphs">
  <h1>Giphs found for "${searchTerm}":</h1>
  <div class="content">
    ${giphs.map(toGifSimple).join('\n')}
  </div>
</div>
`;