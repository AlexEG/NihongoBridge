import TotalXp from "./TotalXp";

export default function TitleBar() {
  const element = document.createElement("div");
  element.setAttribute("id", "titlebar");
  element.setAttribute(
    "class",
    "h-[31px] bg-[hsl(216,28%,7%)] border-b border-b-[hsl(212,12%,21%)] select-none relative pl-14 flex justify-center items-center"
  );
  element.append(TotalXp());
  return element;
}
