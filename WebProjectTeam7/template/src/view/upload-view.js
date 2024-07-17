/**
 * Generates the HTML for displaying the upload form.
 * @returns {string} - HTML string for displaying the upload form.
 */
export const toUploadView = () => `
<div class="upload">
  <h2>Upload a GIF</h2>
  <form class="upload-form" id="upload-form">
    <div class="preview" style="display: none;">
      <img id="gif-preview" src="" alt="GIF Preview">
      <div class="details">
        <input type="text" id="gif-title" placeholder="Enter GIF name">
        <input type="text" id="gif-tags" placeholder="Enter GIF tags (comma separated)">
      </div>
    </div>
    <input class="gif-input" type="file" id="gif-file" accept="image/gif">
    <button class="upload-btn" type="submit">Upload GIF</button>
  </form>
</div>
`;
