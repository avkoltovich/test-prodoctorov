class AlbumsPresenter {
  constructor(container, model) {
    this._container = container;
    this._model = model;
    this._model.setAlbums()
    this._albums = this._model.getAlbums();
  }

  render() {
    const albumsListComponent = new AlbumsList();

    for (const album of this._albums) {
      const albumsItemComponent = new AlbumsItem(album);
      render(albumsListComponent, albumsItemComponent, InsertionPosition.BEFOREEND);
    }

    render(this._container, albumsListComponent, InsertionPosition.BEFOREEND);
  }
}
