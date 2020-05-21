class ImagesPresenter {
  constructor(container, model) {
    this._container = container;
    this._model = model;
    this._model.setImages()
    this._images = this._model.getImages();
  }

  render() {
    const imagesListComponent = new ImagesList();

    for (const image of this._images) {
      const imagesItemComponent = new ImagesItem(image);

      render(imagesListComponent, imagesItemComponent, InsertionPosition.BEFOREEND);
    }

    render(this._container, imagesListComponent, InsertionPosition.BEFOREEND);
  }
}
