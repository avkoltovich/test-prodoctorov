class ImagesPresenter {
  constructor(container, model, id) {
    this._container = container;
    this._model = model;
    this._id = id;
    this._imagesListComponent = null;

    this._onImagesLoadSuccessHandlers = this._onImagesLoadSuccessHandlers.bind(this);

    this._model.setImagesLoadSuccessHandlers(this._onImagesLoadSuccessHandlers);
  }

  render() {
    this._model.setImages(this._id);
  }

  renderFormLocalStorage() {
    const images = this._model.getFromLocalStorage();
    if (images) {
      this._imagesListComponent = this._createImagesListComponent(images, Mode.FAVORITE);

      this._imagesListComponent.getElement().classList.add(`user__album-img-list--show`);

      render(this._container, this._imagesListComponent, InsertionPosition.BEFOREEND);
    }

  }

  remove() {
    if (this._imagesListComponent) {
      this._imagesListComponent.getElement().remove();
    }
  }

  _createImagesListComponent(images, mode = Mode.DEFAULT) {
    const imagesListComponent = new ImagesList();

    for (const image of images) {
      const imagesItemComponent = new ImagesItem(image, mode);

      imagesItemComponent.setImagePopupHandler(() => {
        const imagePopupComponent = new ImagePopup(image);
        render(imagesItemComponent, imagePopupComponent, InsertionPosition.BEFOREEND);
      });

      imagesItemComponent.setFavoriteButtonHandler(() => {
        this._model.setToLocalStorage(image);
      });

      render(imagesListComponent, imagesItemComponent, InsertionPosition.BEFOREEND);
    }

    return imagesListComponent;
  }

  _onImagesLoadSuccessHandlers() {
    const images = this._model.getImages();
    this._imagesListComponent = this._createImagesListComponent(images);

    render(this._container, this._imagesListComponent, InsertionPosition.BEFOREEND);
  }
}
