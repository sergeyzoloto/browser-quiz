import { QUESTIONS_BUTTON_ID } from '../constants.js';

/**
 * Returns a question menu
 * @returns {Element}
 */
export const createQuestionButton = (index, maxQuestions) => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <button id="${QUESTIONS_BUTTON_ID}">
    Question ${index + 1}/${maxQuestions}
    </button>
    `;
  return element;
};
