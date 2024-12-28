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
    showCountdown(5);

    // Go to next question after a short time
    setTimeout(() => {
      root.classList.remove("disabled");
      currentQuestionIndex++;
      displayQuestion(currentQuestionIndex);
      displayPoints();
    }, 5000);
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
    }, 5000);
  }
}

// Restart Game
function restartGame() {
  root.classList.remove("disabled");
  // Using a random number for a question
  currentQuestionIndex = Math.round(Math.random() * questions.length);

  displayQuestion(currentQuestionIndex);
  displayPoints();
}

function displayPoints() {
  const pointsBox = document.createElement("div");
  pointsBox.className = "points-box";

  pointsBox.innerHTML = `
        <p class="point">1 point</p>
        <p class="point">2 points</p>
        <p class="point">3 points</p>
        <p class="point">4 points</p>
        <p class="point">5 points</p>
        <p class="point">6 points</p>
        <p class="point">7 points</p>
        <p class="point">8 points</p>
        <p class="point">9 points</p>
        <p class="point">10 points</p>
        <p class="point">11 points</p>
        <p class="point">12 points</p>
        <p class="point">13 points</p>
        <p class="point">14 points</p>
        <p class="point">15 points</p>`;

  root.appendChild(pointsBox);
}
displayPoints();

function showCountdown(time) {
  const count = document.createElement("p");
  count.textContent = `Next question in ${time} seconds!`;

  root.querySelector(".question-box").appendChild(count);
}
