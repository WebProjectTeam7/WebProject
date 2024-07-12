import {
    API_KEY_1, API_KEY_2, API_KEY_3, LIMIT, GET_ID_URL,
    TRENDING_URL, SEARCH_URL, UPLOAD_URL, RANDOM_URL
} from '../common/giphy-constants.js';


export class GifFetcher {

    #API_KEYS = [];

    #position = 0;

    #apiKey;

    constructor() {
        this.#API_KEYS = [API_KEY_1, API_KEY_2, API_KEY_3];
        this.#apiKey = API_KEY_1;
    }

    #switchKey() {
        this.#position = this.#position >= this.#API_KEYS.length ? 0 : this.#position + 1;
        
        this.#apiKey = this.#API_KEYS[this.#position];
    }

    async #loadRequest(request, args = [], header = null) {
        let tries = this.#API_KEYS.length;
        let response;
        while (tries > 0) {
            try {
                response = await fetch(request(this.#apiKey, ...args), header);
                if (response.status === 429) {
                    tries--;
                    this.#switchKey();
                } else {
                    break;
                }
            } catch (e) {
                throw new Error('Network error: ', e.message);
            }
        }
        if (!response.ok) {
            throw new Error(`Network error: `, response.statusText); //TODO import default gif if response not ok

        }
        return response;
    }

    byId(gifId) {
        return this.#loadRequest(GET_ID_URL, [gifId]);
    }

    trendingGifs(limit = LIMIT) {
        return this.#loadRequest(TRENDING_URL, [limit]);
    }

    searchGifs(limit = LIMIT) {
        return this.#loadRequest(SEARCH_URL, [limit]
        );
    }

    uploadGif(header) {
        return this.#loadRequest(UPLOAD_URL, [], header);
    }

    randomGif() {
        return this.#loadRequest(RANDOM_URL);
    }
}
