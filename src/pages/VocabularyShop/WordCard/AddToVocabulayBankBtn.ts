export default function AddToVocabulayBankBtn() {
  const AddToVocabulayBankBtn = document.createElement("button");
  const className = "group bg-[hsl(216,28%,7%)] p-1.5 rounded-md";
  AddToVocabulayBankBtn.setAttribute("class", className);

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("fill", "none");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke-width", "1.5");
  svg.setAttribute("stroke", "#ffffffcc");
  svg.classList.add(
    "w-5",
    "h-5",
    "opacity-40",
    "group-hover:opacity-100",
    "transition-opacity"
  );
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");
  path.setAttribute("d", "M12 4.5v15m7.5-7.5h-15");

  svg.append(path);
  AddToVocabulayBankBtn.append(svg);

  return AddToVocabulayBankBtn;
}
