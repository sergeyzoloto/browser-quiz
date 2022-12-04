import {
  ANSWERS_LIST_ID,
  START_OVER_BUTTON_ID,
  USER_INTERFACE_ID,
  SUBMIT_ANSWER_BUTTON_ID,
  NEX_PAGE_BUTTON,
  PREV_PAGE_BUTTON,
  TRY_AGAIN_BUTTON,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { initWelcomePage } from './welcomePage.js';
import { initResultPage } from './resultPage.js';
import { createResultElement } from '../views/resultView.js';

let countCorrect = 0;
let countFalse = 0;
let flagOkBtn = false;

// Data variable choose between new data set and stored in the local storage
let data =
  window.localStorage.getItem('quizData') !== null
    ? JSON.parse(window.localStorage.getItem('quizData'))
    : // In order to prevent deep and shallow coping the data quiz object
      // destruct the object into a string
      // and reassemble the object from this string
      JSON.parse(JSON.stringify(quizData));

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  // Correct answers counter before building question page
  const correctAnswersCount = countCorrectAnswers(data.questions);

  // In case of "+" overflow initiate result page
  if (data.currentQuestionIndex >= data.questions.length) {
    initResultPage(correctAnswersCount, data.questions.length);
    return; // and break a question page building
  }

  // In case of "-" overflow start building the last question page
  if (data.currentQuestionIndex < 0) {
    data.currentQuestionIndex = data.questions.length - 1;
  }

  // Building a question page
  const currentQuestion = data.questions[data.currentQuestionIndex];

  const questionElement = createQuestionElement(
    data.currentQuestionIndex,
    currentQuestion.text,
    correctAnswersCount,
    data.questions.length
  );

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answerElement.addEventListener(
      'click',
      selectAnswer(currentQuestion, answerElement, key)
    ); // answer options react on clicks calling selectAnswer function
    answersListElement.appendChild(answerElement);

    // If a page loaded after taking actions with buttons,
    // correct marking of an answer option is required with no user reaction.
    // Check, if an option selecting already had place:
    if (data.questions[data.currentQuestionIndex].selected === key) {
      assignSelectedClass(answerElement); // mark selected

      // If an answer has already submitted:
      if (data.questions[data.currentQuestionIndex].submitted === true) {
        checkAnswer(currentQuestion); // mark it right or wrong
      }
    }
  }

  // In case of wrong answer a user has a right to know the right one
  markRightAnswer(currentQuestion);

  // Assign event listeners to buttons
  document
    .getElementById(START_OVER_BUTTON_ID)
    .addEventListener('click', startOver);

  document
    .getElementById(SUBMIT_ANSWER_BUTTON_ID)
    .addEventListener('click', submitAnswer(currentQuestion));

  document.getElementById(NEX_PAGE_BUTTON).addEventListener('click', nextPage);

  document.getElementById(PREV_PAGE_BUTTON).addEventListener('click', prevPage);

  // After submitting a user is prevented from selecting a new one.
  // User will see a warning message in case of trying.
  const warningMessage = document.createElement('div');
  warningMessage.style.display = 'none'; // but now we can hide it
  warningMessage.classList.add('warning');
  warningMessage.innerText = 'You cannot change your answer!';
  questionElement.appendChild(warningMessage);

  // On the last page question next button should warn about completing
  if (data.currentQuestionIndex === data.questions.length - 1) {
    document.getElementById(NEX_PAGE_BUTTON).innerText = 'Complete quiz';
  }
};

// Function restarts quiz session:
export const startOver = () => {
  window.localStorage.clear(); // Delete session
  // Assign to data variable an independent copy of quizData
  data = JSON.parse(JSON.stringify(quizData));

  countCorrect = 0;
  countFalse = 0;

  // Build welcome page
  initWelcomePage();
};

