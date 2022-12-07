import { USER_INTERFACE_ID, START_OVER_BUTTON_ID } from '../constants.js';
import { createResultElement } from '../views/resultView.js';
import { startOver } from './questionPage.js';

export const initResultPage = (points, max) => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const resultElement = createResultElement(points, max);
  userInterface.appendChild(resultElement);

  document
    .getElementById(START_OVER_BUTTON_ID)
    .addEventListener('click', startOver);
};
