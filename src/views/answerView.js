/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const button = document.createElement('button');
  button.classList.add(`ans-btn`);
  button.innerHTML = String.raw`
    <div class="letter"><p>${key.toUpperCase()}</p></div><div class="answer">${answerText}</div>
  `;
  return button;
};
