import ControlRow from "./ControlRow";

export default function TouchKeyboardInput(keyboardLayout: string[][]) {
  const TouchKeyboardInput = document.createElement("div");
  const className =
    "border0 mt-4 p-4 max-w-xl flex-wrap gap-2 items-center justify-center mx-auto hidden";
  TouchKeyboardInput.setAttribute("class", className);
  TouchKeyboardInput.setAttribute("id", "touch-keyboard-input");
  TouchKeyboardInput.dataset.isOpen = "false";

  for (const row of keyboardLayout) {
    const rowWrapper = document.createElement("div");
    const className = "border0 mt-2 w-full flex flex-wrap gap-2 justify-center";
    rowWrapper.setAttribute("class", className);

    for (const character of row) {
      rowWrapper.append(keyboardBtn(character));
    }
    TouchKeyboardInput.append(rowWrapper);
  }

  TouchKeyboardInput.append(ControlRow());
  return TouchKeyboardInput;
}

function keyboardBtn(character: string) {
  const key = document.createElement("button");
  const className =
    "group w-fit h-fit bg-[hsl(216,28%,7%)] p-3 rounded-lg min-w-10";
  key.setAttribute("class", className);

  const className2 =
    "text-white opacity-60 group-hover:opacity-100 transition-opacity";

  const p = document.createElement("p");
  p.setAttribute("class", className2);
  p.textContent = character;

  key.append(p);

  key.addEventListener("click", typeToInputField);
  function typeToInputField() {
    const input = key.parentElement.parentElement.parentElement
      .firstElementChild.nextElementSibling.nextElementSibling
      .firstElementChild as HTMLInputElement;
    console.log("input:", input);
    input.value += character;
    input.setAttribute("value", input.value);
  }

  return key;
}
