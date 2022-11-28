/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const button = document.createElement('button');
  button.className = `${key} ans-btn`;
  button.innerHTML = String.raw`
    ${key}: ${answerText};
  `;
  return button;
};
