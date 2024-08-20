import selectAndUnselect from "./selectAndUnselect";
export default function FolderCard(
  folderTitle: string,
  wordsCount: number,
  isFolderCustom: boolean,
  folderFileName: string
) {
  const FolderCard = document.createElement("div");
  const className =
    "w-40 border border-[hsl(212,12%,21%)] hover:border-[hsl(212,12%,81%)] transition-colors p-1 grid grid-rows-[4.8rem,3rem,1fr] relative select-none cursor-pointer";
  FolderCard.setAttribute("class", className);
  FolderCard.dataset.folderFileName = folderFileName;
  FolderCard.dataset.isSelected = "false";

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("fill", "none");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke-width", "1.1");
  svg.setAttribute("stroke", "#ffffffcc");
  svg.classList.add(
    "w-10",
    "h-10",
    "mt-4",
    "opacity-40",
    "group-hover:opacity-100",
    "transition-opacity",
    "mx-auto"
  );
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");
  path.setAttribute(
    "d",
    "M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
  );

  svg.append(path);

  // ***** //
  const name = document.createElement("p");
  name.textContent = folderTitle;
  const className2 =
    "truncate-2-lines text-white/80 text-xs group-hover:text-white text-center";
  name.setAttribute("class", className2);
  // ***** //

  FolderCard.append(
    svg,
    name,
    numberOfWords(wordsCount),
    customFolder(isFolderCustom)
  );

  // ***** //
  function toggleString(element: HTMLElement, str: string) {
    let strings = JSON.parse(element.dataset.selectedFolders);
    const index = strings.indexOf(str);
    if (index > -1) {
      strings.splice(index, 1); // Remove the string
    } else {
      strings.push(str); // Add the string
    }
    element.dataset.selectedFolders = JSON.stringify(strings);
  }

  // ***** //
  function selectAndUnselect() {
    // console.log(folderFileName);
    toggleString(FolderCard.parentElement, folderFileName);
    if (FolderCard.dataset.isSelected === "false") {
      FolderCard.dataset.isSelected = "true";
      FolderCard.classList.add("border-teal-600", "bg-teal-600/5");
      FolderCard.classList.remove(
        "border-[hsl(212,12%,21%)]",
        "hover:border-[hsl(212,12%,81%)]"
      );
    } else {
      FolderCard.dataset.isSelected = "false";
      FolderCard.classList.remove("border-teal-600", "bg-teal-600/5");
      FolderCard.classList.add(
        "border-[hsl(212,12%,21%)]",
        "hover:border-[hsl(212,12%,81%)]"
      );
    }
  }

  FolderCard.addEventListener("click", selectAndUnselect);

  return FolderCard;
}

function numberOfWords(WordsNum: number) {
  const numberOfWords = document.createElement("span");
  const className =
    "bg-[hsl(216,28%,7%)] px-2 py-1 rounded-md text-xs text-white/50 absolute top-1 right-1";
  numberOfWords.setAttribute("class", className);
  numberOfWords.textContent = WordsNum.toString();

  return numberOfWords;
}
function customFolder(isFolderCustom: boolean) {
  const numberOfWords = document.createElement("span");
  const className =
    "bg-[hsl(216,28%,7%)] px-2 py-1 rounded-md text-xs text-white/50 absolute top-1 left-1";
  numberOfWords.setAttribute("class", className);
  numberOfWords.textContent = isFolderCustom ? "Custom" : "GitHub";

  return numberOfWords;
}
