class Menu extends AbstractComponent {
  constructor() {
    super();

    this._catalogHandler = null;
    this._favoriteHandler = null;
  }

  getTemplate() {
    return this._createMenuTemplate();
  }

  setCatalogHandler(handler) {
    this._catalogHandler = handler;
    this.getElement().querySelector(`.menu__btn--catalog`)
      .addEventListener(`click`, this._catalogHandler);
  }

  setFavoriteHandler(handler) {
    this._favoriteHandler = handler
    this.getElement().querySelector(`.menu__btn--favorite`)
      .addEventListener(`click`, this._favoriteHandler);
  }

  removeCatalogHandler() {
    this.getElement().querySelector(`.menu__btn--catalog`)
      .removeEventListener(`click`, this._catalogHandler);
  }

  removeFavoriteHandler() {
    this.getElement().querySelector(`.menu__btn--favorite`)
      .removeEventListener(`click`, this._favoriteHandler);
  }

  _createMenuTemplate() {
    return (
      `<ul class="site-main__list menu">
        <li class="menu__item">
          <button type="button" class="menu__btn menu__btn--catalog">КАТАЛОГ</button>
        </li>
        <li class="menu__item">
          <button type="button" class="menu__btn menu__btn--favorite">ИЗБРАННОЕ</button>
        </li>
      </ul>`
    );
  }
}
