import questions from "./questions.js";

const questionBox = document.getElementsByClassName("question-box")[0];

for (let item of questions) {
  console.log(item);

  questionBox.innerHTML = `
  <h3 id="question">${item.question}</h3>
  <div class="answers">
          <p>A: ${item.options[0]}</p>
          <p>B: ${item.options[1]}</p>
          <p>C: ${item.options[2]}</p>
          <p>D: ${item.options[3]}</p>
  </div>
  `;
}
