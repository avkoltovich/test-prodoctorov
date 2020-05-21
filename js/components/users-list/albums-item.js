class AlbumsItem extends AbstractComponent {
  constructor(album) {
    super();

    this._album = album;
    this._renderHandler = null;
  }

  getTemplate() {
    return this._createAlbumsItemTemplate(this._album);
  }

  setRenderHandler(handler) {
    this._renderHandler = handler;
    this.getElement().querySelector(`.user__album-title`)
      .addEventListener(`click`, this._renderHandler);
  }

  setCollapseHandler(handler) {
    this.getElement().querySelector(`.user__album-title`)
      .addEventListener(`click`, handler);
  }

  removeRenderHandler() {
    this.getElement().querySelector(`.user__album-title`)
      .removeEventListener(`click`, this._renderHandler);
  }

  _createAlbumsItemTemplate(album) {
    const {title} = album;

    return (
      `<li class="user__albums-item">
        <h3 class="user__album-title">${title}</h3>
      </li>`
    );
  }
}
