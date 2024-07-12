export const toHomeView = (gifs) => `
<div id="home" class="home-view">
  <h1>GIPHY GIFS</h1>
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
    <img src="${gifs[0].images.downsized.url}" class="gif top-left" alt="GIF 1">
    <img src="${gifs[1].images.downsized.url}" class="gif top-right" alt="GIF 2">
    <img src="${gifs[2].images.downsized.url}" class="gif bottom-left-1" alt="GIF 3">
    <img src="${gifs[3].images.downsized.url}" class="gif bottom-left-2" alt="GIF 4">
    <img src="${gifs[4].images.downsized.url}" class="gif bottom-right-1" alt="GIF 5">
    <img src="${gifs[5].images.downsized.url}" class="gif bottom-right-2" alt="GIF 6">
    <img src="${gifs[6].images.downsized.url}" class="gif bottom-right-3" alt="GIF 7">
  </div>
</div>
</div>
`;
