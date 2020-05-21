class Model {
  constructor(api) {
    this._api = api;
    this._users = [];
    this._albums = [];
    this._images = [];

    this._onUsersLoadSuccessHandlers = [];
    this._onAlbumsLoadSuccessHandlers = [];
    this._onImagesLoadSuccessHandlers = [];
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

  setUsers() {
    this._api.getUsers().then((users) => {
      const index = users.findIndex((item) => !item.hasOwnProperty(`name`));
      this._users = Array.from(users.slice(0, index));
      this._callHandlers(this._onUsersLoadSuccessHandlers);
    });
  }

  setAlbums(id) {
    this._api.getAlbums(id).then((albums) => {
      this._albums = Array.from(albums);
      this._callHandlers(this._onAlbumsLoadSuccessHandlers);
    });
  }

  setImages(id) {
    this._api.getImages(id).then((images) => {
      this._images = Array.from(images);
      this._callHandlers(this._onImagesLoadSuccessHandlers);
    });
  }

  setUsersLoadSuccessHandlers(handler) {
    this._onUsersLoadSuccessHandlers.push(handler);
  }

  setAlbumsLoadSuccessHandlers(handler) {
    this._onAlbumsLoadSuccessHandlers.push(handler);
  }

  setImagesLoadSuccessHandlers(handler) {
    this._onImagesLoadSuccessHandlers.push(handler);
  }

  _callHandlers(handlers) {
    handlers.forEach((handler) => handler());
  }
}
