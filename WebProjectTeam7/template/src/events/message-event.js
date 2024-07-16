/* eslint-disable no-undef */

import { CONTAINER_SELECTOR_MESSAGE } from '../common/constants.js';
import { q } from './helpers.js';

/**
 * Displays a message with a GIF and an OK button.
 * This function sets the inner HTML of a container element to show a message, a GIF image,
 * and a button to close the message. The message container is then displayed.
 * @async
 * @param {string} message - The message to display.
 * @param {string} gifUrl - The URL of the GIF to display.
 */
export const showMessage = async (message, gifUrl) => {
    const messageContainer =  q(CONTAINER_SELECTOR_MESSAGE);
    messageContainer.innerHTML = `
      <p>${message}</p>
      <img src="${gifUrl}" alt="Status">
      <button id="close-button">OK</button>
    `;
    messageContainer.style.display = 'block';

    document.getElementById('close-button').addEventListener('click', () => {
        messageContainer.style.display = 'none';
    });
};