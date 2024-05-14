export default function CloseFolderView() {
  const closeBtn = document.createElement("button");
  const className =
    "group bg-[hsl(216,28%,7%)] p-1.5 rounded-md mx-auto absolute top-4 left-1/2 -translate-x-1/2 hidden";
  closeBtn.setAttribute("class", className);
  closeBtn.setAttribute("title", "Close Folder View");
  closeBtn.setAttribute("id", "vocabulary-shop--close-folder-view-btn");

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("fill", "none");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke", "#ff0000cc");
  svg.setAttribute("stroke-width", "2.5");
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
  path.setAttribute("d", "M6 18 18 6M6 6l12 12");

  svg.append(path);
  closeBtn.append(svg);

  closeBtn.addEventListener("click", closeFolderView);
  return closeBtn;
}

function closeFolderView() {
  const folderCardsContainer = document.querySelector(
    "#vocabulary-shop--folder-cards-container"
  );
  const closeFolderView = document.querySelector(
    "#vocabulary-shop--close-folder-view-btn"
  );
  folderCardsContainer.classList.replace("hidden", "flex");
  closeFolderView.classList.replace("flex", "hidden");

  const wordsContainer = document.querySelector(
    "#vocabulary-shop--words-container"
  );
  wordsContainer.remove();
}
