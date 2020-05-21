const mainContainer = document.querySelector(`.site-main`);
const model = new Model();
model.setUsers(users);

const boardPresenter = new BoardPresenter(mainContainer, model);
boardPresenter.render()
