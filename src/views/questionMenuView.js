import { QUESTIONS_MENU_ID } from '../constants.js';
import { initQuestionPage } from '../pages/questionPage.js';

/**
 * Returns a question menu
 * @returns {Element}
 */
export const createQuestionMenu = (questionArray) => {
  const element = document.createElement('div');
  element.classList.add(`${QUESTIONS_MENU_ID}`);

  questionArray
    .map(({ correct, selected, submitted }, index) => ({
      correct,
      selected,
      submitted,
      index,
    }))
    .forEach((question) => {
      if (question.submitted) {
        if (question.correct === question.selected) {
          element.appendChild(createQuestionShortcut(1, question.index));
        } else {
          element.appendChild(createQuestionShortcut(-1, question.index));
        }
      } else {
        element.appendChild(createQuestionShortcut(0, question.index));
      }
    });

  return element;
};

const createQuestionShortcut = (flag = 0, index) => {
  const shortcut = document.createElement('button');
  shortcut.innerHTML = String.raw`${index + 1}`;
  markQuestionItem(shortcut, flag);

  shortcut.classList.add('quest-link');
  shortcut.id = `${index}-quest`;
  shortcut.style.display = 'inherit';
  shortcut.addEventListener('click', selectQuestion(index));
  return shortcut;
};

const selectQuestion = (index) => () => {
  initQuestionPage(index);
};

export const markQuestionItem = (shortcut, flag) => {
  if (flag === 1) {
    shortcut.classList.add('quest-right');
  } else {
    if (flag === -1) {
      shortcut.classList.add('quest-wrong');
    }
  }
};
