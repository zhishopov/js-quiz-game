export function showCountdown(time) {
  const count = document.createElement("p");
  count.textContent = `Next question in ${time} seconds!`;

  root.querySelector(".question-box").appendChild(count);
}
