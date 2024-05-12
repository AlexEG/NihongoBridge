export default function BackspaceBtn() {
  const key = document.createElement("button");
  const className =
    "group w-fit h-fit bg-[hsl(216,28%,7%)] p-3 rounded-lg min-w-10";
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
    "M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"
  );

  svg.append(path);
  key.append(svg);

  key.addEventListener("click", removeCharacter);
  function removeCharacter() {
    const input = key.parentElement.parentElement.parentElement.parentElement
      .firstElementChild.nextElementSibling.nextElementSibling
      .firstElementChild as HTMLInputElement;
    console.log("input:", input);
    input.value = input.value.slice(0, -1);
    input.setAttribute("value", input.value);
  }

  return key;
}
