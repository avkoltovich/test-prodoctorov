const render = (container, component) => {
  if (container instanceof AbstractComponent) {
    container = container.getElement();
  }
  container.after(component.getElement());
};
