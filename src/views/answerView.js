/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const button = document.createElement('button');

  // Assign to every answer button classes for styling
  button.classList.add(`ans-btn`);
  button.classList.add(`${key}-opt`);

  button.innerHTML = String.raw`
    <div class="letter"><p>${key.toUpperCase()}</p></div><div class="answer">${answerText}</div>
    <div class="checkmarkV">&checkmark;</div>
    <div class="checkmarkX">&#215;</div>
  `;

  return button;
};
