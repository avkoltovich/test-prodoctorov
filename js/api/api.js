const API = class {
  getUsers() {
    return fetch(`https://json.medrating.org/users/`)
      .then((response) => response.json());
  }

  getAlbums(id) {
    return fetch(`https://json.medrating.org/albums?userId=${id}`)
      .then((response) => response.json());
  }

  getImages(id) {
    return fetch(`https://json.medrating.org/photos?albumId=${id}`)
      .then((response) => response.json());
  }
};
