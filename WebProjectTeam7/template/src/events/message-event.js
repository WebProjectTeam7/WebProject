/* eslint-disable no-undef */
export const showMessage = async (message, gifUrl) => {
    const messageContainer = document.getElementById('message-container');
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