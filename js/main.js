const mainContainer = document.querySelector(`.site-main`);
const api = new API();
const model = new Model(api);

const boardPresenter = new BoardPresenter(mainContainer, model);
boardPresenter.render();
