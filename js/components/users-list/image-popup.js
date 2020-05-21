class ImagePopup extends AbstractComponent {
  constructor(image) {
    super();

    this._image = image;

    this._subscribeOnEvents();
  }

  getTemplate() {
    return this._createImagePopupTemplate(this._image);
  }

  _createImagePopupTemplate(image) {
    const {url, title} = image;

    return (
      `<section class="image-popup">
        <h4 class="image-popup__heading"></h4>
        <p class="image-popup__img-wrap">
          <img src="${url}" alt="${title}" class="image-popup__img" width="600" height="600">
        </p>
      </section>`
    );
  }

  _subscribeOnEvents() {
    const element = this.getElement()

    element.addEventListener(`click`, () => {
      element.remove();
    });
  }
}
