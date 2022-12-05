import { QUESTIONS_MENU_ID } from '../constants.js';
import { createQuestionButton } from './questionButtonView.js';

/**
 * Returns a question menu
 * @returns {Element}
 */
export const createQuestionMenu = (questionsArray) => {
  const element = document.createElement('div');
  element.classList.add(`${QUESTIONS_MENU_ID}`);

  questionsArray
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

  // TODO create question element and map it colored depending on answer status

  // TODO create link to the question

  return element;
};

const createQuestionShortcut = (flag = 0, index) => {
  const shortcut = document.createElement('button');
  shortcut.innerHTML = String.raw`${index + 1}`;
  if (flag === 1) {
    shortcut.classList.add('quest-right');
  } else {
    if (flag === -1) {
      shortcut.classList.add('quest-wrong');
    }
  }

  shortcut.classList.add('quest-link');
  shortcut.style.display = 'inherit';
  return shortcut;
};
