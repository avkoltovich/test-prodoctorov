class UsersItem extends AbstractComponent {
  constructor(user) {
    super();

    this._user = user;
    this._renderHandler = null;
  }

  getTemplate() {
    return this._createUsersItemTemplate(this._user);
  }

  setRenderHandler(handler) {
    this._renderHandler = handler;
    this.getElement().querySelector(`.user__name`)
      .addEventListener(`click`, this._renderHandler);
  }

  setCollapseHandler(handler) {
    this.getElement().querySelector(`.user__name`)
      .addEventListener(`click`, handler);
  }

  removeRenderHandler() {
    this.getElement().querySelector(`.user__name`)
      .removeEventListener(`click`, this._renderHandler);
  }

  _createUsersItemTemplate(user) {
    const {name} = user;
    return (
      `<li class="users__item user">
        <h2 class="user__name">${name}</h2>
      </li>`
    );
  }
}
