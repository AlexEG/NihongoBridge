export default function AddNewWordBtn() {
  const addNewWordBtn = document.createElement("button");
  const className2 =
    "group bg-[hsl(216,28%,7%)] p-3 rounded-lg fixed bottom-2 right-2";
  addNewWordBtn.setAttribute("class", className2);
  // addNewWordBtn.setAttribute("title", "Add New Word");

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("fill", "none");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke-width", "1.5");
  svg.setAttribute("stroke", "#ffffffcc");
  svg.classList.add("w-6", "h-6", "opacity-40", "group-hover:opacity-90");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");
  path.setAttribute("d", "M12 4.5v15m7.5-7.5h-15");

  svg.append(path);
  addNewWordBtn.append(svg);

  addNewWordBtn.addEventListener("click", openCloseAddNewWordFieldsPopup);
  return addNewWordBtn;
}

function openCloseAddNewWordFieldsPopup() {
  const addNewWordFieldsPopup = document.querySelector(
    "#vocabulary-bank--eng--add-new-word-input-fields"
  ) as HTMLElement;

  if (addNewWordFieldsPopup.dataset.isOpen === "false") {
    addNewWordFieldsPopup.dataset.isOpen = "true";
    addNewWordFieldsPopup.classList.replace("hidden", "flex");
  } else {
    addNewWordFieldsPopup.dataset.isOpen = "false";
    addNewWordFieldsPopup.classList.replace("flex", "hidden");
  }
}
