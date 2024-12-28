import { displayQuestion, displayPoints } from "./display.js";

export function checkAnswer(event, root, questions, state) {
  const correctAnswer = event.target;

  if (
    !correctAnswer.classList.contains("answer") ||
    root.classList.contains("disabled")
  ) {
    return;
  }

  root.classList.add("disabled");
  const answers = document.querySelectorAll(".answer");

  if (correctAnswer.classList.contains("correct")) {
    correctAnswer.style.backgroundColor = "green";
    state.currentPoint++;
    highlightPoints(state.currentPoint);

    setTimeout(() => {
      root.classList.remove("disabled");
      state.currentQuestionIndex++;
      displayQuestion(root, state.currentQuestionIndex, questions);
      displayPoints(root, state.currentPoint);
    }, 5000);
  } else {
    answers.forEach((answer) => {
      if (answer.classList.contains("incorrect")) {
        answer.style.backgroundColor = "red";
      }
    });

    setTimeout(() => {
      root.innerHTML = `<h2>Game Over! You selected the wrong answer!</h2><button class="restart">Restart Game</button>`;
      const restartBtn = document.querySelector(".restart");
      restartBtn.addEventListener("click", () =>
        restartGame(root, questions, state)
      );
    }, 3000);
  }
}

export function restartGame(root, questions, state) {
  root.classList.remove("disabled");
  state.currentQuestionIndex = Math.floor(Math.random() * questions.length);
  state.currentPoint = 0;

  displayQuestion(root, state.currentQuestionIndex, questions);
  displayPoints(root, state.currentPoint);
}

function highlightPoints(currentPoint) {
  const points = document.querySelectorAll(".point");
  if (currentPoint <= points.length) {
    points[currentPoint - 1].style.color = "green";
  }
}
