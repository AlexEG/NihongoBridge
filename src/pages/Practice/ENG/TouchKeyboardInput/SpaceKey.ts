export default function SpaceKey() {
  const key = document.createElement("button");
  const className =
    "group px-12 w-fit h-fit bg-[hsl(216,28%,7%)] p-3 rounded-lg min-w-10";
  key.setAttribute("class", className);

  const className2 = "opacity-60 group-hover:opacity-100 transition-opacity";

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("fill", "none");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke-width", "1.5");
  svg.setAttribute("stroke", "#ffffff");
  svg.setAttribute("class", `w-6 h-6 ${className2}`);

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");

  path.setAttribute(
    "d",
    "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5"
  );

  svg.append(path);
  key.append(svg);
  key.addEventListener("click", addSpace);
  function addSpace() {
    const input = key.parentElement.parentElement.parentElement
      .firstElementChild.nextElementSibling.nextElementSibling
      .firstElementChild as HTMLInputElement;
    console.log("input:", input);
    input.value += " ";
    input.setAttribute("value", input.value);
  }
  return key;
}
