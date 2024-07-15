import { toGifSimple } from './gifs-view.js';

/**
 * Generates the HTML for displaying the user's favorite GIFs.
 * If no favorite GIFs are available, displays a random GIF.
 * @param {Array} giphy - Array of favorite GIF objects.
 * @param {object} randomGif - A random GIF object to display if no favorites are available.
 * @returns {string} - HTML string for displaying the user's favorite GIFs or a random GIF.
 */
export const toFavoritesView = (giphy, randomGif = null) => {
    if (randomGif) {
        return `
<div id="favorites">
  <h1>No Favorites Yet! Here's a Random Gif:</h1>
  <div class="content">
    ${toGifSimple(randomGif)}
  </div>
</div>
`;
    }

    return `
<div id="favorites">
  <h1>Favorite Giphs:</h1>
  <div class="content">
    ${giphy.map(toGifSimple).join('\n')}
  </div>
</div>
`;
};
