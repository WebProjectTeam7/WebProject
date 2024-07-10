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
</div>
`;