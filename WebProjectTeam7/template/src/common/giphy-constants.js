export const API_KEY = 'OTf7VIpal5Iv3WCOkWZluWCJ1irOjWfI';

export const API_KEY_2 = 'QP47tkC3QL0v19NaNwo3Ebt678w7fsr5'; // for temporary testing

const LIMIT = 20;

export const TRENDING_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${LIMIT}`;

export const SEARCH_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=${LIMIT}&q=`;

export const UPLOAD_URL = `https://upload.giphy.com/v1/gifs?api_key=${API_KEY_2}`;