import {
    LIMIT, GET_ID_URL,
    GET_IDS_URL, TRENDING_URL, SEARCH_URL, UPLOAD_URL, RANDOM_URL,
    OFFSET
} from '../common/giphy-constants.js';

export class GifFetcher {

    #API_KEYS = [
        'OTf7VIpal5Iv3WCOkWZluWCJ1irOjWfI',
        'QP47tkC3QL0v19NaNwo3Ebt678w7fsr5',
        'FgmzyU2tFbqdZELwi0q7RRN6Rur6OqAf'
    ];

    #position = 0;

    /**
     * Retrieves the current API key.
     * @private
     * @returns {string} - The current API key.
     */
    #getApiKey() {
        return this.#API_KEYS[this.#position];
    }

    /**
     * Switches to the next API key.
     * @private
     */
    #switchKey() {
        this.#position = (this.#position + 1) % this.#API_KEYS.length;
    }

    /**
     * Makes a network request using the provided request function and arguments.
     * Retries with a different API key if a 429 status is received.
     * @private
     * @async
     * @param {Function} request - The request function to call.
     * @param {Array} [args] - The arguments to pass to the request function.
     * @param {object} [header] - The headers to include in the request.
     * @returns {Promise<Response>} - The network response.
     * @throws {Error} - If the network request fails.
     */
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

    /**
     * Fetches a GIF by its ID.
     * @param {string} gifId - The ID of the GIF to fetch.
     * @returns {Promise<Response>} - The network response.
     */
    byId(gifId) {
        return this.#loadRequest(GET_ID_URL, [gifId]);
    }

    /**
     * Fetches GIFs by their IDs.
     * @param {Array<string>} gidIds - The IDs of the GIFs to fetch.
     * @returns {Promise<Response>} - The network response.
     */
    byIds(gidIds) {
        return this.#loadRequest(GET_IDS_URL, [gidIds]);
    }

    /**
     * Fetches trending GIFs.
     * @param {number} [offset] - The offset for pagination.
     * @param {number} [limit] - The limit for the number of GIFs to fetch.
     * @returns {Promise<Response>} - The network response.
     */
    trendingGifs(offset = OFFSET[0], limit = LIMIT) {
        return this.#loadRequest(TRENDING_URL, [limit, offset]);
    }

    /**
     * Searches for GIFs based on a query.
     * @param {string} query - The search query.
     * @param {number} [offset] - The offset for pagination.
     * @param {number} [limit] - The limit for the number of GIFs to fetch.
     * @returns {Promise<Response>} - The network response.
     */
    searchGifs(query, offset = OFFSET[0], limit = LIMIT,) {
        return this.#loadRequest(SEARCH_URL, [query, limit, offset]);
    }

    /**
     * Uploads a GIF.
     * @param {object} header - The headers to include in the request.
     * @returns {Promise<Response>} - The network response.
     */
    uploadGif(header) {
        return this.#loadRequest(UPLOAD_URL, [], header);
    }

    /**
     * Fetches a random GIF.
     * @returns {Promise<Response>} - The network response.
     */
    randomGif() {
        return this.#loadRequest(RANDOM_URL, []);
    }
}
