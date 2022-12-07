import {
  ANSWERS_LIST_ID,
  START_OVER_BUTTON_ID,
  NEX_PAGE_BUTTON_ID,
  PREV_PAGE_BUTTON_ID,
  SUBMIT_ANSWER_BUTTON_ID,
} from '../constants.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (
  question,
  correctAnswers,
  maxQuestions
) => {
  const element = document.createElement('div');

  element.innerHTML = String.raw`

  <p>
      Question : 1/10
    </p>

  


    <h1>${question}</h1>

    <div id="${ANSWERS_LIST_ID}">
    </div>

    <button id="${SUBMIT_ANSWER_BUTTON_ID}">
    OK
    </button>
    
    <div class = "button-group" > 
    <button id="${START_OVER_BUTTON_ID}">
      Start over
    </button>
      <div class = 'counter'>${correctAnswers}/${maxQuestions} Correct</div>
      <button id="${PREV_PAGE_BUTTON_ID}">
      <i class="fa-solid fa-angle-left"></i>
      </button>

      <button id="${NEX_PAGE_BUTTON_ID}">
      <i class="fa-solid fa-angle-right"></i>
      </button>
    </div>
  `;

  // Assign class name to append the warning message
  element.classList.add('question-area');

  return element;
};
