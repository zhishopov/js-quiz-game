export function displayQuestion(root, index, questions) {
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

export function displayPoints(root, currentPoint, maxPoints = 15) {
  const pointsBox = document.createElement("div");
  pointsBox.className = "points-box";

  for (let i = 1; i <= maxPoints; i++) {
    const point = document.createElement("p");
    point.className = "point";
    point.textContent = `${i} point${i > 1 ? "s" : ""}`;

    if (i <= currentPoint) {
      point.style.color = "green";
    }

    pointsBox.appendChild(point);
  }

  // Clear old points and add updated points
  const oldPointsBox = document.querySelector(".points-box");
  if (oldPointsBox) {
    root.removeChild(oldPointsBox);
  }
  root.appendChild(pointsBox);
}
