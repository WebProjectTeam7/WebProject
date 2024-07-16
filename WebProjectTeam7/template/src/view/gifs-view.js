import { renderFavoriteStatus } from '../events/helpers.js';

/**
 * Generates the HTML for displaying trending GIFs.
 * @param {Array} gifs - Array of GIF objects to display.
 * @returns {string} - HTML string for displaying trending GIFs.
 */
export const toTrendingView = (gifs) => `
<div id="gifs">
  <h1>Trending GIFs:</h1>
  <div id="container-trending" class="content">
    ${gifs.map(toGifSimple).join('\n')}
  </div>
  <button class="show-more-button">Show More</button>
</div>
`;

/**
 * Generates the HTML for displaying anonymous GIFs.
 * @param {Array} gifs - Array of GIF objects to display.
 * @returns {string} - HTML string for displaying trending GIFs.
 */
export const toShowMoreTrendingView = (gifs) => `
<div id="gifs">
  <div id="container-trending" class="content">
    ${gifs.map(toGifSimple).join('\n')}
  </div>
</div>
`;

/**
 * Generates the HTML for displaying a simple GIF view.
 * @param {object} gif - GIF object to display.
 * @returns {string} - HTML string for displaying a simple GIF view.
 */
export const toGifSimple = (gif) => `
<div class="gif">
  <img src="${gif.images.fixed_height.url}" alt="${gif.title}"><br>
  <button class="details-button" data-gif-id="${gif.id}" data-gif-title="${gif.title}">View Details</button>
  <button class="favorite-button" data-gif-id="${gif.id}">
  ${renderFavoriteStatus(gif.id)}
  </button>
</div>
`;

/**
 * Generates the HTML for displaying a single GIF view.
 * @param {object} gif - GIF object to display.
 * @returns {string} - HTML string for displaying a single GIF view.
 */
export const toSingleGifView = (gif) => `
<a class="nav-link">
<div id="gifs">
  <h1>${gif.title}</h1>
  <div class="content">
    ${toGifDetailed(gif)}
  </div>
</div>
<a>
`;

/**
 * Generates the HTML for displaying detailed GIF information.
 * @param {object} gif - GIF object to display.
 * @returns {string} - HTML string for displaying detailed GIF information.
 */
export const toGifDetailed = (gif) =>`
  <div class="gif-detailed">
    <div class="poster">
      <img src="${gif.images.original.url}" alt="${gif.title}">
        <div class="button-container">
          <span class="favorite-button" data-gif-id="${gif.id}">
            ${renderFavoriteStatus(gif.id)}
          </span>
        </div>
    </div>
    <div class="gif-info">
      <div class="info-container">
        <div class="username-container">
          <p>Username: ${gif.username ? gif.username : 'anonymous user'}</p>
          <img class="avatar" src="${gif.user && gif.user.avatar_url ? gif.user.avatar_url : 'images/gifs/anonymous.gif'}">
        </div>
        <p>Time of upload: ${gif.import_datetime}</p>
        <p>Description: ${gif.user && gif.user.description ? gif.user.description : 'none'}</p>
        <div class="username-container">
          <p>Rating: </p>
          <img class="avatar" src="${gif.rating === 'g' ? 'images/ratings/level1.png' :
        gif.rating === 'pg' ? 'images/ratings/level2.png' :
            gif.rating === 'pg-13' ? 'images/ratings/level3.png' : 'images/ratings/level4.png'}">
        </div>
      </div>
    </div>
  </div>
</a>
`;
