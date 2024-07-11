import { getFavorites } from "../data/favorites-data.js";


export const q = (selector) => document.querySelector(selector);

export const qs = (selector) => document.querySelectorAll(selector);

export const setActiveNav = (page) => {
    const navs = qs('a.nav-link');

    Array
        .from(navs)
        .forEach(element => element
            .getAttribute('data-page') === page
            ? element.classList.add('active')
            : element.classList.remove('active')
        );
};

// export const renderFavoriteStatus = async (giphyId) => {
//     const favorites = await getFavorites();
  
//     return favorites.includes(giphyId)
//       ? `<span class="favorite active" data-movie-id="${giphyId}">${FULL_HEART}</span>`
//       : `<span class="favorite" data-movie-id="${giphyId}">${EMPTY_HEART}</span>`;
//   };

  export const renderFavoriteStatus = (giphyId) => {
    const favorites = getFavorites();
    return favorites.includes(giphyId)
      ? FULL_HEART
      : EMPTY_HEART;
  };