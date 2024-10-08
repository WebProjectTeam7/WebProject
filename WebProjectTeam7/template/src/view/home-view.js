
/**
 * Generates the HTML for displaying the home view.
 * @returns {string} - HTML string for displaying the home view with GIFs.
 */
export const toHomeView = () => `
  <div id="home" class="home-view">
    <h1>GIPHY GIFS</h1>
    <div class="powered-by">
      <p>Powered by:</p>
      <img src="images/logos/gyphy-logo.png" alt="Giphy">
    </div>
    <div class="content">
      <ul>
        <li>Browse trending</li>
        <li>Upload GIF</li>
        <li>Browse GIFs</li>
        <li>Keep you favorite GIF</li>
        <li>Search for GIFs</li>
        <div class="switch-container">
          <input type="checkbox" id="switch" class="switch-input">
          <label for="switch" class="switch-label">
            <span class="switch-inner"></span>
            <span class="switch-handle"></span>
          </label>
        </div>
      </ul>
    <div id="container-home">
      <!-- start placeholders -->

      <!-- end placeholders -->
    </div>
    </div>
  </div>
`;

/**
 * Generates the HTML for displaying gifs at the home view.
 * @param {Array} gifs - Array of GIF objects to display on the home view.
 * @returns {string} - HTML string for displaying the home view with GIFs.
 */
export const toHomeViewGifs = (gifs) => `
  <div>
    <img src="${gifs ? gifs[0].images.downsized.url : 'images/gifs/loading.gif'}" class="gif top-left" alt="GIF 1">
    <img src="${gifs ? gifs[1].images.downsized.url : 'images/gifs/loading.gif'}" class="gif top-right" alt="GIF 2">
    <img src="${gifs ? gifs[2].images.downsized.url : 'images/gifs/loading.gif'}" class="gif bottom-left-1" alt="GIF 3">
    <img src="${gifs ? gifs[3].images.downsized.url : 'images/gifs/loading.gif'}" class="gif bottom-left-2" alt="GIF 4">
    <img src="${gifs ? gifs[4].images.downsized.url : 'images/gifs/loading.gif'}" class="gif bottom-right-1" alt="GIF 5">
    <img src="${gifs ? gifs[5].images.downsized.url : 'images/gifs/loading.gif'}" class="gif bottom-right-2" alt="GIF 6">
  </div>
  `;