export function RightArrowKey() {
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
  path.setAttribute("d", "m8.25 4.5 7.5 7.5-7.5 7.5");

  svg.append(path);
  key.append(svg);
  return key;
}

export function LeftArrowKey() {
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
  path.setAttribute("d", "M15.75 19.5 8.25 12l7.5-7.5");

  svg.append(path);
  key.append(svg);
  return key;
}

//TODO maybe add a dataset to indcate the position for the next action,
// 1. start with postion 0 for the first character in the input field
// 2. when the user add charater the postion will chagne base on the character length
// 3. when using the arrows reset the postion number to the

// make the value of postion to number "8-23" first value is the postion of the cursor and the second is the length of the characters in input field

// inputField.selectionStart; get the user's cursor position in an input field
