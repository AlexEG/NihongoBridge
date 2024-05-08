export default function SaveWordBtn() {
  const saveWordBtn = document.createElement("button");
  const className =
    "px-2 py-1 text-[hsl(212,12%,50%)] border border-[hsl(216,28%,20%)] bg-[hsl(216,28%,7%)] hover:border-[hsl(216,28%,30%)] transition-colors hover:text-[hsl(212,12%,80%)] mx-auto text-sm mt-10";

  saveWordBtn.setAttribute("class", className);
  saveWordBtn.textContent = "Add To Vocabulary Bank";

  // saveWordBtn.addEventListener("click",add)
  return saveWordBtn;
}
