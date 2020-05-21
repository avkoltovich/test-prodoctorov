class AlbumsItem extends AbstractComponent {
  constructor(album) {
    super();

    this._album = album;
  }

  getTemplate() {
    return this._createAlbumsItemTemplate(this._album);
  }


  setCollapseHandler(handler) {
    this.getElement().querySelector(`.user__album-title`)
      .addEventListener(`click`, handler);
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
