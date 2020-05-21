class AlbumsPresenter {
  constructor(container, model, id) {
    this._container = container;
    this._model = model;
    this._albums = null;
    this._id = id;

    this._onAlbumsLoadSuccessHandlers = this._onAlbumsLoadSuccessHandlers.bind(this);

    this._model.setAlbumsLoadSuccessHandlers(this._onAlbumsLoadSuccessHandlers);
  }

  render() {
    this._model.setAlbums(this._id);
  }

  _onAlbumsLoadSuccessHandlers() {
    const albums = this._model.getAlbums();

    const albumsListComponent = new AlbumsList();

    for (const album of albums) {
      const albumsItemComponent = new AlbumsItem(album);

      const albumsItemComponentHandler = (evt) => {
        evt.target.classList.toggle(`user__album-title--collapsed`);
        const imagesPresenter = new ImagesPresenter(albumsItemComponent, this._model, album.id);
        imagesPresenter.render();

        albumsItemComponent.removeRenderHandler();

        albumsItemComponent.setCollapseHandler((evt) => {
          evt.target.classList.toggle(`user__album-title--collapsed`);
        });
      }

      albumsItemComponent.setRenderHandler(albumsItemComponentHandler);

      render(albumsListComponent, albumsItemComponent, InsertionPosition.BEFOREEND);
    }

    render(this._container, albumsListComponent, InsertionPosition.BEFOREEND);
  }
}
