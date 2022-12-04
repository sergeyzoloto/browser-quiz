import { USER_INTERFACE_ID, TRY_AGAIN_BUTTON } from '../constants.js';
import { createResultElement } from '../views/resultView.js';
import { startOver } from './questionPage.js';

export const initResultPage = (points, max) => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const resultElement = createResultElement(points, max);
  userInterface.appendChild(resultElement);

  document
    .getElementById(TRY_AGAIN_BUTTON)
    .addEventListener('click', startOver);
};
