export const toUploadView = () => `
<div class="upload">
  <h2>Upload a GIF</h2>
  <form class="upload-form">
      <input type="file" id="gif-file" accept="image/gif">
      <!-- <input type="text" id="gif-url" placeholder="Or enter a GIF URL"> -->
      <button class="upload-btn" type="submit">Upload GIF</button>
  </form>
</div>
`;
