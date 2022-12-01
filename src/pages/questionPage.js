import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  SUBMIT_ANSWER_BUTTON_ID,
  NEX_PAGE_BUTTON,
  PREV_PAGE_BUTTON,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answerElement.addEventListener(
      'click',
      selectAnswer(currentQuestion, answerElement, key)
    );
    answersListElement.appendChild(answerElement);
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);

  document
    .getElementById(SUBMIT_ANSWER_BUTTON_ID)
    .addEventListener('click', submitAnswer(currentQuestion));

  document.getElementById(NEX_PAGE_BUTTON).addEventListener('click', nextPage);

  document.getElementById(PREV_PAGE_BUTTON).addEventListener('click', prevPage);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};

const selectAnswer = (currentQuestion, answerElement, key) => () => {
  if (currentQuestion.submitted === false) {
    if (
      Object.keys(currentQuestion.answers).includes(currentQuestion.selected)
    ) {
      const prevAnswer = document.querySelector('.selected');
      prevAnswer.classList.remove('selected');
    }
    currentQuestion.selected = key;
    answerElement.classList.add('selected');
  } else {
    alert('You cannot change your answer!');
  }
};

const submitAnswer = (currentQuestion) => () => {
  if (
    Object.keys(currentQuestion.answers).includes(currentQuestion.selected) &&
    currentQuestion.submitted === false
  ) {
    currentQuestion.submitted = true;
    checkAnswer(currentQuestion);
  }
};

const checkAnswer = (currentQuestion) => {
  const selectedAnswer = document.querySelector('.selected');
  selectedAnswer.classList.remove('selected');
  if (currentQuestion.selected === currentQuestion.correct) {
    selectedAnswer.classList.add('right');
  } else {
    selectedAnswer.classList.add('wrong');
  }
};

const nextPage = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};

const prevPage = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex - 1;

  initQuestionPage();
};
