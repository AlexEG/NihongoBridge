export default function AddToVocabulayBankBtn(isInVocabularyBank: boolean) {
  const AddToVocabulayBankBtn = document.createElement("button");
  const className = "group bg-[hsl(216,28%,7%)] p-1.5 rounded-md";
  AddToVocabulayBankBtn.setAttribute("class", className);
  AddToVocabulayBankBtn.setAttribute("title", "add to your");

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("fill", "none");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke-width", "1.5");

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

  const plusSign = "M12 4.5v15m7.5-7.5h-15";
  const checkMark =
    "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z";
  // console.log("isInVocabularyBank:", isInVocabularyBank);

  if (isInVocabularyBank) {
    svg.setAttribute("stroke", "#00ff00cc");
    path.setAttribute("d", checkMark);
    AddToVocabulayBankBtn.setAttribute(
      "title",
      "already in your VocabulayBank"
    );
  } else {
    svg.setAttribute("stroke", "#ffffffcc");
    AddToVocabulayBankBtn.setAttribute("title", "add to your VocabulayBank");
    path.setAttribute("d", plusSign);
  }

  svg.append(path);
  AddToVocabulayBankBtn.append(svg);

  AddToVocabulayBankBtn.addEventListener("click", addToVocabulayBank);

  function addToVocabulayBank() {
    // add and remove highlight

    const wordCard = AddToVocabulayBankBtn.parentElement.parentElement;
    if (wordCard.dataset.isInVocabularyBank === "false") {
      path.setAttribute("d", checkMark);
      svg.setAttribute("stroke", "#00ff00cc");
      AddToVocabulayBankBtn.setAttribute(
        "title",
        "already in your VocabulayBank"
      );
      wordCard.dataset.isInVocabularyBank = "true";
    } else {
      svg.setAttribute("stroke", "#ffffffcc");
      AddToVocabulayBankBtn.setAttribute("title", "add to your VocabulayBank");
      path.setAttribute("d", plusSign);
      wordCard.dataset.isInVocabularyBank = "false";
    }
  }
  return AddToVocabulayBankBtn;
}
