export const createContainer = (
  containerTag = 'div',
  className = '',
  app: HTMLElement,
  initializeComponents?: (_container: HTMLElement) => void,
) => {
  const container = document.createElement(containerTag);

  if (className) {
    container.classList.add(className);
  }

  if (initializeComponents) {
    initializeComponents(container);
  }

  app.append(container);

  return container;
};
