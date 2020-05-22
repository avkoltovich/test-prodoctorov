class BoardPresenter {
  constructor(container, model) {
    this._container = container;
    this._model = model;

    this._onUsersLoadSuccessHandlers = this._onUsersLoadSuccessHandlers.bind(this);
    this._onCatalogClick = this._onCatalogClick.bind(this);
    this._onFavoriteClick = this._onFavoriteClick.bind(this);
    this._menuComponent = null;
    this._usersPresenter = null;
    this._imagesPresenter = null;

    this._model.setUsersLoadSuccessHandlers(this._onUsersLoadSuccessHandlers);
  }

  render() {
    this._model.setUsers();
  }

  _onCatalogClick() {
    if (this._imagesPresenter) {
      this._imagesPresenter.remove();
      this._menuComponent.setFavoriteHandler(this._onFavoriteClick);
    }

    this._usersPresenter = new UsersPresenter(this._container, this._model);
    this._usersPresenter.render();
    this._menuComponent.removeCatalogHandler();
  }

  _onFavoriteClick() {
    if (this._usersPresenter) {
      this._usersPresenter.remove();
      this._menuComponent.setCatalogHandler(this._onCatalogClick);
    }

    this._imagesPresenter = new ImagesPresenter(this._container, this._model, Mode.FAVORITE);
    this._imagesPresenter.renderFormLocalStorage();
    this._menuComponent.removeFavoriteHandler();
  }

  _onUsersLoadSuccessHandlers() {
    this._menuComponent = new Menu();

    this._menuComponent.setCatalogHandler(this._onCatalogClick);

    this._menuComponent.setFavoriteHandler(this._onFavoriteClick);

    render(mainContainer, this._menuComponent, InsertionPosition.AFTERBEGIN);
  }
}
