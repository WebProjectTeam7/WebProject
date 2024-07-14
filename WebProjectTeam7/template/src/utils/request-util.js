import {
    API_KEY_1, API_KEY_2, API_KEY_3, LIMIT, GET_ID_URL,
    GET_IDS_URL, TRENDING_URL, SEARCH_URL, UPLOAD_URL, RANDOM_URL
} from '../common/giphy-constants.js';

export class GifFetcher {

    #API_KEYS = [];

    #position = 0;

    constructor() {
        this.#API_KEYS = [API_KEY_1, API_KEY_2, API_KEY_3];
    }

    #getApiKey() {
        return this.#API_KEYS[this.#position];
    }

    #switchKey() {
        this.#position = (this.#position + 1) % this.#API_KEYS.length;
    }

    async #loadRequest(request, args = [], header = null) {
        let tries = this.#API_KEYS.length;
        let response;
        while (tries > 0) {
            try {
                response = await fetch(request(this.#getApiKey(), ...args), header);
                if (response.status === 429) {
                    tries--;
                    this.#switchKey();
                } else {
                    break;
                }
            } catch (e) {
                throw new Error(`Network error: ${e.message}`);
            }
        }

        if (!response.ok) {
            throw new Error(`Network error: ${response.statusText}`);
        }
        return response;
    }

    byId(gifId) {
        return this.#loadRequest(GET_ID_URL, [gifId]);
    }

    byIds(gidIds) {
        return this.#loadRequest(GET_IDS_URL, [gidIds]);
    }

    trendingGifs(offset = 0, limit = LIMIT) {
        return this.#loadRequest(TRENDING_URL, [limit, offset]);
    }

    searchGifs(query, offset = 0, limit = LIMIT,) {
        return this.#loadRequest(SEARCH_URL, [query, limit, offset]);
    }

    uploadGif(header) {
        return this.#loadRequest(UPLOAD_URL, [], header);
    }

    randomGif() {
        return this.#loadRequest(RANDOM_URL, []);
    }
}
