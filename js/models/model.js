class Model {
  constructor() {
    this._users = [];
    this._albums = [];
    this._images = [];

    this._dataChangeHandlers = [];
    this._sortHandlers = [];
    this._filterHandlers = [];
  }

  getUsers() {
    return this._users;
  }

  getAlbums() {
    return this._albums;
  }

  getImages() {
    return this._images;
  }

  setUsers(users) {
    this._users = Array.from(users);
  }

  setAlbums(albums) {
    this._albums = Array.from(albums);
  }

  setImages(images) {
    this._images = Array.from(images);
  }
}
