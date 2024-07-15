export const LIMIT = 21;

export const OFFSET = [0];

export const GET_ID_URL = (apiKey, id) =>
    `https://api.giphy.com/v1/gifs/${id}/?api_key=${apiKey}`;

export const GET_IDS_URL = (apiKey, ids) =>
    `https://api.giphy.com/v1/gifs?api_key=${apiKey}&ids=${ids}`;

export const TRENDING_URL = (apiKey, limit, offset) =>
    `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&offset=${offset}&limit=${limit}`;

export const SEARCH_URL = (apiKey, query, limit, offset) =>
    `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&offset=${offset}&limit=${limit}&q=${query}`;

export const UPLOAD_URL = (apiKey) =>
    `https://upload.giphy.com/v1/gifs?api_key=${apiKey}`;

export const RANDOM_URL = (apiKey) =>
    `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;