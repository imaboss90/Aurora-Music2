const clientId = "YOUR_CLIENT_ID";
const redirectUri = "YOUR_REDIRECT_URI";
const accessToken = "YOUR_ACCESS_TOKEN";

function replaceImage(imageId, albumId) {
  fetch(
    `https://api.spotify.com/v1/albums/${albumId}/images`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  )
    .then(response => response.json())
    .then(data => {
      const images = data.images;
      if (images.length > 0) {
        const image = images[0];
        const imageUrl = image.url;
        document.getElementById(imageId).src = imageUrl;
      }
    });
}

replaceImage("image-1", "ALBUM_ID_1");

/*// JavaScript CODE
const clientId = "4f7e36c958c44ec78d8c82b1abc878be";
const redirectUri = "YOUR_REDIRECT_URI";
const accessToken = "YOUR_ACCESS_TOKEN";

function searchArtist() {
  const searchBar = document.getElementById("search-bar");
  const artistName = searchBar.value;

  fetch(
    `https://api.spotify.com/v1/search?q=${artistName}&type=artist`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  )
    .then(response => response.json())
    .then(data => {
      const artists = data.artists;
      if (artists.length > 0) {
        const artist = artists.items[0];
        const artistId = artist.id;
        const artistImage = artist.images[0];
        const artistImageUrl = artistImage.url;
        const image = document.getElementById("image");
        image.src = artistImageUrl;
      }
    });
}
 */


