const InsertionPosition = {
  AFTERBEGIN: `afterbegin`,
  AFTEREND: `afterend`,
  BEFOREEND: `beforeend`
};

const render = (container, component, position) => {
  if (container instanceof AbstractComponent) {
    container = container.getElement();
  }
  switch (position) {
    case InsertionPosition.AFTERBEGIN:
      container.prepend(component.getElement());
      break;
    case InsertionPosition.AFTEREND:
      container.after(component.getElement());
      break;
    case InsertionPosition.BEFOREEND:
      container.append(component.getElement());
      break;
  }
};
