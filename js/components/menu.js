class Menu extends AbstractComponent {
  getTemplate() {
    return this._createMenuTemplate();
  }

  setCatalogHandler(handler) {
    this.getElement().querySelector(`.menu__btn--catalog`)
      .addEventListener(`click`, handler);
  }

  setFavoriteHandler(handler) {
    this.getElement().querySelector(`.menu__btn--favorite`)
      .addEventListener(`click`, handler);
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
