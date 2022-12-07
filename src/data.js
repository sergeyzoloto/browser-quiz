/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  currentQuestionIndex: 0,
  // the questions in the quiz
  questions: [
    {
      text:
        'What is the name of a collection of all the variables in scope at the time of creation of a function?',
      answers: {
        a: 'local storage',
        b: 'console',
        c: 'closure',
        d: 'call stack',
      },
      correct: 'c',
      selected: null,
      submitted: false,
      links: [
        {
          text: 'I never understood JavaScript closures',
          href:
            'https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8',
        },
      ],
    },
    {
      text:
        'What is the name of a function that is passed into another function as an argument?',
      answers: {
        a: 'cashback function',
        b: 'callback function',
        c: 'comeback function',
        d: 'feedback function',
      },
      correct: 'b',
      selected: null,
      submitted: false,
      links: [
        {
          text: 'Iterators',
          href:
            'https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-iterators/cheatsheet',
        },
      ],
    },
    {
      text: 'What is the correct syntax for spread operator in JavaScript?',
      answers: {
        a: '===',
        b: '[...rest]',
        c: '[...array]',
        d: 'if ( foo >= bar)',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/rest-parameters-spread',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax',
        },
      ],
    },
    {
      text: 'How does a FOR loop starts in javascript?',
      answers: {
        a: 'for(let i = 0; i <= 5)',
        b: 'for let i = 1 to 5',
        c: 'for let(i <=5; i++)',
        d: 'for (let i = 0; i <= 5;i++)',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'w3 schools',
          href: 'https://www.w3schools.com/js/js_loop_for.asp',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for',
        },
      ],
    },
    {
      text: 'How do you round the number 7.25, to the nearest integer?',
      answers: {
        a: 'Math.round(7.25)',
        b: 'round(7.25)',
        c: 'parseInt(7.25)',
        d: 'Math.exp(7.25)',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'w3 schools',
          href: 'https://www.w3schools.com/jsref/jsref_round.asp',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round',
        },
      ],
    },
    {
      text: 'Which event occurs when the user right clicks on an HTML element?',
      answers: {
        a: 'onmouseover',
        b: 'onchange',
        c: 'onclick',
        d: 'oncontextmenu',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'w3 schools',
          href: 'https://www.w3schools.com/jsref/event_oncontextmenu.asp',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/API/Element/contextmenu_event',
        },
      ],
    },
    {
      text: 'What will the following code return: Boolean(10 > 9)',
      answers: {
        a: 'NaN',
        b: 'true',
        c: 'undefined',
        d: 'false',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'w3 schools',
          href: 'https://www.w3schools.com/js/js_booleans.asp',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean',
        },
      ],
    },
    {
      text: 'What IIFE refers to in javascript',
      answers: {
        a: 'Immediately Invoked Function Expression',
        b: 'normal function',
        c: 'IIFE does not exist in JavaScript',
        d: 'type of classes in JavaScript',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'w3 schools',
          href: 'https://www.w3schools.com/js/js_function_definition.asp',
        },
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Glossary/IIFE',
        },
      ],
    },
    {
      text: 'How can we read the properties of an object',
      answers: {
        a: 'print',
        b: 'log',
        c: 'alert',
        d: 'prompt',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'w3 schools',
          href: 'https://www.w3schools.com/js/js_object_properties.asp',
        },
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/API/console/log',
        },
      ],
    },
    {
      text: 'What is === operator in JavaScript?',
      answers: {
        a: 'compare values and types',
        b: 'only compares values',
        c: 'compare the parent Elements and values',
        d: 'only compare types',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'w3 schools',
          href: 'https://www.w3schools.com/js/js_comparisons.asp',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality',
        },
      ],
    },

    // Add more questions here
    {
      text: 'What is the correct syntax for spread operator in JavaScript?',
      answers: {
        a: '===',
        b: '[...rest]',
        c: '[...array]',
        d: 'if ( foo >= bar)',
      },
      correct: 'c',
      selected: null,
      submitted: false,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/rest-parameters-spread',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax',
        },
      ],
    },
    {
      text: 'How does a FOR loop starts in javascript?',
      answers: {
        a: 'for(let i = 0; i <= 5)',
        b: 'for let i = 1 to 5',
        c: 'for let(i <=5; i++)',
        d: 'for (let i = 0; i <= 5;i++)',
      },
      correct: 'd',
      selected: null,
      submitted: false,
      links: [
        {
          text: 'w3 schools',
          href: 'https://www.w3schools.com/js/js_loop_for.asp',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for',
        },
      ],
    },
    {
      text: 'How do you round the number 7.25, to the nearest integer?',
      answers: {
        a: 'Math.round(7.25)',
        b: 'round(7.25)',
        c: 'parseInt(7.25)',
        d: 'Math.exp(7.25)',
      },
      correct: 'a',
      selected: null,
      submitted: false,
      links: [
        {
          text: 'w3 schools',
          href: 'https://www.w3schools.com/jsref/jsref_round.asp',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round',
        },
      ],
    },
    {
      text: 'Which event occurs when the user right clicks on an HTML element?',
      answers: {
        a: 'onmouseover',
        b: 'onchange',
        c: 'onclick',
        d: 'oncontextmenu',
      },
      correct: 'd',
      selected: null,
      submitted: false,
      links: [
        {
          text: 'w3 schools',
          href: 'https://www.w3schools.com/jsref/event_oncontextmenu.asp',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/API/Element/contextmenu_event',
        },
      ],
    },
    {
      text: 'What will the following code return: Boolean(10 > 9)',
      answers: {
        a: 'NaN',
        b: 'true',
        c: 'undefined',
        d: 'false',
      },
      correct: 'b',
      selected: null,
      submitted: false,
      links: [
        {
          text: 'w3 schools',
          href: 'https://www.w3schools.com/js/js_booleans.asp',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean',
        },
      ],
    },
    {
      text: 'What IIFE refers to in javascript',
      answers: {
        a: 'Immediately Invoked Function Expression',
        b: 'normal function',
        c: 'IIFE does not exist in JavaScript',
        d: 'type of classes in JavaScript',
      },
      correct: 'a',
      selected: null,
      submitted: false,
      links: [
        {
          text: 'w3 schools',
          href: 'https://www.w3schools.com/js/js_function_definition.asp',
        },
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Glossary/IIFE',
        },
      ],
    },
    {
      text: 'How can we read the properties of an object',
      answers: {
        a: 'print',
        b: 'log',
        c: 'alert',
        d: 'prompt',
      },
      correct: 'b',
      selected: null,
      submitted: false,
      links: [
        {
          text: 'w3 schools',
          href: 'https://www.w3schools.com/js/js_object_properties.asp',
        },
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/API/console/log',
        },
      ],
    },
    {
      text: 'What is === operator in JavaScript?',
      answers: {
        a: 'compare values and types',
        b: 'only compares values',
        c: 'compare the parent Elements and values',
        d: 'only compare types',
      },
      correct: 'a',
      selected: null,
      submitted: false,
      links: [
        {
          text: 'w3 schools',
          href: 'https://www.w3schools.com/js/js_comparisons.asp',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality',
        },
      ],
    },
  ],
};

export const resultQuotes = {
  lowScore: `On the plus side, that probably means you don't spend 
  too much time learning obscure facts just to be good at trivia quizzes ;)`,

  reasonableScore: `You deserve at least two slices of cake for that impressive effort...`,

  goodScore: `Your prize is the knowledge that you probably know the most obscure facts out of anyone in the room. Especially if you're alone. Then you definitely do.`,

  fullScore: `Well done ;)`,
};
