import ActionBar from "./ActionBar";

export default function FolderCard(
  folderName: string,
  wordsNum: number,
  isFolderInstalled: boolean,
  folderFileName: string
) {
  const FolderCard = document.createElement("div");
  const className =
    "h-44 w-44 border border-[hsl(212,12%,21%)] hover:border-[hsl(212,12%,81%)] transition-colors p-1 grid grid-rows-[4.8rem,3rem,1fr] relative";
  FolderCard.setAttribute("class", className);
  // FolderCard.dataset.folderFileName = folderFileName;

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("fill", "none");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke-width", "1.1");
  svg.setAttribute("stroke", "#ffffffcc");
  svg.classList.add(
    "w-16",
    "h-16",
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
  name.textContent = folderName;
  const className2 =
    "truncate-2-lines text-white/80 text-sm group-hover:text-white text-center";
  name.setAttribute("class", className2);
  // ***** //

  FolderCard.append(
    svg,
    name,
    ActionBar(isFolderInstalled, folderFileName),
    numberOfWords(wordsNum)
  );
  return FolderCard;
}

//TODO make a way to edit the folder icon like add some icon like food sport stuff like that
// oh right this is not a section that the user can edit this suppose to be edited only through github

function numberOfWords(WordsNum: number) {
  const numberOfWords = document.createElement("span");
  const className =
    "bg-[hsl(216,28%,7%)] px-2 py-1 rounded-md text-xs text-white/50 absolute top-1 right-1";
  numberOfWords.setAttribute("class", className);
  numberOfWords.textContent = WordsNum.toString();

  return numberOfWords;
}
