import { START_OVER_BUTTON_ID } from '../constants.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createResultElement = (correctAnswers = 0, maxQuestions = 0) => {
  const element = document.createElement('div');

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
    <h1>Quiz Result</h1>
    <p>correct:${correctAnswers}/total:${maxQuestions}</p>
    <div id="result_id">
    </div>
    <div class = "button-group" > 
      <button id="${START_OVER_BUTTON_ID}">
        Start over
      </button>
      
    </div>
  `;

  element.classList.add('question-area');

  return element;
};
