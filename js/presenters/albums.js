class AlbumsPresenter {
  constructor(container, model) {
    this._container = container;
    this._model = model;
    this._model.setAlbums();
    this._albums = this._model.getAlbums();
  }

  render() {
    const albumsListComponent = new AlbumsList();

    for (const album of this._albums) {
      const albumsItemComponent = new AlbumsItem(album);

      const albumsItemComponentHandler = (evt) => {
        evt.target.classList.toggle(`user__album-title--collapsed`);
        const imagesPresenter = new ImagesPresenter(albumsItemComponent, this._model);
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
