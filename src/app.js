import { initWelcomePage } from './pages/welcomePage.js';
import { QUIZ_TITLE } from './constants.js';

const loadApp = () => {
  /* Change the title of the page */
  const title = document.querySelector('title');
  title.innerHTML = `${QUIZ_TITLE}`;

  initWelcomePage();
};

window.addEventListener('load', loadApp);
