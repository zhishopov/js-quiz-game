import questions from "./questions.js";

const root = document.getElementsByClassName("container")[0];

function generate() {
  for (let item of questions) {
    console.log(item);

    const questionBox = document.createElement("div");
    questionBox.className = "question-box";

    questionBox.innerHTML = `
        <h3 id="question">${item.question}</h3>
        <div class="answers">
          <p class="answer">A: ${item.options[0]}</p>
          <p class="answer">B: ${item.options[1]}</p>
          <p class="answer">C: ${item.options[2]}</p>
          <p class="answer">D: ${item.options[3]}</p>
        </div>
    `;
    root.appendChild(questionBox);
  }
}

generate();
