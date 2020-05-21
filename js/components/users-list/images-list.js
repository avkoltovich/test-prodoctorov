class ImagesList extends AbstractComponent {
  getTemplate() {
    return this._createImagesListTemplate();
  }

  _createImagesListTemplate() {
    return (
      `<ul class="user__album-img-list user__album-img-list--show"></ul>`
    );
  }
}
