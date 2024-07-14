import { toGifSimple } from './gifs-view.js';

/**
 * Generates the HTML for displaying search results.
 * @param {Array} giphs - Array of GIF objects matching the search term.
 * @param {string} searchTerm - The search term used to find the GIFs.
 * @returns {string} - HTML string for displaying search results.
 */
export const toSearchView = (giphs, searchTerm) => `
<div id="giphs">
  <h1>Giphs found for "${searchTerm}":</h1>
  <div class="content">
    ${giphs.map(toGifSimple).join('\n')}
  </div>
  <button class="show-more-button">Show More</button>
</div>
`;