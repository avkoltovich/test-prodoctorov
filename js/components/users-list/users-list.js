const createUsersListTemplate = () => {
  return (
    `<ul class="site-main__users-list users"></ul>`
  );
};

class UsersList extends AbstractComponent {
  getTemplate() {
    return createUsersListTemplate();
  }
}
