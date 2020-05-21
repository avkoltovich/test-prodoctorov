class BoardPresenter {
  constructor(container, model) {
    this._container = container;
    this._model = model;
  }

  render() {
    const menuComponent = new Menu();

    menuComponent.setCatalogHandler(() => {
      const usersListPresenter = new UsersListPresenter(this._container, this._model);
      usersListPresenter.render();
    });

    render(mainContainer, menuComponent, InsertionPosition.AFTERBEGIN);
  }
}
