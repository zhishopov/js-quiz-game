import questions from "./questions.js";

const root = document.getElementsByClassName("container")[0];
root.addEventListener("click", checkAnswer);
let currentQuestionIndex = 0;

function displayQuestion(index) {
  // Reset container
  root.innerHTML = "";

  // Get current question
  const item = questions[index];

  const questionBox = document.createElement("div");
  questionBox.className = "question-box";

  questionBox.innerHTML = `
        <h3 id="question">${item.question}</h3>
        <div class="answers">
          <p class="answer correct">A: ${item.options[0]}</p>
          <p class="answer incorrect">B: ${item.options[1]}</p>
          <p class="answer incorrect">C: ${item.options[2]}</p>
          <p class="answer incorrect">D: ${item.options[3]}</p>
        </div>
    `;
  root.appendChild(questionBox);
}

displayQuestion(currentQuestionIndex);

function checkAnswer(event) {
  const correctAnswer = event.target;
  if (correctAnswer.classList.contains("correct")) {
    correctAnswer.style.backgroundColor = "green";
  } else if (correctAnswer.classList.contains("incorrect")) {
    correctAnswer.style.backgroundColor = "red";
  }
  // currentQuestionIndex++;
  // displayQuestion(currentQuestionIndex);
}
