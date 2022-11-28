/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  const button = document.createElement('button');
  element.appendChild(button);
  button.className = String.raw`${key} ans-btn`;
  button.innerHTML = String.raw`
    ${key}: ${answerText};
  `;
  return element;
};
