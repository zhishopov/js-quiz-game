import questions from "./questions.js";
import { displayQuestion, displayPoints } from "./display.js";
import { checkAnswer, restartGame } from "./game.js";

const root = document.querySelector(".container");
let state = {
  currentQuestionIndex: 0,
  currentPoint: 0,
};

// Initial Render
displayQuestion(root, state.currentQuestionIndex, questions);
displayPoints(root, state.currentPoint);

root.addEventListener("click", (event) =>
  checkAnswer(event, root, questions, state)
);
