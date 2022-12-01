import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  NEX_PAGE_BUTTON,
  PREV_PAGE_BUTTON,
  SUBMIT_ANSWER_BUTTON_ID,
} from '../constants.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question) => {
  const element = document.createElement('div');

  // I use String.raw just to get fancy colors for the HTML in VS Code.
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

    <button id="${NEXT_QUESTION_BUTTON_ID}">
      Next question
    </button>

    <button id="${NEX_PAGE_BUTTON}">
    <i class="fa-solid fa-angle-right"></i>
  </button>


    <button id="${PREV_PAGE_BUTTON}">
    <i class="fa-solid fa-angle-left"></i>
  </button>
  `;

  return element;
};
