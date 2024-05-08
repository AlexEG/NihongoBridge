export default function Soundfile() {
  const container = document.createElement("div");
  const className = "w-44 h-44 border border-dashed flex flex-col";
  container.setAttribute(
    "id",
    "vocabulary-bank--eng--add-new-word-input-fields--soundfile"
  );
  container.setAttribute("class", className);
  container.setAttribute("title", "Sound File");

  //* drag and drop
  const dragAndDropContainer = document.createElement("div");
  const className2 =
    "w-full h-28 bg-pink-4000 flex flex-col items-center justify-center text-white font-medium";
  dragAndDropContainer.setAttribute("class", className2);

  const text = document.createElement("sapn");
  text.textContent = "Drag & Drop";
  const text2 = document.createElement("sapn");
  text2.textContent = "Or";
  dragAndDropContainer.append(text, text2);

  const browseFilebtn = document.createElement("button");
  const className3 =
    "px-2 py-1 text-[hsl(212,12%,50%)] border border-[hsl(216,28%,20%)] bg-[hsl(216,28%,7%)] hover:border-[hsl(216,28%,30%)] transition-colors hover:text-[hsl(212,12%,80%)] mx-auto";

  browseFilebtn.setAttribute("class", className3);
  browseFilebtn.textContent = "Browse File";

  container.append(dragAndDropContainer, browseFilebtn);
  return container;
}
