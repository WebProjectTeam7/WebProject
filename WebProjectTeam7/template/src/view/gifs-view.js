import { renderFavoriteStatus } from '../events/helpers.js';

/**
 * Generates the HTML for displaying trending GIFs.
 * @param {Array} gifs - Array of GIF objects to display.
 * @returns {string} - HTML string for displaying trending GIFs.
 */
export const toTrendingView = (gifs) => `
<div id="gifs">
  <h1>Trending GIFs:</h1>
  <div class="content">
    ${gifs.map(toGifSimple).join('\n')}
  </div>
</div>
`;

/**
 * Generates the HTML for displaying a simple GIF view.
 * @param {Object} gif - GIF object to display.
 * @returns {string} - HTML string for displaying a simple GIF view.
 */
export const toGifSimple = (gif) => `
<div class="gif">
  <img src="${gif.images.fixed_height.url}" alt="${gif.title}"><br>
  <button class="details-button" data-gif-id="${gif.id}">View Details</button>
  <button class="favorite-button" data-gif-id="${gif.id}">
  ${renderFavoriteStatus(gif.id)}
  </button>
</div>
`;

/**
 * Generates the HTML for displaying a single GIF view.
 * @param {Object} gif - GIF object to display.
 * @returns {string} - HTML string for displaying a single GIF view.
 */
export const toSingleGifView = (gif) => `
<div id="gifs">
  <h1>${gif.title}</h1>
  <div class="content">
    ${toGifDetailed(gif)}
  </div>
</div>
`;

/**
 * Generates the HTML for displaying detailed GIF information.
 * @param {Object} gif - GIF object to display.
 * @returns {string} - HTML string for displaying detailed GIF information.
 */
export const toGifDetailed = (gif) => `
<div class="gif-detailed">
  <div class="poster">
    <img src="${gif.images.fixed_height.url}" alt="${gif.title}">
  </div>
  <div class="gif-info">
  <span class="favorite-button" data-gif-id="${gif.id}">
      ${renderFavoriteStatus(gif.id)}
  </span>
    <p>Username: ${gif.username}</p>
    <p>Plot: ${gif.description}</p>
  </div>
</div>
`;