export default function IndicatorCorrectWrong(ECID: string) {
  const container = document.createElement("div");
  const className = "h-10 py-2 mt-10 border0";
  container.setAttribute("class", className);
  container.setAttribute("id", `${ECID}--indicator-correct-wrong`);

  container.append(answer(true), answer(false));

  return container;
}

function answer(isCorrect: boolean) {
  const svgStrokeColor = isCorrect ? "#00ff00" : "#ff0000";
  const textColor = isCorrect ? "text-green-500/50" : "text-red-500/50";
  const d = isCorrect
    ? "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    : "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z";

  const answer = document.createElement("div");
  const className = `w-fit mx-auto flex font-medium ${textColor} hidden`;
  answer.setAttribute("class", className);

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("fill", "none");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke-width", "1.5");
  svg.setAttribute("stroke", svgStrokeColor);
  svg.classList.add("w-6", "h-6", "opacity-40", "mr-2");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", d);
  svg.append(path);

  const span = document.createElement("span");

  answer.append(svg, span);
  return answer;
}
