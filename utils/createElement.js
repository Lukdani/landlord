export const createElement = (type, classes, id) => {
  const element = document.createElement(type);
  if (classes?.length > 0) {
    classes.forEach((className) => {
      element.classList.add(className);
    });
  }
  if (id) {
    element.setAttribute("id", id);
  }

  return element;
};
