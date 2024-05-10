export default function IndicatorCorrectWrong() {
  const container = document.createElement("div");
  const className = "h-7 mt-20";
  container.setAttribute("class", className);

  container.append(correctAnswer(), wrongAnswer());

  return container;
}

function correctAnswer() {
  const correctAnswer = document.createElement("button");
  const className = "mx-auto text-green-500/50 hidden font-medium";
  correctAnswer.setAttribute(
    "id",
    "practice--eng---listen-and-spell--indicator-correct"
  );

  correctAnswer.setAttribute("class", className);
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("fill", "none");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke-width", "1.5");
  svg.setAttribute("stroke", "#00ff00");
  svg.classList.add("w-6", "h-6", "opacity-40", "mr-2");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

  path.setAttribute(
    "d",
    "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  );

  svg.append(path);

  const span = document.createElement("span");

  correctAnswer.append(svg, span);
  return correctAnswer;
}

function wrongAnswer() {
  const wrongAnswer = document.createElement("button");
  const className = "mx-auto text-red-500/50 hidden font-medium";
  wrongAnswer.setAttribute(
    "id",
    "practice--eng---listen-and-spell--indicator-wrong"
  );

  wrongAnswer.setAttribute("class", className);
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("fill", "none");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke-width", "1.5");
  svg.setAttribute("stroke", "#ff0000");
  svg.classList.add("w-6", "h-6", "opacity-40", "mr-2");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

  path.setAttribute(
    "d",
    "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  );

  svg.append(path);

  const span = document.createElement("span");

  wrongAnswer.append(svg, span);
  return wrongAnswer;
}
