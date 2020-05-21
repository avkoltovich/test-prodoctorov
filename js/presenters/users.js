class UsersPresenter {
  constructor(container, model) {
    this._container = container;
    this._model = model;
    this._users = this._model.getUsers();
  }

  render() {
    const usersListComponent = new UsersList();

    for (const user of this._users) {
      const usersItemComponent = new UsersItem(user);

      usersItemComponent.setCollapseHandler(() => {
        const albumsPresenter = new AlbumsPresenter(usersItemComponent, this._model);
        albumsPresenter.render();
      });

      render(usersListComponent, usersItemComponent, InsertionPosition.BEFOREEND);
    }

    render(this._container, usersListComponent, InsertionPosition.BEFOREEND);
  }
}