// If a user selected an answer option:
const selectAnswer = (currentQuestion, answerElement, key) => () => {
  // First of all, check if an answer hasn't been submitted yet:
  if (currentQuestion.submitted === false) {
    // Clear selection before assigning a new one
    if (
      Object.keys(currentQuestion.answers).includes(currentQuestion.selected)
    ) {
      const prevAnswer = document.querySelector('.selected');
      // Check if the previous answer object is found
      if (prevAnswer != null) {
        prevAnswer.classList.remove('selected');
      }
    }

    currentQuestion.selected = key; // New answer saved
    assignSelectedClass(answerElement);
  } else {
    displayWarning();
  }
};

// Function to display the warning
const displayWarning = () => {
  const warningMessage = document.querySelector('.warning');
  warningMessage.style.display = 'inline';
};

// Simple function that adds 'selected' class to answer element
const assignSelectedClass = (answerElement) => {
  answerElement.classList.add('selected');
};

// Function
const submitAnswer = (currentQuestion) => () => {
  flagOkBtn = true;

  // Check if submitting is allowed
  if (
    // the given answer is in the answer list
    Object.keys(currentQuestion.answers).includes(currentQuestion.selected) &&
    // another answers hasn't been submitted before
    currentQuestion.submitted === false
  ) {
    currentQuestion.submitted = true; // submit
    checkAnswer(currentQuestion); // mark answers
    saveAnswers(); // store sessions
  }
};

// After submitting the correct answers counter updates
const updateCounter = () => {
  const counter = document.querySelector('.counter');
  counter.innerHTML =
    `${countCorrectAnswers(data.questions)}/` + counter.innerHTML.split('/')[1];
};

// Simple function to save data in the local storage
const saveAnswers = () => {
  window.localStorage.setItem('quizData', JSON.stringify(data));
};

// Function to check if the given answer is correct
const checkAnswer = (currentQuestion) => {
  const selectedAnswer = document.querySelector('.selected');
  selectedAnswer.classList.remove('selected');
  // If the given answer is correct:
  if (currentQuestion.selected === currentQuestion.correct) {
    selectedAnswer.classList.add('right'); // Yahoo!

    if (flagOkBtn) countCorrect++;
    // The page is already loaded. The counter itself isn't going to update
    updateCounter();
  } else {
    selectedAnswer.classList.add('wrong');
    markRightAnswer(currentQuestion); //

    if (flagOkBtn) countFalse++;
  }

  // OK Button can be hide

  flagOkBtn = false;

  document.getElementById(SUBMIT_ANSWER_BUTTON_ID).style.display = 'none';

  if (countCorrect + countFalse >= quizData.questions.length) {
    const userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.innerHTML = '';

    userInterface.appendChild(
      createResultElement(countCorrect, quizData.questions.length)
    );

    document
      .getElementById(TRY_AGAIN_BUTTON)
      .addEventListener('click', startOver);
  }
};

// Function to find the correct answer element and mark it
const markRightAnswer = (currentQuestion) => {
  // Before showing the correct answer let's check that
  // an attempt to guess is already failed.
  if (
    // answer is incorrect
    currentQuestion.correct !== currentQuestion.selected &&
    // answer is submitted
    currentQuestion.submitted === true
  ) {
    // find the correct answer element by its class
    const rightAnswer = document.querySelector(
      `.${currentQuestion.correct}-opt`
    );

    // Check if the right answer is already appended.
    // Otherwise if the wrong given answer is builded in before
    // the correct one browser fails to find it on the page
    if (rightAnswer !== null) {
      rightAnswer.classList.add('right');
    }
  }
};

// Function to reload the page with the next question
export const nextPage = () => {
  data.currentQuestionIndex = data.currentQuestionIndex + 1;
  flagOkBtn = false;
  initQuestionPage();
};

// Function to reload the page with the previous question
export const prevPage = () => {
  data.currentQuestionIndex = data.currentQuestionIndex - 1;
  flagOkBtn = false;
  initQuestionPage();
};

// Function returns the number of correct answers
const countCorrectAnswers = (questionsArray) => {
  // Takes the question array, filter correct answers
  return questionsArray
    .map(({ correct, selected, submitted }) => ({
      correct,
      selected,
      submitted,
    }))
    .filter((question) => {
      return question.submitted === true;
    })
    .filter((question) => {
      return question.selected === question.correct;
    }).length; // and just counts it length.
};
