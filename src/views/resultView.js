import { TRY_AGAIN_BUTTON} 
         from '../constants.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createResultElement = (correctAnswers = 0, maxQuestions = 0) => {
  const element = document.createElement('div');

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
    <h1>Quiz Result</h1>
    <p id="result-quote"><span id="emp-text">Y</span>ou got <span id="result-point">${correctAnswers}/${maxQuestions}
    </span> answers correct. On the plus side, that probably means you don't spend 
    too much time learning obscure facts just so you can be good at trivia quizzes ;)</p>
    <div id="result_id">
    </div>


    <button id="${TRY_AGAIN_BUTTON}">
      Try Again
    </button>
      
    
  `;

  element.classList.add('question-area');

  return element;
};


// <div class = "button-group" > 
// <button id="${START_OVER_BUTTON_ID}">
//   Start over
// </button>

// </div>