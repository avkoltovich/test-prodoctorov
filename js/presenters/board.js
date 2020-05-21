class BoardPresenter {
  constructor(container, model) {
    this._container = container;
    this._model = model;
  }

  render() {
    const menuComponent = new Menu();

    menuComponent.setCatalogHandler(() => {
      const usersPresenter = new UsersPresenter(this._container, this._model);
      usersPresenter.render();
    });

    render(mainContainer, menuComponent, InsertionPosition.AFTERBEGIN);
  }
}
