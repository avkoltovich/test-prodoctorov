class UsersPresenter {
  constructor(container, model) {
    this._container = container;
    this._model = model;
    this._users = this._model.getUsers();
    this._usersListComponent = null;
  }

  render() {
    this._usersListComponent = new UsersList();

    for (const user of this._users) {
      const usersItemComponent = new UsersItem(user);

      const usersItemComponentRenderHandler = (evt) => {
        evt.target.classList.toggle(`user__name--collapsed`);
        const albumsPresenter = new AlbumsPresenter(usersItemComponent, this._model, user.id);
        albumsPresenter.render();

        usersItemComponent.removeRenderHandler();

        usersItemComponent.setCollapseHandler((evt) => {
          evt.target.classList.toggle(`user__name--collapsed`);
        });
      }

      usersItemComponent.setRenderHandler(usersItemComponentRenderHandler);

      render(this._usersListComponent, usersItemComponent, InsertionPosition.BEFOREEND);
    }

    render(this._container, this._usersListComponent, InsertionPosition.BEFOREEND);
  }

  remove() {
    if (this._usersListComponent) {
      this._usersListComponent.getElement().remove();
    }
  }
}
