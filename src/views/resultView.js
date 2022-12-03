import { START_OVER_BUTTON_ID } from '../constants.js';
// import {newScore} from '../pages/questionPage.js'

/**
 * Create the Result screen
 * @returns {Element}
 */
export const createResultElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <h1>Your score is 0 </h1>
    <button id="${START_OVER_BUTTON_ID}">Restart Quiz</button>
    
   
   
  `;
  return element;
};
