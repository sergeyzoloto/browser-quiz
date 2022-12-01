/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const button = document.createElement('button');
  button.classList.add(`ans-btn`);
  button.innerHTML = String.raw`
    <div class="letter"><p>${key.toUpperCase()}</p></div><div class="answer">${answerText}</div>
    <svg class="checkmark"><path d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"></path></svg>
  `;

  return button;
};
