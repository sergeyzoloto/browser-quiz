import { QUESTIONS_MENU_ID } from '../constants.js';

/**
 * Returns a question menu
 * @returns {Element}
 */
export const createQuestionMenu = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
  <div class='${QUESTIONS_MENU_ID}'>
  Question 1<br>
  Question 2<br>
  Question 3<br>
  Question 4<br>
  Question 5<br>
  Question 6<br>
  </div>`;
  return element;
};
