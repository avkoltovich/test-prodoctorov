class AlbumsItem extends AbstractComponent {
  getTemplate() {
    return createAlbumsItemTemplate();
  }

  _createAlbumsItemTemplate(name) {
    return (
      `<li class="user__albums-item">
        <h3 class="user__album-title">${name}</h3>
      </li>`
    );
  }
}
