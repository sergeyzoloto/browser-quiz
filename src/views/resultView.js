import { START_OVER_BUTTON_ID } from '../constants.js';
import { resultQuotes } from '../data.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createResultElement = (correctAnswers = 0, maxQuestions = 0) => {
  const element = document.createElement('div');

  const resultQuote = chooseQuote(correctAnswers);

  element.innerHTML = String.raw`
    <h1>Quiz Result</h1>
    <p id="result-quote"><span id="emp-text">Y</span>ou got <span id="result-point">${correctAnswers}/${maxQuestions}
    </span> answers correct.<br>${resultQuote}</p>
  `;

  const startOverButton = document.createElement('button');
  startOverButton.innerHTML = 'Try again';
  startOverButton.id = START_OVER_BUTTON_ID;
  element.appendChild(startOverButton);

  resultQuotes.reasonableScore;

  return element;
};

const chooseQuote = (correctAnswers) => {
  if (correctAnswers <= 4) {
    return resultQuotes.lowScore;
  } else if (correctAnswers >= 5 && correctAnswers <= 7) {
    return resultQuotes.reasonableScore;
  } else {
    return resultQuotes.fullScore;
  }
};
