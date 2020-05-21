class UsersList extends AbstractComponent {
  getTemplate() {
    return this._createUsersListTemplate();
  }

  _createUsersListTemplate() {
    return (
      `<ul class="site-main__users-list users"></ul>`
    );
  }
}
