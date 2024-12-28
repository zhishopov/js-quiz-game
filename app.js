import questions from "./questions.js";

const root = document.getElementsByClassName("container")[0];
root.addEventListener("click", checkAnswer);
let currentQuestionIndex = 0;

function displayQuestion(index) {
  // Reset container
  root.innerHTML = "";

  if (index >= questions.length) {
    root.innerHTML = `<h2>Congratulations! You've completed the quiz!</h2>`;
    return;
  }

  // Get current question
  const item = questions[index];

  const questionBox = document.createElement("div");
  questionBox.className = "question-box";

  questionBox.innerHTML = `
        <h3 id="question">${item.question}</h3>
        <div class="answers">
          <p class="answer ${
            item.correctOption === 0 ? "correct" : "incorrect"
          }">A: ${item.options[0]}</p>
          <p class="answer ${
            item.correctOption === 1 ? "correct" : "incorrect"
          }">B: ${item.options[1]}</p>
          <p class="answer ${
            item.correctOption === 2 ? "correct" : "incorrect"
          }">C: ${item.options[2]}</p>
          <p class="answer ${
            item.correctOption === 3 ? "correct" : "incorrect"
          }">D: ${item.options[3]}</p>
        </div>
    `;
  root.appendChild(questionBox);
}

displayQuestion(currentQuestionIndex);

function checkAnswer(event) {
  const correctAnswer = event.target;
  if (!correctAnswer.classList.contains("answer")) {
    return;
  }

  const answers = document.querySelectorAll(".answer");

  if (correctAnswer.classList.contains("correct")) {
    correctAnswer.style.backgroundColor = "green";

    // Go to next question after a short time
    setTimeout(() => {
      currentQuestionIndex++;
      displayQuestion(currentQuestionIndex);
    }, 3000);
  } else {
    answers.forEach((answer) => {
      if (answer.classList.contains("incorrect")) {
        answer.style.backgroundColor = "red";
      }
    });

    setTimeout(() => {
      root.innerHTML = `
      <h2>Game Over! You selected the wrong answer!</h2>
      <button class="restart">Restart Game</button>
      `;

      // Add event listener to restart button
      const restartBtn = document.querySelector(".restart");
      restartBtn.addEventListener("click", restartGame);
    }, 1000);
  }
}

// Restart Game
function restartGame() {
  // Using a random number for a question
  const number = Math.round(Math.random() * 10);
  console.log(number);

  // currentQuestionIndex = 0;
  displayQuestion(number);
  displayPoints();
}

function displayPoints() {
  const pointsBox = document.createElement("div");
  pointsBox.className = "points-box";

  pointsBox.innerHTML = `
        <p>1 point</p>
        <p>2 points</p>
        <p>3 points</p>
        <p>4 points</p>
        <p>5 points</p>
        <p>6 points</p>
        <p>7 points</p>
        <p>8 points</p>
        <p>9 points</p>
        <p>10 points</p>
        <p>11 points</p>
        <p>12 points</p>
        <p>13 points</p>
        <p>14 points</p>
        <p>15 points</p>`;

  root.appendChild(pointsBox);
}
displayPoints();
