export const toHomeView = (gifs) => `
<div id="home" class="home-view">
  <h1>DLS GIF Vault</h1>
  <div class="content">
    <p>Powered by: </p>
    <img src="images/logos/gyphy-logo.png" alt="Giphy">
    <ul>
      <li>Browse trending</li>
      <li>Upload GIF</li>
      <li>Browse GIFs</li>
      <li>Add and remove GIFs from favorites</li>
      <li>Search for GIFs</li>
    </ul>
    <img src="https://api.giphy.com/v1/gifs/random" class="gif top-left" alt="GIF 1">
    <img src="https://api.giphy.com/v1/gifs/random" class="gif top-right" alt="GIF 2">
    <img src="https://api.giphy.com/v1/gifs/random" class="gif bottom-left-1" alt="GIF 3">
    <img src="https://api.giphy.com/v1/gifs/random" class="gif bottom-left-2" alt="GIF 4">
  </div>
</div>
</div>
`;
