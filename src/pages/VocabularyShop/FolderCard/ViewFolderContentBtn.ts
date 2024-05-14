export default function ViewFolderContentBtn() {
  const ViewFolderContentBtn = document.createElement("button");
  const className = "group bg-[hsl(216,28%,7%)] p-1.5 rounded-md";
  ViewFolderContentBtn.setAttribute("class", className);
  ViewFolderContentBtn.setAttribute("title", "view folder content");

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("fill", "none");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke-width", "1.3");
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
  path.setAttribute(
    "d",
    "M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"
  );

  svg.append(path);
  ViewFolderContentBtn.append(svg);

  // ViewFolderContentBtn.addEventListener("click",renderFolderContent)

  return ViewFolderContentBtn;
}
