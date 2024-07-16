import { toGifSimple } from './gifs-view.js';

/**
 * Generates the HTML for displaying the user's uploaded GIFs.
 * @param {Array} gifs - Array of GIF objects uploaded by the user.
 * @returns {string} - HTML string for displaying the user's uploaded GIFs.
 */
export const toMyUploadsView = (gifs) => gifs.length > 0  ? `
<div id="gifs">
  <h1>My Uploaded GIFs:</h1>
  <div class="content">
    ${gifs.map(toGifSimple).join('\n')}
  </div>
</div>
` : `
<div id="gifs">
  <h1>No Uploaded GiFs yet</h1>
</div>
`;
