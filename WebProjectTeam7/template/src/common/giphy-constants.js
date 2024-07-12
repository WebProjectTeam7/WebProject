export const API_KEY_1 = 'OTf7VIpal5Iv3WCOkWZluWCJ1irOjWfI';

export const API_KEY_2 = 'QP47tkC3QL0v19NaNwo3Ebt678w7fsr5';

export const API_KEY_3 = 'FgmzyU2tFbqdZELwi0q7RRN6Rur6OqAf';

export const LIMIT = 20;

export const GET_ID_URL = (apiKey, id) =>
    `https://api.giphy.com/v1/gifs/${id}/?api_key=${apiKey}`;

export const TRENDING_URL = (apiKey, limit) =>
    `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${limit}`;

export const SEARCH_URL = (apiKey, limit, query) =>
    `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=${limit}&q=${query}`;

export const UPLOAD_URL = (apiKey) =>
    `https://upload.giphy.com/v1/gifs?api_key=${apiKey}`;

export const RANDOM_URL = (apiKey) =>
    `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;