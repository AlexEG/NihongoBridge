export default function ActionBar(isFolderInstalled: boolean) {
  const actionBar = document.createElement("div");
  const className3 = "flex gap-x-1 justify-end mt-auto";
  actionBar.setAttribute("class", className3);

  if (isFolderInstalled)
    actionBar.append(uninstallFolderFromVocabulayBankBtn());
  actionBar.append(
    AddFolderToVocabulayBankBtn(isFolderInstalled),
    openFolderInPopup()
  );

  return actionBar;
}
function AddFolderToVocabulayBankBtn(isInstalled: boolean) {
  const AddToVocabulayBankBtn = document.createElement("button");
  const className = "group bg-[hsl(216,28%,7%)] p-1.5 rounded-md";
  AddToVocabulayBankBtn.setAttribute("class", className);

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("fill", "none");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke-width", "1.3");
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

  const iconWithPlusSign =
    "M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z";
  const iconWithArrowDown =
    "m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z";

  if (isInstalled) {
    svg.setAttribute("stroke", "#00ff00cc");
    path.setAttribute("d", iconWithArrowDown);
    AddToVocabulayBankBtn.setAttribute(
      "title",
      "already added to your VocabulayBank"
    );
  } else {
    svg.setAttribute("stroke", "#ffffffcc");
    AddToVocabulayBankBtn.setAttribute(
      "title",
      "add folder to your VocabulayBank"
    );
    path.setAttribute("d", iconWithPlusSign);
  }

  svg.append(path);
  AddToVocabulayBankBtn.append(svg);

  return AddToVocabulayBankBtn;
}

function uninstallFolderFromVocabulayBankBtn() {
  const uninstallFolderFromVocabulayBankBtn = document.createElement("button");
  const className = "group bg-[hsl(216,28%,7%)] p-1.5 rounded-md";
  uninstallFolderFromVocabulayBankBtn.setAttribute("class", className);
  uninstallFolderFromVocabulayBankBtn.setAttribute("title", "uninstall Floder");

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("fill", "none");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke", "#ff0000cc");
  svg.setAttribute("stroke-width", "1.3");
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
    "M15 13.5H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
  );

  svg.append(path);
  uninstallFolderFromVocabulayBankBtn.append(svg);

  return uninstallFolderFromVocabulayBankBtn;
}

function openFolderInPopup() {
  const openFolderInPopup = document.createElement("button");
  const className = "group bg-[hsl(216,28%,7%)] p-1.5 rounded-md";
  openFolderInPopup.setAttribute("class", className);
  openFolderInPopup.setAttribute("title", "view folder content");

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
  openFolderInPopup.append(svg);

  return openFolderInPopup;
}
