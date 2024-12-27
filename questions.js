const questions = [
  // Easy Questions
  {
    id: 1,
    question: "What is the output of `console.log(typeof null)`?",
    options: ["object", "null", "undefined", "number"],
    correctOption: 0,
    difficulty: "easy",
  },
  {
    id: 2,
    question: "Which keyword is used to declare a constant in JavaScript?",
    options: ["var", "let", "const", "define"],
    correctOption: 2,
    difficulty: "easy",
  },
  {
    id: 3,
    question: "What does `NaN` stand for?",
    options: [
      "Not a Null",
      "Not a Number",
      "Null and Negative",
      "None of the Above",
    ],
    correctOption: 1,
    difficulty: "easy",
  },
  {
    id: 4,
    question: "What is the output of `2 == '2'`?",
    options: ["true", "false", "null", "undefined"],
    correctOption: 0,
    difficulty: "easy",
  },
  {
    id: 5,
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "#", "/* */", "<!-- -->"],
    correctOption: 0,
    difficulty: "easy",
  },
  {
    id: 6,
    question: "Which method is used to join two arrays in JavaScript?",
    options: ["concat()", "combine()", "merge()", "append()"],
    correctOption: 0,
    difficulty: "easy",
  },
  {
    id: 7,
    question: "What is the output of `typeof undefined`?",
    options: ["null", "undefined", "object", "string"],
    correctOption: 1,
    difficulty: "easy",
  },
  {
    id: 8,
    question: "Which operator is used to compare both value and type?",
    options: ["==", "===", "!=", "!=="],
    correctOption: 1,
    difficulty: "easy",
  },
  {
    id: 9,
    question: "Which function is used to parse a string to an integer?",
    options: ["parseInt()", "toString()", "Number()", "parseString()"],
    correctOption: 0,
    difficulty: "easy",
  },
  {
    id: 10,
    question: "What is the output of `Boolean(0)`?",
    options: ["true", "false", "null", "undefined"],
    correctOption: 1,
    difficulty: "easy",
  },

  // Medium Questions
  {
    id: 11,
    question: "Which method is used to add an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correctOption: 0,
    difficulty: "medium",
  },
  {
    id: 12,
    question: "What will `2 + '2'` evaluate to in JavaScript?",
    options: ["4", "22", "undefined", "NaN"],
    correctOption: 1,
    difficulty: "medium",
  },
  {
    id: 13,
    question: "Which statement is used to stop a loop?",
    options: ["exit", "break", "stop", "end"],
    correctOption: 1,
    difficulty: "medium",
  },
  {
    id: 14,
    question: "What is the scope of a variable declared with `var`?",
    options: ["Global", "Local", "Block", "Function or Global"],
    correctOption: 3,
    difficulty: "medium",
  },
  {
    id: 15,
    question: "Which method converts a JSON string to a JavaScript object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.object()",
      "JSON.convert()",
    ],
    correctOption: 0,
    difficulty: "medium",
  },
  {
    id: 16,
    question: "What is the output of `[1,2] + [3,4]` in JavaScript?",
    options: ["[1,2,3,4]", "1,23,4", "1,23,4", "undefined"],
    correctOption: 1,
    difficulty: "medium",
  },
  {
    id: 17,
    question:
      "Which array method returns a new array with the results of a function?",
    options: ["map()", "forEach()", "filter()", "reduce()"],
    correctOption: 0,
    difficulty: "medium",
  },
  {
    id: 18,
    question: "Which keyword is used to define a JavaScript class?",
    options: ["function", "define", "class", "struct"],
    correctOption: 2,
    difficulty: "medium",
  },
  {
    id: 19,
    question: "How do you declare an async function in JavaScript?",
    options: [
      "async()",
      "function async()",
      "async function()",
      "asyncFunction()",
    ],
    correctOption: 2,
    difficulty: "medium",
  },
  {
    id: 20,
    question: "Which method removes the last element of an array?",
    options: ["pop()", "push()", "shift()", "unshift()"],
    correctOption: 0,
    difficulty: "medium",
  },

  // Hard Questions
  {
    id: 21,
    question: "What is the purpose of the `bind()` method in JavaScript?",
    options: [
      "To execute a function immediately",
      "To create a new function with a specific `this` context",
      "To permanently attach an event listener",
      "To modify an array in place",
    ],
    correctOption: 1,
    difficulty: "hard",
  },
  {
    id: 22,
    question: "What does `Object.create()` do in JavaScript?",
    options: [
      "Creates a shallow copy of an object",
      "Creates a new object with the specified prototype",
      "Creates a deep copy of an object",
      "Assigns properties from one object to another",
    ],
    correctOption: 1,
    difficulty: "hard",
  },
  {
    id: 23,
    question: "What will `console.log([] + {})` output?",
    options: ["[object Object]", "undefined", "NaN", "SyntaxError"],
    correctOption: 0,
    difficulty: "hard",
  },
  {
    id: 24,
    question: "What is a closure in JavaScript?",
    options: [
      "A function with restricted access",
      "A function having access to the parent scope after the parent function has closed",
      "A variable stored in the global scope",
      "A function without parameters",
    ],
    correctOption: 1,
    difficulty: "hard",
  },
  {
    id: 25,
    question:
      "Which method is used to check if a string starts with a specific substring?",
    options: ["indexOf()", "includes()", "startsWith()", "substring()"],
    correctOption: 2,
    difficulty: "hard",
  },
  {
    id: 26,
    question: "What is the output of `console.log(typeof NaN)`?",
    options: ["number", "NaN", "undefined", "object"],
    correctOption: 0,
    difficulty: "hard",
  },
  {
    id: 27,
    question: "What does the `this` keyword refer to in a regular function?",
    options: [
      "The global object",
      "The current function",
      "The parent object",
      "Undefined",
    ],
    correctOption: 0,
    difficulty: "hard",
  },
  {
    id: 28,
    question: "How do you make an object immutable in JavaScript?",
    options: [
      "Object.freeze()",
      "Object.seal()",
      "Object.lock()",
      "Object.prevent()",
    ],
    correctOption: 0,
    difficulty: "hard",
  },
  {
    id: 29,
    question: "What is the purpose of the `Symbol` data type in JavaScript?",
    options: [
      "To create unique property keys",
      "To hold numeric data",
      "To store strings",
      "To represent objects",
    ],
    correctOption: 0,
    difficulty: "hard",
  },
  {
    id: 30,
    question: "What does the `Promise.all()` method do?",
    options: [
      "Waits for all promises to resolve or any to reject",
      "Resolves the first promise",
      "Rejects if any promise resolves",
      "Executes all promises sequentially",
    ],
    correctOption: 0,
    difficulty: "hard",
  },
];
