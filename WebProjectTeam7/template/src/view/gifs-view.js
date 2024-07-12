export const toTrendingView = (gifs) => `
<div id="gifs">
  <h1>Trending GIFs:</h1>
  <div class="content">
    ${gifs.map(toGifSimple).join('\n')}
  </div>
</div>
`;

export const toGifSimple = (gif) => `
<div class="gif">
  <h1>${gif.title}</h1>
  <img src="${gif.images.fixed_height.url}" alt="${gif.title}"><br>
  <button class="details-button" data-gif-id="${gif.id}">View Details</button>
  <button class="favorite-button" data-gif-id="${gif.id}">
  ${renderFavoriteStatus(gif.id) === '❤' ? 'Remove from Favorites' : 'Add to Favorites'}
  </button>
</div>
`;

export const toSingleGifView = (gif) => `
<div id="gifs">
  <h1>${gif.title}</h1>
  <div class="content">
    ${toGifDetailed(gif)}
  </div>
</div>
`;

const toGifDetailed = (gif) => `
<div class="gif-detailed">
  <div class="poster">
    <img src="${gif.images.fixed_height.url}" alt="${gif.title}">
  </div>
  <div class="gif-info">
  <p>Username: ${gif.username}</p>
    <p>Plot: ${gif.description}</p>
  </div>
</div>
`;