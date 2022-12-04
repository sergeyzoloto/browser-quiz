import { TRY_AGAIN_BUTTON} from '../constants.js';
import { resultQuotes } from '../data.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createResultElement = (correctAnswers = 0, maxQuestions = 0) => {
  const element = document.createElement('div');

  // I use String.raw just to get fancy colors for the HTML in VS Code.

if (correctAnswers < 4 ) {
  element.innerHTML = String.raw`
    <h1>Quiz Result</h1>
    <p id="result-quote"><span id="emp-text">Y</span>ou got <span id="result-point">${correctAnswers}/${maxQuestions}
    </span> answers correct.${resultQuotes.lowScore}</p>


    <button id="${TRY_AGAIN_BUTTON}">
      Try Again
    </button>
      
    
  `;
}else if(correctAnswers >= 5 && correctAnswers<= 7){
  element.innerHTML = String.raw`
    <h1>Quiz Result</h1>
    <p id="result-quote"><span id="emp-text">Y</span>ou got <span id="result-point">${correctAnswers}/${maxQuestions}
    </span> answers correct.${resultQuotes.reasonableScore}</p>


    <button id="${TRY_AGAIN_BUTTON}">
      Try Again
    </button>
      
    
  `;
}else{
  element.innerHTML = String.raw`
    <h1>Quiz Result</h1>
    <p id="result-quote"><span id="emp-text">Y</span>ou got <span id="result-point">${correctAnswers}/${maxQuestions}
    </span> answers correct.${resultQuotes.fullScore}</p>


    <button id="${TRY_AGAIN_BUTTON}">
      Try Again
    </button>
      
    
  `;
}
  element.classList.add('question-area');

  return element;
};
