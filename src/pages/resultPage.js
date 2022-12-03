
import {USER_INTERFACE_ID, RESTART_QUIZ_BUTTON_ID} from '../constants.js'
import { createResultElement } from '../views/resultView.js'
import { initQuestionPage } from './questionPage.js'

export const initResultPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const resultElement = createResultElement();
  userInterface.appendChild(resultElement);

  document
    .getElementById(RESTART_QUIZ_BUTTON_ID)
    .addEventListener('click', reStartQuiz);

};

const reStartQuiz = () => {
    initQuestionPage();
  };
