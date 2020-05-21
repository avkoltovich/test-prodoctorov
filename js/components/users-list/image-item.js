class ImagesItem extends AbstractComponent {
  getTemplate() {
    return createImagesItemTemplate();
  }

  _createImagesItemTemplate(images) {
    const {thumbnailUrl, title} = images;

    return (
      `<li class="user__album-img-item">
        <label class="user__album-favorite-btn">
          <span class="visually-hidden">Добавить в избранное</span>
          <input id="user__album-favorite-1" class="user__album-favorite-checkbox  visually-hidden" type="checkbox" name="user__album-favorite" checked>
          <svg class="user__album-favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
          </svg>
        </label>
        <img src="${thumbnailUrl}" alt="${title}" class="user__album-img" width="150" height="150">
      </li>`
    );
  }
}
