class UsersItem extends AbstractComponent {
  getTemplate() {
    return createUsersItemTemplate();
  }

  _createUsersItemTemplate(name) {
    return (
      `<li class="users__item user">
        <h2 class="user__name">${name}</h2>
      </li>`
    );
  }
}
