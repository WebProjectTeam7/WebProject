import { toGifSimple } from './gifs-view.js';

export const toMyUploadsView = (gifs) => `
<div id="gifs">
  <h1>My Uploaded GIFs:</h1>
  <div class="content">
    ${gifs.map(toGifSimple).join('\n')}
  </div>
</div>
`;
