class ImagesPresenter {
  constructor(container, model, id) {
    this._container = container;
    this._model = model;
    this._id = id;

    this._onImagesLoadSuccessHandlers = this._onImagesLoadSuccessHandlers.bind(this);

    this._model.setImagesLoadSuccessHandlers(this._onImagesLoadSuccessHandlers);
  }

  render() {
    this._model.setImages(this._id);
  }

  _onImagesLoadSuccessHandlers() {
    const images = this._model.getImages();
    const imagesListComponent = new ImagesList();

    for (const image of images) {
      const imagesItemComponent = new ImagesItem(image);

      imagesItemComponent.setImagePopupHandler(() => {
        const imagePopupComponent = new ImagePopup(image);
        render(imagesItemComponent, imagePopupComponent, InsertionPosition.BEFOREEND);
      });

      render(imagesListComponent, imagesItemComponent, InsertionPosition.BEFOREEND);
    }

    render(this._container, imagesListComponent, InsertionPosition.BEFOREEND);
  }
}
