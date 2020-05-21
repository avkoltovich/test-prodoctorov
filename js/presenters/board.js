class BoardPresenter {
  constructor(container, model) {
    this._container = container;
    this._model = model;

    this._onUsersLoadSuccessHandlers = this._onUsersLoadSuccessHandlers.bind(this);

    this._model.setUsersLoadSuccessHandlers(this._onUsersLoadSuccessHandlers);
  }

  render() {
    this._model.setUsers();
  }

  _onUsersLoadSuccessHandlers() {
    const menuComponent = new Menu();

    menuComponent.setCatalogHandler(() => {
      const usersPresenter = new UsersPresenter(this._container, this._model);
      usersPresenter.render();
    });

    render(mainContainer, menuComponent, InsertionPosition.AFTERBEGIN);
  }
}
