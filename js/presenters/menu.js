class MenuPresenter {
  constructor(container) {
    this._container = container;
  }

  render() {
    const menuComponent = new Menu();

    menuComponent.setCatalogHandler()

    render(mainContainer, menuComponent);
  }
}
