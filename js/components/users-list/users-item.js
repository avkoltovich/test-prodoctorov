class UsersItem extends AbstractComponent {
  constructor(user) {
    super();

    this._user = user;
  }

  getTemplate() {
    return this._createUsersItemTemplate(this._user);
  }

  setCollapseHandler(handler) {
    this.getElement().querySelector(`.user__name`)
      .addEventListener(`click`, handler);
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
