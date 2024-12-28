// import questions from "./questions.js";

// const root = document.getElementsByClassName("container")[0];
// root.addEventListener("click", checkAnswer);
// let currentQuestionIndex = 0;
// let currentPoint = 0;

// function displayQuestion(index) {
//   // Reset container
//   root.innerHTML = "";

//   if (index >= questions.length) {
//     root.innerHTML = `<h2>Congratulations! You've completed the quiz!</h2>`;
//     return;
//   }

//   // Get current question
//   const item = questions[index];

//   const questionBox = document.createElement("div");
//   questionBox.className = "question-box";

//   questionBox.innerHTML = `
//         <h3 id="question">${item.question}</h3>
//         <div class="answers">
//           <p class="answer ${
//             item.correctOption === 0 ? "correct" : "incorrect"
//           }">A: ${item.options[0]}</p>
//           <p class="answer ${
//             item.correctOption === 1 ? "correct" : "incorrect"
//           }">B: ${item.options[1]}</p>
//           <p class="answer ${
//             item.correctOption === 2 ? "correct" : "incorrect"
//           }">C: ${item.options[2]}</p>
//           <p class="answer ${
//             item.correctOption === 3 ? "correct" : "incorrect"
//           }">D: ${item.options[3]}</p>
//         </div>
//     `;
//   root.appendChild(questionBox);
// }

// function displayPoints() {
//   const pointsBox = document.createElement("div");
//   pointsBox.className = "points-box";

//   for (let i = 1; i <= 15; i++) {
//     const point = document.createElement("p");
//     point.className = "point";
//     point.textContent = `${i} point${i > 1 ? "s" : ""}`;

//     if (i <= currentPoint) {
//       point.style.color = "green";
//     }

//     pointsBox.appendChild(point);
//   }

//   // Clear old points and add updated points
//   const oldPointsBox = document.querySelector(".points-box");
//   if (oldPointsBox) {
//     root.removeChild(oldPointsBox);
//   }
//   root.appendChild(pointsBox);
// }

// displayQuestion(currentQuestionIndex);
// displayPoints();

// function checkAnswer(event) {
//   const correctAnswer = event.target;
//   if (
//     !correctAnswer.classList.contains("answer") ||
//     root.classList.contains("disabled")
//   ) {
//     return;
//   }
//   root.classList.add("disabled");

//   const answers = document.querySelectorAll(".answer");

//   if (correctAnswer.classList.contains("correct")) {
//     correctAnswer.style.backgroundColor = "green";
//     showCountdown(5);
//     highlight();

//     // Go to next question after a short time
//     setTimeout(() => {
//       root.classList.remove("disabled");
//       currentQuestionIndex++;
//       displayQuestion(currentQuestionIndex);
//       displayPoints();
//     }, 5000);
//   } else {
//     answers.forEach((answer) => {
//       if (answer.classList.contains("incorrect")) {
//         answer.style.backgroundColor = "red";
//       }
//     });

//     setTimeout(() => {
//       root.innerHTML = `
//       <h2>Game Over! You selected the wrong answer!</h2>
//       <button class="restart">Restart Game</button>
//       `;

//       // Add event listener to restart button
//       const restartBtn = document.querySelector(".restart");
//       restartBtn.addEventListener("click", restartGame);
//     }, 3000);
//   }
// }

// // Restart Game
// function restartGame() {
//   root.classList.remove("disabled");
//   // Using a random number for a question
//   currentQuestionIndex = Math.round(Math.random() * questions.length);

//   displayQuestion(currentQuestionIndex);
//   displayPoints();
// }

// function showCountdown(time) {
//   const count = document.createElement("p");
//   count.textContent = `Next question in ${time} seconds!`;

//   root.querySelector(".question-box").appendChild(count);
// }

// function highlight() {
//   const points = document.querySelectorAll(".point");

//   if (currentPoint <= points.length) {
//     points[currentPoint].style.color = "green";
//     currentPoint++;
//   }
// }
